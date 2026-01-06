import React from 'react';
import { statusBarManager } from './StatusBarManager';
import type { StatusType } from './types';

// StatusBar API
export class StatusBarAPI {
	setStatus(status: StatusType) {
		statusBarManager.setStatus(status);
		return this;
	}

	setText(text: string) {
		statusBarManager.setText(text);
		return this;
	}

	show() {
		statusBarManager.show();
		return this;
	}

	hide() {
		statusBarManager.hide();
		return this;
	}

	setAction(action: React.ReactNode | null) {
		statusBarManager.setAction(action);
		return this;
	}
}

// Export static API
export const StatusBar = new StatusBarAPI();
