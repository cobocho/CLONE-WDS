import React, { ReactNode } from 'react'
import { render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ThemeProvider } from '@/components/ThemeProvider'

export const renderer = (
  component: ReactNode,
): RenderResult & { user: ReturnType<typeof userEvent.setup> } => {
  const user = userEvent.setup()

  return {
    user,
    ...render(<ThemeProvider>{component}</ThemeProvider>),
  }
}
