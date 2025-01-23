import { style } from '@vanilla-extract/css'

export const storybookSubheader = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '64px',

  marginBlock: '64px',
})

export const storybookSubheaderTitle = style({
  display: 'flex',
  gap: '48px',
})

export const storybookSubheaderTitleBlock = style({
  width: '50%',
})
