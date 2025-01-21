import { recipe } from '@vanilla-extract/recipes'
import type { RecipeVariants } from '@vanilla-extract/recipes'

import { semanticVars } from '@/index.css'

export const textRecipe = recipe({
  base: {
    color: semanticVars.LabelNormal,
  },
  variants: {
    color: {
      blue: {
        color: semanticVars.AccentLightBlue,
      },
      red: {
        color: semanticVars.LineSolidNeutral,
      },
    },
  },
  defaultVariants: {
    color: 'blue',
  },
})

export type TextVariants = RecipeVariants<typeof textRecipe>
