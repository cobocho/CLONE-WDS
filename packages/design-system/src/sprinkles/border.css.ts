import { defineProperties } from '@vanilla-extract/sprinkles'

import { spaces } from './space.css'
import { colorsObject } from './color.css'

export const borderProperties = defineProperties({
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
