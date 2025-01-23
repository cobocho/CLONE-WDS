import { parseJSON, resolveReferences, writeJSON } from './utils.js'

const PALETTE_JSON_FILE_PATH = 'src/json/Palette.json'
const palette = parseJSON(PALETTE_JSON_FILE_PATH)

const light = parseJSON('src/json/Light.json')
const dark = parseJSON('src/json/Dark.json')

resolveReferences(light, palette)
resolveReferences(dark, palette)

writeJSON('src/json/Light.json', light)
writeJSON('src/json/Dark.json', dark)
