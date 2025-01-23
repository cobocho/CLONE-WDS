import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

import { spaces } from './space.css'
import { colorsObject } from './color.css'

const borderProperties = defineProperties({
  properties: {
    borderWidth: spaces,
    borderRadius: spaces,
    borderStyle: [
      'solid',
      'dashed',
      'dotted',
      'double',
      'groove',
      'ridge',
      'inset',
      'outset',
    ],
    borderColor: colorsObject,
  },
})

export const borderSprinkles = createSprinkles(borderProperties)
