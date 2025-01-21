import React from 'react';
import { button } from './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...props }: ButtonProps) {
	return (
		<button
			{...props}
			className={`${button}`}
		>
			{children}
		</button>
	);
}
