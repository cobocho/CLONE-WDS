import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import { changeDocumentTheme, getSystemTheme } from './lib'

export type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'system',
  setTheme: () => {},
  toggleTheme: () => {},
})

interface ThemeProviderProps {
  children: React.ReactNode
  theme?: Theme
}

export const ThemeProvider = ({
  children,
  theme = 'system',
}: ThemeProviderProps) => {
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <ThemeContext.Provider
      value={{ theme: currentTheme, setTheme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
