import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

export const spaces = [
  '0.5px',
  '1px',
  '2px',
  '4px',
  '8px',
  '10px',
  '12px',
  '16px',
  '20px',
  '24px',
  '32px',
  '40px',
  '48px',
  '56px',
  '64px',
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

const spaceProperties = defineProperties({
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

export const spaceSprinkles = createSprinkles(spaceProperties)

const sizeProperties = defineProperties({
  properties: {
    width: [...spaces, 'fit-content', 'max-content', 'inherit'],
    height: [...spaces, 'fit-content', 'max-content', 'inherit'],
    minWidth: [...spaces, 'fit-content', 'max-content', 'inherit'],
    minHeight: [...spaces, 'fit-content', 'max-content', 'inherit'],
    maxWidth: [...spaces, 'fit-content', 'max-content', 'inherit'],
    maxHeight: [...spaces, 'fit-content', 'max-content', 'inherit'],
  },
})

export const sizeSprinkles = createSprinkles(sizeProperties)
