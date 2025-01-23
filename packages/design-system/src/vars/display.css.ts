import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

export const displayProperties = defineProperties({
  properties: {
    display: [
      'none',
      'block',
      'inline',
      'inline-block',
      'flex',
      'inline-flex',
      'grid',
      'inline-grid',
      'table',
      'table-row',
      'table-cell',
      'list-item',
      'inline-list-item',
      'run-in',
      'flow',
      'flow-root',
      'table-caption',
      'table-column-group',
      'table-header-group',
      'table-footer-group',
      'table-row-group',
      'table-column',
      'table-cell',
      'table-column-group',
      'table-header-group',
      'table-footer-group',
      'table-row-group',
      'table-column',
      'table-cell',
      'table-column-group',
      'table-header-group',
      'table-footer-group',
      'table-row-group',
      'table-column',
      'table-cell',
    ],
    alignItems: [
      'stretch',
      'center',
      'flex-start',
      'flex-end',
      'baseline',
      'normal',
    ],
    justifyContent: [
      'stretch',
      'center',
      'flex-start',
      'flex-end',
      'baseline',
      'normal',
    ],
  },
})

export const displaySprinkles = createSprinkles(displayProperties)
