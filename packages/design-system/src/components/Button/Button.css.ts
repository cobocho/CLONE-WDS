import { style } from '@vanilla-extract/css'

import { semanticVars } from '@/index.css'

export const button = style({
  backgroundColor: semanticVars.AccentCyan,
  color: semanticVars.LabelNormal,
  fontSize: '24px',
})
