import React from 'react'
import type { Preview } from '@storybook/react'
import { ThemeProvider } from '../src/components/ThemeProvider/ThemeProvider'
import { withThemeByClassName } from '@storybook/addon-themes'
import { useGlobals } from 'storybook/internal/preview-api'
import { useEffect } from 'react'
import './index.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      parentSelector: 'body',
    }),
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
    (Story) => {
      const globals = useGlobals()
      const theme = globals[0].theme

      useEffect(() => {
        document.body.style.transition = 'background-color 0.2s ease'
      }, [])

      useEffect(() => {
        if (theme === 'dark') {
          document.body.classList.add('dark-mode')
          document.body.style.backgroundColor = '#000'
        } else {
          document.body.classList.remove('dark-mode')
          document.body.style.backgroundColor = '#fff'
        }
      }, [theme])

      return <Story />
    },
  ],
}

export default preview
