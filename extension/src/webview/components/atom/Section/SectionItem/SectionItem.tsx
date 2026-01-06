import { FileCode } from 'lucide-react';
import React from 'react';
import { cn } from '../../../../lib/utils';

interface SectionItemProps {
	name: string;
	onClick?: () => void;
	icon?: React.ElementType;
	className?: string;
	iconClassName?: string;
}

export const SectionItem: React.FC<SectionItemProps> = ({
	name,
	onClick,
	icon,
	className,
	iconClassName,
}) => {
	const Icon = (icon as React.ElementType) || FileCode;
	return (
		<div
			className={cn(
				'flex items-center gap-2 px-2 py-1 rounded cursor-pointer',
				'hover:bg-[var(--vscode-list-hoverBackground)]',
				'active:bg-[var(--vscode-list-activeSelectionBackground)]',
				'transition-colors',
				'text-[var(--vscode-foreground)]',
				className
			)}
			onClick={onClick}
			role='button'
			tabIndex={0}
		>
			<Icon
				className={cn('h-4 w-4 flex-shrink-0 text-[var(--vscode-icon-foreground)]', iconClassName)}
				style={{ opacity: 0.7 }}
			/>
			<span className='text-sm flex-1 truncate'>{name}</span>
		</div>
	);
};
