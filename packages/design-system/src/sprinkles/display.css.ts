import { defineProperties } from '@vanilla-extract/sprinkles'

import { spaces } from './space.css'

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
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
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
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    gap: spaces,
    rowGap: spaces,
    columnGap: spaces,
    gridGap: spaces,
    gridRowGap: spaces,
    gridColumnGap: spaces,
    gridAutoFlow: ['row', 'column', 'row dense', 'column dense'],
    gridAutoColumns: spaces,
    gridAutoRows: spaces,
    gridTemplateColumns: spaces,
    gridTemplateRows: spaces,
    gridTemplateAreas: spaces,
    gridTemplate: spaces,
  },
})
