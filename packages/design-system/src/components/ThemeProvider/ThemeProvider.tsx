import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  ReactNode,
  ReactElement,
} from 'react'

import { changeDocumentTheme, getSystemTheme } from './lib'

export type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const defaultThemeContext: ThemeContextType = {
  theme: 'system',
  setTheme: () => {},
  toggleTheme: () => {},
}

const ThemeContext = createContext<ThemeContextType>(defaultThemeContext)

const ThemeContextProvider = ThemeContext.Provider

interface ThemeProviderProps {
  children: ReactNode
  theme?: Theme
}

export const ThemeProvider = ({
  children,
  theme = 'system',
}: ThemeProviderProps): ReactElement => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(theme)

  const setTheme = useCallback((newTheme: Theme) => {
    setCurrentTheme(newTheme)
    changeDocumentTheme(newTheme !== 'system' ? newTheme : getSystemTheme())
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light')
  }, [setTheme, currentTheme])

  useEffect(() => {
    setTheme(theme)
  }, [setTheme, theme])

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
