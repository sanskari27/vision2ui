import { Bug, Code2, File, Loader2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { apiClient } from '../../../lib/api';
import { messageListener } from '../../../lib/messageListener';
import { Section, SectionItem } from '../../atom';
import { StatusBar } from '../../molecules';

export const ComponentList: React.FC = () => {
	const [components, setComponents] = useState<string[] | null>([]);
	const [loading, setLoading] = useState(true);

	const fetchComponents = async () => {
		setLoading(true);
		try {
			const data = await apiClient.fetchComponents();
			setComponents(data);
		} catch (err) {
			StatusBar.setStatus('error')
				.setText(err instanceof Error ? err.message : 'Failed to fetch components')
				.show();
			setComponents(null);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchComponents();
		const unsubscribe = messageListener.subscribe('componentUploaded', () => {
			fetchComponents();
		});
		return () => unsubscribe();
	}, []);

	if (loading) {
		return (
			<div className='flex items-center justify-center h-full'>
				<div className='flex flex-col items-center gap-2'>
					<Loader2 className='h-8 w-8 animate-spin text-primary' />
					<p className='text-sm text-muted-foreground'>Loading components...</p>
				</div>
			</div>
		);
	}
	return (
		<Section title='Components' count={components?.length || 0} action={fetchComponents}>
			{!components ? (
				<SectionItem name='Error fetching components' icon={Bug} iconClassName='text-red-500' />
			) : components.length === 0 ? (
				<SectionItem name='No components found' icon={File} />
			) : (
				components.map((componentName) => (
					<SectionItem key={componentName} name={componentName} icon={Code2} />
				))
			)}
		</Section>
	);
};
