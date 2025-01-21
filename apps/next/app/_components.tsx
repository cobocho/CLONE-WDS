'use client';

import { Button, DARK_MODE_CLASS_NAME, useTheme } from '@repo/design-system';
import React from 'react';

const ToggleDarkmode = () => {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			onClick={() => {
				setTheme(theme === 'dark' ? 'light' : 'dark');
			}}
		>
			Toggle Darkmode
		</Button>
	);
};

export default ToggleDarkmode;
