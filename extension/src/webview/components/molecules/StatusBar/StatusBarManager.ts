import React from 'react';
import type { StatusBarContextType, StatusBarState, StatusType } from './types';

// Global state manager
export class StatusBarManager {
	private context: StatusBarContextType | null = null;
	private currentState: StatusBarState = {
		status: null,
		text: '',
		visible: false,
		action: null,
	};

	setContext(context: StatusBarContextType) {
		this.context = context;
	}

	private update(updates: Partial<StatusBarState>) {
		this.currentState = { ...this.currentState, ...updates };
		if (this.context) {
			this.context.updateState(updates);
		}
	}

	setStatus(status: StatusType) {
		this.update({ status });
		return this;
	}

	setText(text: string) {
		const visible = text.trim().length > 0;
		this.update({ text, visible });
		return this;
	}

	show() {
		if (this.currentState.text.trim().length > 0) {
			this.update({ visible: true });
		}
		return this;
	}

	hide() {
		this.update({ visible: false, text: '', status: null, action: null });
		return this;
	}

	setAction(action: React.ReactNode | null) {
		this.update({ action });
		return this;
	}

	getState(): StatusBarState {
		return { ...this.currentState };
	}

	syncState(state: StatusBarState) {
		this.currentState = { ...state };
	}
}

// Export singleton instance
export const statusBarManager = new StatusBarManager();
