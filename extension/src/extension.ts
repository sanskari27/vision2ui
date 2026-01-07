import * as child_process from 'child_process';
import FormData from 'form-data';
import * as fs from 'fs';
import * as http from 'http';
import * as https from 'https';
import * as os from 'os';
import * as path from 'path';
import * as vscode from 'vscode';

let apiServerProcess: child_process.ChildProcess | null = null;
const API_BASE_URL = 'http://localhost:9400';
const MAX_STARTUP_RETRIES = 30; // 30 seconds max wait time
const STARTUP_RETRY_INTERVAL = 1000; // 1 second between retries

export function activate(context: vscode.ExtensionContext) {
	// Register the sidebar view
	const provider = new SidebarViewProvider(context.extensionUri, context, context.extensionPath);

	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider('vision2ui.sidebar', provider)
	);
}

async function startApiServer(extensionPath: string): Promise<void> {
	// Check if server is already running
	const isRunning = await checkServerHealth();
	if (isRunning) {
		return;
	}

	// Find the server directory
	// The extension is at: .../vision2ui/extension
	// The server is at: .../vision2ui/vision2ui-server
	// So we go up one level from extension to get the workspace root
	const workspaceRoot = path.dirname(extensionPath);
	let serverPath = path.join(workspaceRoot, 'vision2ui-server');

	// If not found, try workspace folder as fallback
	if (!fs.existsSync(serverPath)) {
		const workspaceFolder = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
		if (workspaceFolder) {
			serverPath = path.join(workspaceFolder, 'vision2ui-server');
		}
	}

	if (!fs.existsSync(serverPath)) {
		throw new Error(
			`Server directory not found at: ${serverPath}. Please ensure vision2ui-server is in your workspace.`
		);
	}

	// Determine Python command
	const serverScript = path.join(serverPath, 'src', 'api_server.py');

	// Check for virtual environment first
	let command: string;
	let args: string[];

	// Check if .venv exists in the server directory
	const venvPythonPath =
		process.platform === 'win32'
			? path.join(serverPath, '.venv', 'Scripts', 'python.exe')
			: path.join(serverPath, '.venv', 'bin', 'python');

	if (fs.existsSync(venvPythonPath)) {
		// Use the virtual environment's Python directly
		command = venvPythonPath;
		args = [serverScript];
		console.log(`Starting API server with venv Python: ${command} ${args.join(' ')}`);
	} else {
		// Fallback to uv or system python
		const pythonCommand = process.platform === 'win32' ? 'python' : 'python3';
		const useUv = await checkCommandAvailable('uv');

		if (useUv) {
			command = 'uv';
			args = ['run', 'python', serverScript];
		} else {
			command = pythonCommand;
			args = [serverScript];
		}
		console.log(`Starting API server with command: ${command} ${args.join(' ')}`);
	}

	apiServerProcess = child_process.spawn(command, args, {
		cwd: serverPath,
		stdio: ['ignore', 'pipe', 'pipe'],
		env: { ...process.env },
	});

	// Log server output for debugging
	apiServerProcess.stdout?.on('data', (data) => {
		console.log(`[API Server] ${data.toString()}`);
	});

	apiServerProcess.stderr?.on('data', (data) => {
		console.error(`[API Server Error] ${data.toString()}`);
	});

	apiServerProcess.on('error', (error) => {
		vscode.window.showErrorMessage(`Failed to start API server: ${error.message}`);
		apiServerProcess = null;
	});

	apiServerProcess.on('exit', (code) => {
		if (code !== 0 && code !== null) {
			vscode.window.showWarningMessage(`API server exited with code ${code}`);
		}
		apiServerProcess = null;
	});

	// Wait for server to be ready
	await waitForServerReady();
}

async function checkCommandAvailable(command: string): Promise<boolean> {
	return new Promise((resolve) => {
		const checkProcess = child_process.spawn(command, ['--version'], {
			stdio: 'ignore',
		});
		checkProcess.on('error', () => resolve(false));
		checkProcess.on('exit', (code) => resolve(code === 0));
		setTimeout(() => {
			checkProcess.kill();
			resolve(false);
		}, 2000);
	});
}

async function checkServerHealth(): Promise<boolean> {
	try {
		await makeHttpRequest(`${API_BASE_URL}/health`);
		return true;
	} catch {
		return false;
	}
}

