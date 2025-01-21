import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react';
import { changeDocumentTheme, getSystemTheme } from './lib';

export type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
	theme: 'system',
	setTheme: () => {},
});

interface ThemeProviderProps {
	children: React.ReactNode;
	theme?: Theme;
}

export const ThemeProvider = ({
	children,
	theme = 'system',
}: ThemeProviderProps) => {
	const [currentTheme, setCurrentTheme] = useState<Theme>(theme);

	const setTheme = useCallback((newTheme: Theme) => {
		setCurrentTheme(newTheme);
		changeDocumentTheme(newTheme !== 'system' ? newTheme : getSystemTheme());
	}, []);

	useEffect(() => {
		setTheme(theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme: currentTheme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}

	return context;
};
