import { useState } from 'react';

import { Button, ThemeProvider } from '@repo/design-system';

function App() {
	const [theme, setTheme] = useState<'light' | 'dark'>('light');

	return (
		<ThemeProvider theme={theme}>
			<Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
				{theme === 'light' ? 'Dark' : 'Light'}
			</Button>
		</ThemeProvider>
	);
}

export default App;