async function waitForServerReady(): Promise<void> {
	for (let i = 0; i < MAX_STARTUP_RETRIES; i++) {
		if (apiServerProcess?.killed) {
			throw new Error('Server process was killed before it could start');
		}

		const isReady = await checkServerHealth();
		if (isReady) {
			return;
		}

		await new Promise((resolve) => setTimeout(resolve, STARTUP_RETRY_INTERVAL));
	}

	throw new Error('Server failed to start within the expected time');
}

async function makeHttpRequest(url: string): Promise<any> {
	return new Promise((resolve, reject) => {
		const urlObj = new URL(url);
		const isHttps = urlObj.protocol === 'https:';
		const client = isHttps ? https : http;

		const options = {
			hostname: urlObj.hostname,
			port: urlObj.port || (isHttps ? 443 : 80),
			path: urlObj.pathname + urlObj.search,
			method: 'GET',
			timeout: 10000, // 10 seconds for larger files
		};

		const req = client.request(options, (res) => {
			let data = '';

			res.on('data', (chunk) => {
				data += chunk;
			});

			res.on('end', () => {
				if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
					try {
						resolve(JSON.parse(data));
					} catch (e) {
						resolve(data);
					}
				} else {
					reject(new Error(`HTTP ${res.statusCode}: ${res.statusMessage || 'Unknown error'}`));
				}
			});
		});

		req.on('error', (error) => {
			reject(new Error(`Request failed: ${error.message}`));
		});

		req.on('timeout', () => {
			req.destroy();
			reject(new Error('Request timeout'));
		});

		req.end();
	});
}

class SidebarViewProvider implements vscode.WebviewViewProvider {
	public static readonly viewType = 'vision2ui.sidebar';
	private _view?: vscode.WebviewView;
	private _extensionPath: string;

	constructor(
		private readonly _extensionUri: vscode.Uri,
		private readonly _context: vscode.ExtensionContext,
		extensionPath: string
	) {
		this._extensionPath = extensionPath;
	}

	public resolveWebviewView(
		webviewView: vscode.WebviewView,
		context: vscode.WebviewViewResolveContext,
		_token: vscode.CancellationToken
	) {
		this._view = webviewView;

		webviewView.webview.options = {
			enableScripts: true,
			localResourceRoots: [this._extensionUri],
		};

		webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

		// Send initial theme
		this._updateTheme(webviewView.webview);

		// Listen for theme changes
		this._context.subscriptions.push(
			vscode.window.onDidChangeActiveColorTheme(() => {
				if (this._view) {
					this._updateTheme(this._view.webview);
				}
			})
		);

		// Handle messages from the webview
		webviewView.webview.onDidReceiveMessage(async (message) => {
			switch (message.command) {
				case 'buttonClick':
					vscode.window.showInformationMessage('Button clicked!');
					break;
				case 'apiRequest':
					this._handleApiRequest(webviewView.webview, message);
					break;
				case 'uploadComponent':
					await this._handleComponentUpload(webviewView.webview, message);
					break;
				case 'downloadMetadataPrompt':
					await this._handleDownloadMetadataPrompt(webviewView.webview, message);
					break;
				case 'showError':
					vscode.window.showErrorMessage(message.message || 'An error occurred');
					break;
				case 'startServer':
					await this._handleStartServer(webviewView.webview);
					break;
			}
		});
	}

	private _updateTheme(webview: vscode.Webview) {
		const theme = vscode.window.activeColorTheme;
		webview.postMessage({
			command: 'themeChanged',
			theme:
				theme.kind === vscode.ColorThemeKind.Dark ||
				theme.kind === vscode.ColorThemeKind.HighContrast
					? 'dark'
					: 'light',
		});
	}

	private async _makeHttpRequest(url: string): Promise<any> {
		return makeHttpRequest(url);
	}

	private async _handleApiRequest(webview: vscode.Webview, message: any) {
		const { id, apiCommand, data } = message;

		try {
			let result: any;

			switch (apiCommand) {
				case 'fetchComponents': {
					result = await this._makeHttpRequest(`${API_BASE_URL}/components`);
					break;
				}
				case 'fetchComponentContent': {
					const componentName = data?.componentName;
					if (!componentName) {
						throw new Error('Component name is required');
					}
					result = await this._makeHttpRequest(
						`${API_BASE_URL}/components/${encodeURIComponent(componentName)}`
					);
					break;
				}
				case 'checkComponentExists': {
					const componentName = data?.componentName;
					if (!componentName) {
						throw new Error('Component name is required');
					}
					try {
						result = await this._makeHttpRequest(
							`${API_BASE_URL}/components/${encodeURIComponent(componentName)}/exists`
						);
					} catch {
						result = { exists: false };
					}
					break;
				}
				case 'checkHealth': {
					try {
						result = await this._makeHttpRequest(`${API_BASE_URL}/health`);
					} catch {
						result = { status: 'unreachable' };
					}
					break;
				}
				case 'checkMcpConnection': {
					result = await this._checkMcpConnection();
					break;
				}
				case 'fetchMetadataPrompt': {
					result = await this._makeHttpRequest(`${API_BASE_URL}/prompts/metadata-generation`);
					break;
				}
				default:
					throw new Error(`Unknown API command: ${apiCommand}`);
			}

			webview.postMessage({
				command: 'apiResponse',
				id,
				data: result,
			});
		} catch (error) {
			webview.postMessage({
				command: 'apiResponse',
				id,
				error: error instanceof Error ? error.message : 'Unknown error',
			});
		}
	}

