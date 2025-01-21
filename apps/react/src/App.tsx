import { useState } from 'react'

import { Button, Text, ThemeProvider } from '@repo/design-system'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  return (
    <ThemeProvider theme={theme}>
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? 'Dark' : 'Light'}
      </Button>
      <Text color="blue">Hello</Text>
    </ThemeProvider>
  )
}

export default App
