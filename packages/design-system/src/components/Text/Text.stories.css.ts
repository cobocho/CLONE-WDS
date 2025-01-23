import { globalStyle, style } from '@vanilla-extract/css'

import { semanticVars } from '@/index.css'

export const textPlaygroundContainer = style({
  padding: '64px',
  maxWidth: '1200px',

  margin: '0 auto',

  backgroundColor: semanticVars.BackgroundNormalAlternative,
  borderRadius: '16px',

  textAlign: 'center',
})

export const textStoryContainer = style({
  margin: '0 auto',
  maxWidth: '1500px',
})

export const textSampleBox = style({
  padding: '48px',
  backgroundColor: semanticVars.BackgroundNormalAlternative,
  borderRadius: '24px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  marginBottom: '64px',
})

export const textTable = style({
  width: '100%',
})

globalStyle(`${textTable} thead`, {
  borderBottom: `1px solid ${semanticVars.LineNormalNormal}`,
})

globalStyle(`${textTable} thead tr th`, {
  paddingBottom: '16px',
})

globalStyle(`${textTable} th`, {
  textAlign: 'left',
})

globalStyle(`${textTable} th.sample-header`, {
  width: '50%',
})

globalStyle(`${textTable} tbody tr`, {
  marginBottom: '16px',
})

globalStyle(`${textTable} tbody tr td`, {
  textAlign: 'left',
  paddingTop: '16px',
})

globalStyle(`${textTable} tbody tr td .sample-box`, {
  display: 'flex',
  gap: '16px',
})

globalStyle(`${textTable} tbody tr td .sample-box .sample`, {
  textAlign: 'left',
  width: '30%',
})