	private _getHtmlForWebview(webview: vscode.Webview): string {
		// Get paths to the built webview files
		const webviewPath = path.join(this._extensionUri.fsPath, 'dist', 'webview');
		const indexPath = path.join(webviewPath, 'index.html');

		// Get VS Code theme colors
		const theme = vscode.window.activeColorTheme;
		const vsCodeStyles = `
			:root {
				--vscode-editor-background: ${this._getColorValue('editor.background', theme)};
				--vscode-foreground: ${this._getColorValue('foreground', theme)};
				--vscode-descriptionForeground: ${this._getColorValue('descriptionForeground', theme)};
				--vscode-icon-foreground: ${this._getColorValue('icon.foreground', theme)};
				--vscode-list-hoverBackground: ${this._getColorValue('list.hoverBackground', theme)};
				--vscode-list-activeSelectionBackground: ${this._getColorValue(
					'list.activeSelectionBackground',
					theme
				)};
				--vscode-panel-border: ${this._getColorValue('panel.border', theme)};
				--vscode-sideBar-background: ${this._getColorValue('sideBar.background', theme)};
				--vscode-sideBar-foreground: ${this._getColorValue('sideBar.foreground', theme)};
				--vscode-sideBar-border: ${this._getColorValue('sideBar.border', theme)};
				--vscode-sideBarSectionHeader-background: ${this._getColorValue(
					'sideBarSectionHeader.background',
					theme
				)};
				--vscode-sideBarSectionHeader-foreground: ${this._getColorValue(
					'sideBarSectionHeader.foreground',
					theme
				)};
				--vscode-sideBarSectionHeader-border: ${this._getColorValue('sideBarSectionHeader.border', theme)};
			}
		`;

		// Read the built HTML file
		let html = '';
		if (fs.existsSync(indexPath)) {
			html = fs.readFileSync(indexPath, 'utf-8');

			// Inject VS Code theme styles
			html = html.replace('</head>', `<style>${vsCodeStyles}</style></head>`);

			// Replace resource paths with webview URIs
			const baseUri = webview.asWebviewUri(
				vscode.Uri.joinPath(this._extensionUri, 'dist', 'webview')
			);

			// Replace relative paths with webview URIs
			html = html.replace(/(src|href)="([^"]+)"/g, (match, attr, src) => {
				if (src.startsWith('http') || src.startsWith('data:')) {
					return match;
				}
				const uri = vscode.Uri.joinPath(
					vscode.Uri.joinPath(this._extensionUri, 'dist', 'webview'),
					src.startsWith('/') ? src.slice(1) : src
				);
				return `${attr}="${webview.asWebviewUri(uri)}"`;
			});
		} else {
			// Fallback HTML if build files don't exist yet
			html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vision2UI</title>
</head>
<body>
  <div id="root">
    <h1>Hello world</h1>
    <button onclick="window.vscode.postMessage({command: 'buttonClick'})">Click me</button>
  </div>
  <script>
    window.vscode = acquireVsCodeApi();
  </script>
</body>
</html>`;
		}

		return html;
	}

	private async _checkMcpConnection(): Promise<{
		connected: boolean;
		status: string;
		details?: string;
	}> {
		try {
			// Check MCP configuration file location
			const platform = process.platform;
			let mcpConfigPath: string;

			if (platform === 'darwin') {
				mcpConfigPath = path.join(
					os.homedir(),
					'Library',
					'Application Support',
					'Code',
					'User',
					'mcp.json'
				);
			} else if (platform === 'win32') {
				mcpConfigPath = path.join(
					os.homedir(),
					'AppData',
					'Roaming',
					'Code',
					'User',
					'profiles',
					'2944255d',
					'mcp.json'
				);
			} else {
				mcpConfigPath = path.join(os.homedir(), '.config', 'Code', 'User', 'mcp.json');
			}

			// Check if MCP config file exists
			if (!fs.existsSync(mcpConfigPath)) {
				return {
					connected: false,
					status: 'not_configured',
					details: 'MCP configuration file not found',
				};
			}

			// Read and parse MCP config
			const configContent = fs.readFileSync(mcpConfigPath, 'utf-8');
			let mcpConfig: any;
			try {
				mcpConfig = JSON.parse(configContent);
			} catch {
				return {
					connected: false,
					status: 'invalid_config',
					details: 'MCP configuration file is invalid JSON',
				};
			}

			// Check if vision2ui server is configured
			const servers = mcpConfig.mcpServers || mcpConfig.servers || {};
			const vision2uiServer = servers.vision2ui;

			if (!vision2uiServer) {
				return {
					connected: false,
					status: 'not_configured',
					details: 'vision2ui MCP server not found in configuration',
				};
			}

			// Check if it's using stdio transport
			const transport = vision2uiServer.transport || 'stdio';
			if (transport !== 'stdio') {
				return {
					connected: false,
					status: 'wrong_transport',
					details: `MCP server is using ${transport} transport, expected stdio`,
				};
			}

			// Verify command configuration
			if (!vision2uiServer.command) {
				return {
					connected: false,
					status: 'invalid_config',
					details: 'MCP server command not configured',
				};
			}

			// Try to verify the connection is actually live
			// We'll attempt to test if the MCP server process is running and responsive
			const isConnected = await this._testMcpConnection(vision2uiServer);

			if (!isConnected) {
				return {
					connected: false,
					status: 'not_connected',
					details: 'MCP server is configured but not connected',
				};
			}

			return {
				connected: true,
				status: 'connected',
				details: 'MCP server is connected and responding',
			};
		} catch (error) {
			return {
				connected: false,
				status: 'error',
				details: error instanceof Error ? error.message : 'Unknown error',
			};
		}
	}

	private async _handleComponentUpload(webview: vscode.Webview, message: any): Promise<void> {
		const { filename, content } = message;

		try {
			// Create FormData
			const formData = new FormData();
			const buffer = Buffer.from(content, 'utf-8');
			formData.append('file', buffer, {
				filename: filename,
				contentType: 'text/markdown',
			});

			const urlObj = new URL(`${API_BASE_URL}/components/upload`);
			const isHttps = urlObj.protocol === 'https:';
			const client = isHttps ? https : http;

			const result = await new Promise<any>((resolve, reject) => {
				const options = {
					hostname: urlObj.hostname,
					port: urlObj.port || (isHttps ? 443 : 80),
					path: urlObj.pathname,
					method: 'POST',
					headers: formData.getHeaders(),
					timeout: 30000,
				};

				const req = client.request(options, (res) => {
					let data = '';

					res.on('data', (chunk) => {
						data += chunk;
					});

					res.on('end', () => {
						if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
							try {
								resolve(JSON.parse(data));
							} catch (e) {
								reject(new Error('Invalid JSON response'));
							}
						} else {
							try {
								const errorData = JSON.parse(data);
								reject(new Error(errorData.detail || `HTTP ${res.statusCode}`));
							} catch {
								reject(
									new Error(`HTTP ${res.statusCode}: ${res.statusMessage || 'Unknown error'}`)
								);
							}
						}
					});
				});

				req.on('error', (error) => {
					reject(new Error(`Request failed: ${error.message}`));
				});

				req.on('timeout', () => {
					req.destroy();
					reject(new Error('Request timeout'));
				});

				formData.pipe(req);
			});

			vscode.window.showInformationMessage(
				`Component "${result.component_name}" uploaded successfully`
			);

			// Notify webview to refresh component list
			webview.postMessage({
				command: 'componentUploaded',
				componentName: result.component_name,
			});
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : 'Failed to upload component';
			vscode.window.showErrorMessage(`Failed to upload component: ${errorMessage}`);
			webview.postMessage({
				command: 'uploadError',
				error: errorMessage,
			});
		}
	}

	private async _handleDownloadMetadataPrompt(
		webview: vscode.Webview,
		message: any
	): Promise<void> {
		const { content, filename } = message;

		try {
			// Show save dialog
			const uri = await vscode.window.showSaveDialog({
				defaultUri: vscode.Uri.file(filename),
				filters: {
					'Markdown files': ['md'],
					'All files': ['*'],
				},
			});

			if (!uri) {
				// User cancelled the save dialog
				webview.postMessage({
					command: 'downloadError',
					error: 'Save cancelled',
				});
				return;
			}

			// Write the file
			fs.writeFileSync(uri.fsPath, content, 'utf-8');

			vscode.window.showInformationMessage(`File saved to ${uri.fsPath}`);

			// Notify webview
			webview.postMessage({
				command: 'metadataPromptDownloaded',
				filePath: uri.fsPath,
			});
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : 'Failed to save file';
			vscode.window.showErrorMessage(`Failed to save file: ${errorMessage}`);
			webview.postMessage({
				command: 'downloadError',
				error: errorMessage,
			});
		}
	}

	private async _handleStartServer(webview: vscode.Webview): Promise<void> {
		try {
			// Notify webview that server is starting
			webview.postMessage({
				command: 'serverStatus',
				status: 'starting',
			});

			await startApiServer(this._extensionPath);

			// Notify webview that server is ready
			webview.postMessage({
				command: 'serverStatus',
				status: 'ready',
			});
		} catch (error) {
			// Notify webview that server failed to start
			webview.postMessage({
				command: 'serverStatus',
				status: 'error',
				error: error instanceof Error ? error.message : 'Unknown error',
			});
		}
	}

	private async _testMcpConnection(serverConfig: any): Promise<boolean> {
		return new Promise((resolve) => {
			try {
				// Check if the MCP server process is running
				// VS Code spawns the MCP server process when connected
				const command = serverConfig.command;
				const args = serverConfig.args || [];

				// Build the command string to search for
				const commandParts = [command, ...args].join(' ');

				// Use ps/grep to check if the process is running
				// This is a heuristic - if the process is running, VS Code likely has it connected
				const platform = process.platform;
				let checkCommand: string;
				let checkArgs: string[];

				if (platform === 'win32') {
					checkCommand = 'powershell.exe';
					checkArgs = [
						'-NoProfile',
						'-Command',
						`(Get-CimInstance Win32_Process | ? {$_.CommandLine -match 'mcp_server.py'}) -ne $null`,
					];
				} else {
					checkCommand = 'ps';
					checkArgs = ['aux'];
				}

				const checkProcess = child_process.spawn(checkCommand, checkArgs, {
					stdio: ['pipe', 'pipe', 'pipe'],
				});

				let output = '';
				checkProcess.stdout?.on('data', (data) => {
					output += data.toString() + '\n';
				});

				checkProcess.on('close', (code) => {
					if (code === 0) {
						if (platform === 'win32') {
							if (output.trim().toLowerCase().includes('false')) {
								resolve(false);
							} else if (output.includes('python.exe') || output.includes('python3.exe')) {
								resolve(true);
							}
						} else {
							// Check if the command appears in the process list
							// Look for the command or key parts of it
							const processName = args.length > 0 ? args[args.length - 1] : '';
							if (processName) {
								const hasProcess = output.includes(processName);
								resolve(hasProcess);
							} else {
								resolve(false);
							}
						}
					} else {
						// If we can't check, assume not connected to be safe
						resolve(false);
					}
				});

				checkProcess.on('error', () => {
					resolve(false);
				});

				// Timeout after 2 seconds
				setTimeout(() => {
					checkProcess.kill();
					resolve(false);
				}, 2000);
			} catch (error) {
				resolve(false);
			}
		});
	}

	private _getColorValue(colorId: string, theme: vscode.ColorTheme): string {
		// VS Code theme colors from the provided JSON
		const themeColors: Record<string, string> = {
			'editor.background': '#1f1f1f',
			foreground: '#cccccc',
			descriptionForeground: '#9d9d9d',
			'icon.foreground': '#cccccc',
			'list.hoverBackground': 'rgba(255, 255, 255, 0.1)',
			'list.activeSelectionBackground': 'rgba(0, 120, 212, 0.4)', // #0078d4 with opacity
			'panel.border': '#2b2b2b',
			'sideBar.background': '#181818',
			'sideBar.foreground': '#cccccc',
			'sideBar.border': '#2b2b2b',
			'sideBarSectionHeader.background': '#181818',
			'sideBarSectionHeader.foreground': '#cccccc',
			'sideBarSectionHeader.border': '#2b2b2b',
		};

		// Return the color if found, otherwise use a sensible default
		return themeColors[colorId] || themeColors['foreground'] || '#cccccc';
	}
}

export function deactivate() {
	// Stop the API server if it's running
	if (apiServerProcess && !apiServerProcess.killed) {
		apiServerProcess.kill();
		apiServerProcess = null;
	}
}
