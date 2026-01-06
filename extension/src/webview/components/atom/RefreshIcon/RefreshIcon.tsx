import { RotateCw } from 'lucide-react';
import React, { useState } from 'react';
import { cn } from '../../../lib/utils';

interface RefreshIconProps {
	onClick?: () => void;
	className?: string;
	size?: number;
}

export const RefreshIcon: React.FC<RefreshIconProps> = ({ onClick, className, size = 16 }) => {
	const [isSpinning, setIsSpinning] = useState(false);

	const handleClick = () => {
		if (onClick) {
			onClick();
		}
		// Trigger one-time spin animation
		// Reset first to allow retriggering
		setIsSpinning(false);
		// Use requestAnimationFrame to ensure the reset is applied before re-adding the class
		requestAnimationFrame(() => {
			setIsSpinning(true);
			setTimeout(() => {
				setIsSpinning(false);
			}, 600); // Animation duration matches CSS
		});
	};

	return (
		<button
			onClick={handleClick}
			className={cn(
				'flex items-center justify-center p-1 rounded cursor-pointer',
				'hover:bg-[var(--vscode-list-hoverBackground)]',
				'transition-colors',
				'text-[var(--vscode-icon-foreground)]',
				className
			)}
			role='button'
			tabIndex={0}
			aria-label='Refresh'
		>
			<RotateCw
				className={cn(isSpinning && 'animate-spin-once')}
				size={size}
				style={{ opacity: 0.7 }}
			/>
		</button>
	);
};
