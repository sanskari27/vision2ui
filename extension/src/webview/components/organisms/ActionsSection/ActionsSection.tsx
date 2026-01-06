/// <reference path="../../../vscode.d.ts" />
import { Download, Plus } from 'lucide-react';
import React, { useState } from 'react';
import { apiClient } from '../../../lib/api';
import { cn } from '../../../lib/utils';
import { Section } from '../../atom';
import { Button } from '../../ui/button';

export const ActionsSection: React.FC = () => {
	const [uploading, setUploading] = useState(false);
	const [downloading, setDownloading] = useState(false);

	React.useEffect(() => {
		const handleMessage = (event: MessageEvent) => {
			if (event.data.command === 'componentUploaded') {
				setUploading(false);
			} else if (event.data.command === 'uploadError') {
				setUploading(false);
			} else if (event.data.command === 'metadataPromptDownloaded') {
				setDownloading(false);
			} else if (event.data.command === 'downloadError') {
				setDownloading(false);
			}
		};

		window.addEventListener('message', handleMessage);
		return () => window.removeEventListener('message', handleMessage);
	}, []);

	const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (!file) return;

		// Validate filename format: <component_name>-<version>.md
		if (!file.name.endsWith('.md')) {
			window.vscode.postMessage({
				command: 'showError',
				message: 'File must have .md extension',
			});
			event.target.value = '';
			return;
		}

		const nameWithoutExt = file.name.slice(0, -3);
		const parts = nameWithoutExt.split('-');
		if (parts.length < 2) {
			window.vscode.postMessage({
				command: 'showError',
				message: 'Filename must be in format <component_name>-<version>.md',
			});
			event.target.value = '';
			return;
		}

		setUploading(true);
		try {
			const fileContent = await file.text();

			// Send file to extension host for upload
			window.vscode.postMessage({
				command: 'uploadComponent',
				filename: file.name,
				content: fileContent,
			});
		} catch (error) {
			setUploading(false);
			window.vscode.postMessage({
				command: 'showError',
				message: error instanceof Error ? error.message : 'Failed to read file',
			});
			event.target.value = '';
		}
	};

	const handleDownloadPrompt = async () => {
		setDownloading(true);
		try {
			const promptContent = await apiClient.fetchMetadataPrompt();

			// Send content to extension host to save the file
			window.vscode.postMessage({
				command: 'downloadMetadataPrompt',
				content: promptContent,
				filename: 'metadata-generation-prompt.md',
			});
		} catch (error) {
			window.vscode.postMessage({
				command: 'showError',
				message: error instanceof Error ? error.message : 'Failed to download prompt',
			});
			setDownloading(false);
		}
	};

	return (
		<Section title='Actions'>
			<div className='px-2 space-y-1'>
				<input
					type='file'
					id='component-upload'
					accept='.md'
					onChange={handleFileUpload}
					className='hidden'
					disabled={uploading}
				/>
				<Button
					variant='outline'
					size='sm'
					className={cn(
						'w-full justify-start py-1',
						'text-[var(--vscode-foreground)]',
						'border-[var(--vscode-panel-border)]',
						'hover:bg-[var(--vscode-list-hoverBackground)]',
						uploading && 'opacity-50 cursor-not-allowed'
					)}
					disabled={uploading}
					onClick={() => {
						if (!uploading) {
							document.getElementById('component-upload')?.click();
						}
					}}
				>
					<Plus className='h-4 w-4 mr-2' />
					{uploading ? 'Uploading...' : 'Add Component'}
				</Button>
				<Button
					variant='outline'
					size='sm'
					className={cn(
						'w-full justify-start py-1',
						'text-[var(--vscode-foreground)]',
						'border-[var(--vscode-panel-border)]',
						'hover:bg-[var(--vscode-list-hoverBackground)]',
						downloading && 'opacity-50 cursor-not-allowed'
					)}
					disabled={downloading}
					onClick={handleDownloadPrompt}
				>
					<Download className='h-4 w-4 mr-2' />
					{downloading ? 'Downloading...' : 'Download Metadata Prompt'}
				</Button>
			</div>
		</Section>
	);
};
