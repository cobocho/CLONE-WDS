import fs from 'fs'

export function resolveReferences(obj, palette) {
  if (typeof obj === 'object' && obj !== null) {
    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        resolveReferences(obj[key], palette)
      } else if (
        typeof obj[key] === 'string' &&
        obj[key].startsWith('{') &&
        obj[key].endsWith('}')
      ) {
        const refPath = obj[key].slice(1, -1).split('.')
        let value = palette
        for (const ref of refPath) {
          value = value[ref]
        }
        obj[key] = value.value
      }
    }
  }
}

export function createSDPlatform(name) {
  return {
    js: {
      transformGroup: 'js',
      buildPath: 'src/variables/',
      files: [
        {
          destination: `${name}.ts`,
          format: 'javascript/es6',
        },
      ],
    },
  }
}

export function parseJSON(path) {
  return JSON.parse(fs.readFileSync(path, 'utf-8'))
}

export function writeJSON(path, json) {
  fs.writeFileSync(path, JSON.stringify(json, null, 2), 'utf-8')
}
