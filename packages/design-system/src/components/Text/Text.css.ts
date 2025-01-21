import { recipe } from '@vanilla-extract/recipes'
import type { RecipeVariants } from '@vanilla-extract/recipes'

import { paletteVars, semanticVars } from '@/index.css'

type SemanticColor = keyof typeof semanticVars
type PaletteColor = keyof typeof paletteVars
type ColorKey = SemanticColor | PaletteColor

const colorVariants: Record<ColorKey, { color: string }> = Object.keys(
  Object.assign(semanticVars, paletteVars),
).reduce(
  (acc, key) => {
    acc[key as ColorKey] = {
      color:
        semanticVars[key as SemanticColor] || paletteVars[key as PaletteColor],
    }
    return acc
  },
  {} as Record<ColorKey, { color: string }>,
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
