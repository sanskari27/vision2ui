import React from 'react';

export type StatusType = 'loading' | 'warning' | 'error' | 'success' | 'info';

export interface StatusBarState {
	status: StatusType | null;
	text: string;
	visible: boolean;
	action: React.ReactNode | null;
}

export interface StatusBarContextType {
	state: StatusBarState;
	updateState: (updates: Partial<StatusBarState>) => void;
}

