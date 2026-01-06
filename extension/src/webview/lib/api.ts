/// <reference path="../vscode.d.ts" />

import { messageListener } from './messageListener';

export interface ComponentListResponse {
	components: string[];
	count: number;
}

export interface ComponentContentResponse {
	component_name: string;
	content: string;
}

class ApiClient {
	private messageIdCounter = 0;
	private pendingRequests = new Map<
		number,
		{ resolve: (value: any) => void; reject: (error: any) => void }
	>();

	constructor() {
		// Listen for responses from extension host

		messageListener.subscribe('apiResponse', (event: MessageEvent) => {
			const message = event.data;
			if (message.command === 'apiResponse' && message.id !== undefined) {
				const pending = this.pendingRequests.get(message.id);
				if (pending) {
					this.pendingRequests.delete(message.id);
					if (message.error) {
						pending.reject(new Error(message.error));
					} else {
						pending.resolve(message.data);
					}
				}
			}
		});
	}

	private async sendRequest(command: string, data?: any): Promise<any> {
		return new Promise((resolve, reject) => {
			const id = ++this.messageIdCounter;
			this.pendingRequests.set(id, { resolve, reject });

			// Timeout after 10 seconds
			setTimeout(() => {
				if (this.pendingRequests.has(id)) {
					this.pendingRequests.delete(id);
					reject(new Error('Request timeout'));
				}
			}, 10000);

			window.vscode.postMessage({
				command: 'apiRequest',
				id,
				apiCommand: command,
				data,
			});
		});
	}

	async fetchComponents(): Promise<string[]> {
		try {
			const response: ComponentListResponse = await this.sendRequest('fetchComponents');
			return response.components;
		} catch (error) {
			console.error('Error fetching components:', error);
			throw error;
		}
	}

	async fetchComponentContent(componentName: string): Promise<string> {
		try {
			const response: ComponentContentResponse = await this.sendRequest('fetchComponentContent', {
				componentName,
			});
			return response.content;
		} catch (error) {
			console.error('Error fetching component content:', error);
			throw error;
		}
	}

	async checkComponentExists(componentName: string): Promise<boolean> {
		try {
			const response: { exists: boolean } = await this.sendRequest('checkComponentExists', {
				componentName,
			});
			return response.exists;
		} catch (error) {
			console.error('Error checking component existence:', error);
			return false;
		}
	}

	async checkHealth(): Promise<{ status: string; healthy: boolean }> {
		try {
			const response: { status: string } = await this.sendRequest('checkHealth');
			if (response.status === 'unreachable') {
				return { status: response.status, healthy: false };
			}
			return { status: response.status, healthy: true };
		} catch (error) {
			console.error('Error checking health:', error);
			return { status: 'unreachable', healthy: false };
		}
	}

	async checkMcpConnection(): Promise<{ connected: boolean; status: string; details?: string }> {
		try {
			const response: { connected: boolean; status: string; details?: string } =
				await this.sendRequest('checkMcpConnection');
			return response;
		} catch (error) {
			console.error('Error checking MCP connection:', error);
			return { connected: false, status: 'error', details: 'Failed to check MCP connection' };
		}
	}

	async startServer(): Promise<void> {
		return new Promise((resolve, reject) => {
			const unsubscribe = messageListener.subscribe('serverStatus', (event: MessageEvent) => {
				const message = event.data;
				if (message.command === 'serverStatus') {
					if (message.status === 'ready') {
						resolve();
						clearTimeout(timeout);
					} else if (message.status === 'error') {
						reject(new Error(message.error || 'Failed to start server'));
						clearTimeout(timeout);
					}
				}
			});

			const timeout = setTimeout(() => {
				reject(new Error('Server start timeout'));
				unsubscribe?.();
			}, 10000); // 10 second timeout for server startup

			window.vscode.postMessage({
				command: 'startServer',
			});
		});
	}

	async fetchMetadataPrompt(): Promise<string> {
		try {
			const response = await this.sendRequest('fetchMetadataPrompt');
			// Ensure response is a string (API returns plain text)
			return typeof response === 'string' ? response : String(response);
		} catch (error) {
			console.error('Error fetching metadata prompt:', error);
			throw error;
		}
	}
}

export const apiClient = new ApiClient();
