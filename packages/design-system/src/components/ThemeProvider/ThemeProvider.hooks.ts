import { useState, useCallback, useEffect } from 'react'

import { changeDocumentTheme, getSystemTheme } from './ThemeProvider.utils'
import { Theme } from './ThemeProvider.model'

export const useThemeControl = (theme: Theme) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(theme)

  const setTheme = useCallback((newTheme: Theme) => {
    setCurrentTheme(newTheme)
    changeDocumentTheme(newTheme !== 'system' ? newTheme : getSystemTheme())
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light')
  }, [setTheme, currentTheme])

  useEffect(
    function setThemeOnMount() {
      setTheme(theme)
    },
    [setTheme, theme],
  )

  return { theme: currentTheme, setTheme, toggleTheme }
}
