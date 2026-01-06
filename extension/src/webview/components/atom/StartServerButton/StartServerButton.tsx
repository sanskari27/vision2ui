import { Loader2, Play } from 'lucide-react';
import React, { useState } from 'react';
import { apiClient } from '../../../lib/api';
import { Button } from '../../ui/button';

interface StartServerButtonProps {
	onSuccess?: () => void;
}

export const StartServerButton: React.FC<StartServerButtonProps> = ({ onSuccess }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleClick = async () => {
		setIsLoading(true);
		setError(null);

		try {
			await apiClient.startServer();
			setIsLoading(false);
			if (onSuccess) {
				onSuccess();
			}
		} catch (err) {
			setIsLoading(false);
			const errorMessage = err instanceof Error ? err.message : 'Failed to start server';
			setError(errorMessage);

			// Show error as VSCode notification
			if (window.vscode) {
				window.vscode.postMessage({
					command: 'showError',
					message: errorMessage,
				});
			}
		}
	};

	return (
		<Button onClick={handleClick} disabled={isLoading}>
			{isLoading ? (
				<>
					<Loader2 className='h-4 w-4 mr-2 animate-spin' />
					Starting Server...
				</>
			) : (
				<>
					<Play className='h-4 w-4 mr-2' />
					Start Server
				</>
			)}
		</Button>
	);
};
