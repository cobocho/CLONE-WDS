import { DARK_MODE_CLASS_NAME } from '@/index.css';
import { Theme } from './ThemeProvider';

export const getSystemTheme = () => {
	const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';

	return systemTheme;
};

export const changeDocumentTheme = (theme: Exclude<Theme, 'system'>) => {
	if (theme === 'dark') {
		document.body.classList.add(DARK_MODE_CLASS_NAME);
	}
	if (theme === 'light') {
		document.body.classList.remove(DARK_MODE_CLASS_NAME);
	}
};
