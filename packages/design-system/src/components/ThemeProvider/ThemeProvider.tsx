import { createContext, useContext, ReactNode, ReactElement } from 'react'

import { useThemeControl } from './ThemeProvider.hooks'
import { Theme, ThemeContextType } from './ThemeProvider.model'

const ThemeContext = createContext<ThemeContextType | null>(null)

const ThemeContextProvider = ThemeContext.Provider

interface ThemeProviderProps {
  children: ReactNode
  theme?: Theme
}

export const ThemeProvider = ({
  children,
  theme = 'system',
}: ThemeProviderProps): ReactElement => {
  const { theme: currentTheme, setTheme, toggleTheme } = useThemeControl(theme)

  return (
    <ThemeContextProvider
      value={{ theme: currentTheme, setTheme, toggleTheme }}
    >
      {children}
    </ThemeContextProvider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
