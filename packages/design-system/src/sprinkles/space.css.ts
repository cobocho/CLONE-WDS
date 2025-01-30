import { defineProperties } from '@vanilla-extract/sprinkles'
import { size } from '@repo/design-tokens'

const tokens = Object.values(size)

export const spaces = [
  ...tokens,
  '10%',
  '25%',
  '33.33%',
  '50%',
  '66.66%',
  '75%',
  '80%',
  '90%',
  '100%',
] as const

export const spaceProperties = defineProperties({
  properties: {
    margin: spaces,
    marginTop: spaces,
    marginRight: spaces,
    marginBottom: spaces,
    marginLeft: spaces,
    marginBlock: spaces,
    marginInline: spaces,

    padding: spaces,
    paddingTop: spaces,
    paddingRight: spaces,
    paddingBottom: spaces,
    paddingLeft: spaces,
    paddingBlock: spaces,
    paddingInline: spaces,
  },
})

export const sizeProperties = defineProperties({
  properties: {
    width: [...spaces, 'fit-content', 'max-content', 'inherit'],
    height: [...spaces, 'fit-content', 'max-content', 'inherit'],
    minWidth: [...spaces, 'fit-content', 'max-content', 'inherit'],
    minHeight: [...spaces, 'fit-content', 'max-content', 'inherit'],
    maxWidth: [...spaces, 'fit-content', 'max-content', 'inherit'],
    maxHeight: [...spaces, 'fit-content', 'max-content', 'inherit'],
  },
})
