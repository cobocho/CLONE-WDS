import StyleDictionary from 'style-dictionary'

import {
  createSDPlatform,
  parseJSON,
  resolveReferences,
  writeJSON,
} from './utils.js'

const PALETTE_JSON_FILE_PATH = 'src/tokens/json/Palette.json'
const palette = parseJSON(PALETTE_JSON_FILE_PATH)

const paletteSD = new StyleDictionary({
  source: [PALETTE_JSON_FILE_PATH],
  platforms: createSDPlatform('palette'),
})
await paletteSD.buildAllPlatforms()

const light = parseJSON('src/tokens/json/Light.json')
const dark = parseJSON('src/tokens/json/Dark.json')

resolveReferences(light, palette)
resolveReferences(dark, palette)

writeJSON('src/tokens/json/Light-Merged.json', light)
writeJSON('src/tokens/json/Dark-Merged.json', dark)

const lightSD = new StyleDictionary({
  source: ['src/tokens/json/Light-Merged.json'],
  platforms: createSDPlatform('light'),
})
await lightSD.buildAllPlatforms()

const darkSD = new StyleDictionary({
  source: ['src/tokens/json/Dark-Merged.json'],
  platforms: createSDPlatform('dark'),
})
await darkSD.buildAllPlatforms()
