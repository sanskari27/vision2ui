import { ChevronDown, ChevronRight, RefreshCw } from 'lucide-react';
import React, { useState } from 'react';
import { cn } from '../../../lib/utils';

interface SectionProps {
	title: string;
	count?: number;
	action?: () => void;
	onToggle?: (isExpanded: boolean) => void;
	children?: React.ReactNode;
	defaultExpanded?: boolean;
}

export const Section: React.FC<SectionProps> = ({
	title,
	count,
	action,
	onToggle,
	children,
	defaultExpanded = true,
}) => {
	const [isExpanded, setIsExpanded] = useState(defaultExpanded);

	const handleToggle = () => {
		const newExpanded = !isExpanded;
		setIsExpanded(newExpanded);
		onToggle?.(newExpanded);
	};

	return (
		<div>
			<div
				className={cn(
					'flex items-center gap-1 px-2 py-0 select-none',
					'text-[var(--vscode-foreground)]',
					'font-semibold text-xs uppercase'
				)}
			>
				<div
					className={cn(
						'flex items-center gap-1 flex-1 cursor-pointer',
						'transition-colors rounded'
					)}
					onClick={handleToggle}
					role='button'
					tabIndex={0}
				>
					{isExpanded ? (
						<ChevronDown className='h-3 w-3 flex-shrink-0' />
					) : (
						<ChevronRight className='h-3 w-3 flex-shrink-0' />
					)}
					<span className='flex-1'>{title}</span>
					{count !== undefined && (
						<span className='text-[var(--vscode-descriptionForeground)] text-xs font-normal'>
							{count}
						</span>
					)}
					{action && (
						<button
							onClick={(e) => {
								e.stopPropagation();
								action();
							}}
							className={cn(
								'p-1 rounded cursor-pointer',
								'hover:bg-[var(--vscode-list-hoverBackground)]',
								'transition-colors',
								'flex items-center justify-center'
							)}
							title='Refresh'
							tabIndex={0}
						>
							<RefreshCw className='h-3.5 w-3.5 text-[var(--vscode-icon-foreground)]' />
						</button>
					)}
				</div>
			</div>
			{isExpanded && children && <div>{children}</div>}
		</div>
	);
};
