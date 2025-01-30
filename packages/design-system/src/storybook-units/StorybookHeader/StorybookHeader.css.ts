import { style } from '@vanilla-extract/css'

export const storybookHeader = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '64px',

  marginBlock: '64px',
})

export const storybookHeaderTitle = style({
  display: 'flex',
})

export const storybookHeaderTitleBlock = style({
  width: '50%',
})
