import { describe, it, expect, beforeEach, vi } from 'vitest'

import { getSystemTheme, changeDocumentTheme } from './ThemeProvider.utils'

describe('ThemeProvider Utils Tests', () => {
  it.each([
    ['dark', true],
    ['light', false],
  ])('시스템 다크모드에 따라 시스템 테마를 반환한다.', (theme, matches) => {
    // Given
    vi.stubGlobal('matchMedia', (query: string) => ({
      matches,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }))

    // When
    const systemTheme = getSystemTheme()

    // Then
    expect(systemTheme).toBe(theme)
  })
  describe('changeDocumentTheme', () => {
    beforeEach(() => {
      document.body.className = ''
    })

    it.each(['dark', 'light'])(
      '테마에 따라 body의 테마를 변경한다.',
      (theme) => {
        // Given
        document.body.className = ''

        // When
        changeDocumentTheme(theme)
        // Then
        if (theme === 'dark') {
          expect(document.body).toHaveClass('dark-mode')
        } else {
          expect(document.body).not.toHaveClass('dark-mode')
        }
      },
    )
  })
})
