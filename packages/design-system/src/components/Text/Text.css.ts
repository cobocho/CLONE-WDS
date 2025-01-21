import { recipe } from '@vanilla-extract/recipes'
import type { RecipeVariants } from '@vanilla-extract/recipes'

import {
  Color,
  PaletteColor,
  paletteVars,
  SemanticColor,
  semanticVars,
} from '@/index.css'

const colorVariants: Record<Color, { color: string }> = Object.keys(
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

export const textRecipe = recipe({
  base: {
    color: semanticVars.LabelNormal,
  },
  variants: {
    color: colorVariants,
  },
  defaultVariants: {
    color: 'LabelNormal',
  },
})

export type TextVariants = RecipeVariants<typeof textRecipe>
