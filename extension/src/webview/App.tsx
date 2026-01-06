import { Loader2 } from 'lucide-react';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { RefreshIcon, StartServerButton } from './components/atom';
import { StatusBar, StatusBarProvider } from './components/molecules';
import { ActionsSection, ComponentList } from './components/organisms';
import { ThemeProvider } from './components/providers/ThemeProvider';
import { ScrollArea } from './components/ui/scroll-area';
import { apiClient } from './lib/api';
import './styles/index.css';

type ServerStatus = 'not_started' | 'ready' | 'loading';

const AppContent: React.FC = () => {
	const [serverStatus, setServerStatus] = useState<ServerStatus>('loading');

	const checkMcpConnection = useCallback(async () => {
		StatusBar.setStatus('info').setText('Checking MCP connection...').show();
		apiClient.checkMcpConnection().then((mcp) => {
			switch (mcp.status) {
				case 'invalid_config':
					StatusBar.setStatus('error')
						.setText('MCP configuration is invalid')
						.setAction(<RefershAction />)
						.show();
					break;
				case 'not_configured':
					StatusBar.setStatus('error')
						.setText('MCP configuration is not configured')
						.setAction(<RefershAction />)
						.show();
					break;
				case 'wrong_transport':
					StatusBar.setStatus('error')
						.setText('MCP is using wrong transport')
						.setAction(<RefershAction />)
						.show();
					break;
				case 'not_connected':
					StatusBar.setStatus('error')
						.setText('MCP is not connected')
						.setAction(<RefershAction />)
						.show();
					break;
				case 'connected':
					StatusBar.setStatus('success')
						.setText('MCP connected')
						.setAction(<RefershAction />)
						.show();
					break;
				default:
					StatusBar.setStatus('error')
						.setText('MCP connection failed')
						.setAction(<RefershAction />)
						.show();
					break;
			}
		});
	}, []);

	const RefershAction = memo(() => {
		return <RefreshIcon onClick={checkMcpConnection} />;
	});

	useEffect(() => {
		if (serverStatus === 'loading') {
			StatusBar.setStatus('loading').setText('Loading...').show();
			apiClient.checkHealth().then((health) => {
				if (health.healthy) {
					StatusBar.setStatus('success').setText('Server is ready').show();
				} else {
					StatusBar.setStatus('error').setText('Server is not running').show();
				}
				setServerStatus(health.healthy ? 'ready' : 'not_started');
			});
		} else if (serverStatus === 'ready') {
			checkMcpConnection();
		}
	}, [serverStatus, checkMcpConnection]);

	return (
		<div className='h-full w-full'>
			{serverStatus === 'ready' ? (
				<div className='flex flex-col h-full bg-[var(--vscode-sideBar-background)]'>
					<ScrollArea className='flex-1'>
						<div className='py-1'>
							<ActionsSection />
							<ComponentList />
						</div>
					</ScrollArea>
				</div>
			) : serverStatus === 'loading' ? (
				<div className='flex items-center justify-center h-full p-4'>
					<Loader2 className='h-8 w-8 animate-spin text-primary' />
					<p className='text-sm text-muted-foreground'>Loading...</p>
				</div>
			) : (
				<div className='flex items-center justify-center h-full p-4'>
					<StartServerButton onSuccess={() => setServerStatus('ready')} />
				</div>
			)}
		</div>
	);
};

const App: React.FC = () => {
	return (
		<ThemeProvider>
			<StatusBarProvider>
				<AppContent />
			</StatusBarProvider>
		</ThemeProvider>
	);
};

export default App;
