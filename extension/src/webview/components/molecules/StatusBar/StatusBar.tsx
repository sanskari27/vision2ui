import { AlertCircle, CheckCircle2, Info, Loader2, XCircle } from 'lucide-react';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { cn } from '../../../lib/utils';
import { statusBarManager } from './StatusBarManager';
import type { StatusBarContextType, StatusBarState, StatusType } from './types';

const StatusBarContext = createContext<StatusBarContextType | null>(null);

// StatusBar Provider Component
export const StatusBarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	// Initialize state from manager to sync any pre-existing state
	const [state, setState] = useState<StatusBarState>(() => statusBarManager.getState());

	const updateState = useCallback((updates: Partial<StatusBarState>) => {
		setState((prev) => {
			const newState = { ...prev, ...updates };
			// Auto-hide if text is empty
			if (!newState.text || newState.text.trim().length === 0) {
				newState.visible = false;
			}
			return newState;
		});
	}, []);

	// Set context reference - update it whenever state or updateState changes
	useEffect(() => {
		statusBarManager.setContext({ state, updateState });
	}, [state, updateState]);

	// Sync initial state from manager on mount
	useEffect(() => {
		const managerState = statusBarManager.getState();
		if (managerState.text || managerState.status || managerState.visible) {
			setState(managerState);
		}
	}, []); // Only run on mount

	return (
		<StatusBarContext.Provider value={{ state, updateState }}>
			{children}
			<StatusBarComponent />
		</StatusBarContext.Provider>
	);
};

// StatusBar Component
const StatusBarComponent: React.FC = () => {
	const context = useContext(StatusBarContext);

	if (!context) {
		return null;
	}

	const { state } = context;

	if (!state.visible || !state.text || state.text.trim().length === 0) {
		return null;
	}

	const getStatusIconColor = (status: StatusType | null) => {
		switch (status) {
			case 'loading':
				return 'text-[var(--vscode-descriptionForeground)]';
			case 'warning':
				return 'text-yellow-500';
			case 'error':
				return 'text-red-500';
			case 'success':
				return 'text-green-500';
			case 'info':
				return 'text-blue-500';
			default:
				return 'text-[var(--vscode-descriptionForeground)]';
		}
	};

	const getStatusIcon = (status: StatusType | null) => {
		const iconColor = getStatusIconColor(status);
		switch (status) {
			case 'loading':
				return <Loader2 className={`h-3 w-3 animate-spin ${iconColor}`} />;
			case 'warning':
				return <AlertCircle className={`h-3 w-3 ${iconColor}`} />;
			case 'error':
				return <XCircle className={`h-3 w-3 ${iconColor}`} />;
			case 'success':
				return <CheckCircle2 className={`h-3 w-3 ${iconColor}`} />;
			case 'info':
				return <Info className={`h-3 w-3 ${iconColor}`} />;
			default:
				return null;
		}
	};

	return (
		<div
			className={cn(
				'fixed bottom-0 left-0 right-0 z-50',
				'bg-[var(--vscode-sideBar-background)]',
				'flex items-center gap-1.5 px-2 py-1 text-xs',
				'text-[var(--vscode-descriptionForeground)]',
				'border-t border-[var(--vscode-sideBar-border)]'
			)}
		>
			{getStatusIcon(state.status)}
			<span className='flex-1 truncate'>{state.text}</span>
			{state.action && <div className='flex items-center'>{state.action}</div>}
		</div>
	);
};

// Hook to use StatusBar context (optional, for internal use)
export const useStatusBar = () => {
	const context = useContext(StatusBarContext);
	if (!context) {
		throw new Error('useStatusBar must be used within StatusBarProvider');
	}
	return context;
};
