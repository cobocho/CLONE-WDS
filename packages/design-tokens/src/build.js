import StyleDictionary from 'style-dictionary'

import {
  createSDPlatform,
  parseJSON,
  resolveReferences,
  writeJSON,
} from './utils.js'

const PALETTE_JSON_FILE_PATH = 'src/json/Palette.json'
const palette = parseJSON(PALETTE_JSON_FILE_PATH)

const paletteSD = new StyleDictionary({
  source: [PALETTE_JSON_FILE_PATH],
  platforms: createSDPlatform('palette'),
})
await paletteSD.buildAllPlatforms()

const light = parseJSON('src/json/Light.json')
const dark = parseJSON('src/json/Dark.json')

resolveReferences(light, palette)
resolveReferences(dark, palette)

writeJSON('src/json/Light-Merged.json', light)
writeJSON('src/json/Dark-Merged.json', dark)

const lightSD = new StyleDictionary({
  source: ['src/json/Light-Merged.json'],
  platforms: createSDPlatform('light'),
})
await lightSD.buildAllPlatforms()

const darkSD = new StyleDictionary({
  source: ['src/json/Dark-Merged.json'],
  platforms: createSDPlatform('dark'),
})
await darkSD.buildAllPlatforms()
