import { describe, it, expect, beforeEach, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react'

import { getSystemTheme, changeDocumentTheme } from './ThemeProvider.utils'
import { useThemeControl } from './ThemeProvider.hooks'
import { Theme } from './ThemeProvider.model'
import { ThemeProvider, useTheme } from './ThemeProvider'

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
  it.each(['dark', 'light'])('테마에 따라 body의 테마를 변경한다.', (theme) => {
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
  })
})

describe('ThemeProvider Hooks Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it.each<Theme>(['light', 'dark', 'system'])(
    '초기 테마를 설정한다.',
    (theme) => {
      // Given
      const { result } = renderHook(() => useThemeControl(theme))

      // Then
      expect(result.current.theme).toBe(theme)
    },
  )

  it('초기 테마가 설정되지 않았을 경우 시스템 테마를 사용한다.', () => {
    // Given
    const { result } = renderHook(() => useThemeControl())

    // Then
    expect(result.current.theme).toBe('system')
  })

  it.each<Theme>(['light', 'dark', 'system'])(
    '테마를 수동으로 변경할 수 있다.',
    (theme) => {
      // Given
      const { result } = renderHook(() => useThemeControl('light'))

      // When
      act(() => {
        result.current.setTheme(theme)
      })

      // Then
      expect(result.current.theme).toBe(theme)
    },
  )

  it('시스템 테마를 적용할 수 있다.', () => {
    // Given
    const { result } = renderHook(() => useThemeControl('system'))

    // When
    act(() => {
      result.current.setTheme('system')
    })

    // Then
    expect(result.current.theme).toBe('system')
  })

  it('테마를 토글할 수 있다.', () => {
    // Given
    const { result } = renderHook(() => useThemeControl('light'))

    // When
    act(() => {
      result.current.toggleTheme()
    })

    // Then
    expect(result.current.theme).toBe('dark')

    // When
    act(() => {
      result.current.toggleTheme()
    })

    // Then
    expect(result.current.theme).toBe('light')
  })
})

describe('ThemeProvider Component Tests', () => {
  it('useTheme를 호출한 위치가 ThemeProvider 내부가 아닐 경우 에러를 발생시킨다.', () => {
    function callHookWithoutProvider() {
      renderHook(() => useTheme())
    }

    expect(callHookWithoutProvider).toThrow(
      'useTheme must be used within a ThemeProvider',
    )
  })

  it('ThemeProvider 내부에서 useTheme를 호출할 수 있다.', () => {
    // Given
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    })

    // Then
    expect(result.current.theme).toBe('system')
    expect(result.current.setTheme).toBeDefined()
    expect(result.current.toggleTheme).toBeDefined()
  })
})
