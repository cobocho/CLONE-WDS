import {
  createGlobalThemeContract,
  createGlobalTheme,
} from '@vanilla-extract/css'

import * as LIGHT from './tokens/variables/light'
import * as DARK from './tokens/variables/dark'
import * as PALETTE from './tokens/variables/palette'

function generateContract<T extends object>(obj: T): T {
  return Object.fromEntries(Object.entries(obj).map(([key]) => [key, key])) as T
}

const semanticContract = generateContract(LIGHT)
const paletteContract = generateContract(PALETTE)

export const DARK_MODE_CLASS_NAME = 'dark-mode'

function prefix(value: string | null) {
  return `WDS-${value}`
}

export const semanticVars = createGlobalThemeContract(semanticContract, prefix)
export const paletteVars = createGlobalThemeContract(paletteContract, prefix)

createGlobalTheme('body', semanticVars, LIGHT)
createGlobalTheme(`body.${DARK_MODE_CLASS_NAME}`, semanticVars, DARK)
createGlobalTheme('body', paletteVars, PALETTE)
