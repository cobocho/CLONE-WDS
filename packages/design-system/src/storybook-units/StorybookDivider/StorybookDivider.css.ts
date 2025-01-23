import { recipe, RecipeVariants } from '@vanilla-extract/recipes'

import { semanticVars } from '@/index.css'

export const storybookDivider = recipe({
  base: {
    width: '100%',
    backgroundColor: semanticVars.LabelStrong,
  },
  variants: {
    size: {
      normal: {
        height: '4px',
      },
      small: {
        height: '2px',
      },
    },
    color: {
      strong: {
        backgroundColor: semanticVars.LabelStrong,
      },
      light: {
        backgroundColor: semanticVars.LineNormalStrong,
      },
    },
  },
  defaultVariants: {
    size: 'normal',
    color: 'strong',
  },
})

export type StorybookDividerVariants = RecipeVariants<typeof storybookDivider>
