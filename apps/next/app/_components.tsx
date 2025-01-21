'use client'

import { Button, useTheme } from '@repo/design-system'
import React from 'react'

const ToggleDarkmode = () => {
  const { theme, toggleTheme } = useTheme()

  return <Button onClick={toggleTheme}>Toggle Darkmode</Button>
}

export default ToggleDarkmode
