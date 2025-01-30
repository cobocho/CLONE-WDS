import { createSprinkles } from '@vanilla-extract/sprinkles'

import { borderProperties } from './border.css'
import { displayProperties } from './display.css'
import { sizeProperties, spaceProperties } from './space.css'
import { colorProperties } from './color.css'

export const sprinkles = createSprinkles(
  borderProperties,
  displayProperties,
  spaceProperties,
  sizeProperties,
  colorProperties,
)
