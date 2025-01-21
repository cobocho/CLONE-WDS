import { DARK_MODE_CLASS_NAME } from '@/index.css'

import { Theme } from './ThemeProvider.model'

export const getSystemTheme = () => {
  const systemTheme: Theme = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light'

  return systemTheme
}

export const changeDocumentTheme = (theme: string) => {
  const isDarkMode = theme === 'dark'

  if (isDarkMode) {
    document.body.classList.add(DARK_MODE_CLASS_NAME)
  }
  if (!isDarkMode) {
    document.body.classList.remove(DARK_MODE_CLASS_NAME)
  }
}
