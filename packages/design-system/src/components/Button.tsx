import React from 'react';
import { button } from './Button.css';
import { pretentdardJP } from '../index.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...props }: ButtonProps) {
	return (
		<button
			{...props}
			className={`${button} ${pretentdardJP}`}
		>
			{children}
		</button>
	);
}
