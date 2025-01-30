import { styleVariants } from '@vanilla-extract/css'
import { defineProperties } from '@vanilla-extract/sprinkles'

import {
  Color,
  PaletteColor,
  paletteVars,
  SemanticColor,
  semanticVars,
} from '@/index.css'

export const colorsObject: Record<Color, { color: string }> = Object.keys(
  Object.assign(semanticVars, paletteVars),
).reduce(
  (acc, key) => {
    acc[key as Color] = {
      color:
        semanticVars[key as SemanticColor] || paletteVars[key as PaletteColor],
    }
    return acc
  },
  {} as Record<Color, { color: string }>,
)

export const colorVariants = styleVariants(colorsObject)

export const colorProperties = defineProperties({
  properties: {
    backgroundColor: colorVariants,
    color: colorVariants,
  },
})
