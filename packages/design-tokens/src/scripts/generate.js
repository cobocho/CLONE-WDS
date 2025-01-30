import fs from 'fs'
import path from 'path'

const __dirname = path.resolve()

const toPascalCase = (str) => {
  return str
    .replace(/[_\s]+(.)?/g, (_, chr) => (chr ? chr.toUpperCase() : ''))
    .replace(/^[a-z]/, (chr) => chr.toUpperCase())
}

const generateTypeScript = (json, parentKey = '') => {
  let tsContent = ''

  for (const [key, value] of Object.entries(json)) {
    const pascalKey = parentKey
      ? `${parentKey}${toPascalCase(key)}`
      : toPascalCase(key)

    if (value.type === 'size') {
      tsContent += `export const ${pascalKey.replaceAll('.', 'dot')} = '${value.value}';\n`
    }

    if (value.type === 'color') {
      // For color type, generate export statement
      tsContent += `export const ${pascalKey} = '${value.value}';\n`
    } else if (typeof value === 'object' && !Array.isArray(value)) {
      // Recurse if the value is an object
      tsContent += generateTypeScript(value, pascalKey)
    }
  }

  return tsContent
}

function generate(inputFilePath, outputFilePath) {
  fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the input file:', err)
      return
    }

    try {
      const jsonData = JSON.parse(data)
      const tsContent = generateTypeScript(jsonData)

      if (outputFilePath === 'size.ts') {
        console.log('tsContent')
        console.log(jsonData)
      }

      fs.writeFile(
        path.resolve(__dirname, 'src/variables', outputFilePath),
        tsContent,
        'utf8',
        (err) => {
          if (err) {
            console.error('Error writing the output file:', err)
            return
          }

          console.log(
            'TypeScript file generated successfully at:',
            outputFilePath,
          )
        },
      )
    } catch (err) {
      console.error('Error parsing JSON:', err)
    }
  })
}

generate(path.resolve(__dirname, 'src/json/Palette.json'), 'palette.ts')
generate(path.resolve(__dirname, 'src/json/Light.json'), 'light.ts')
generate(path.resolve(__dirname, 'src/json/Dark.json'), 'dark.ts')
generate(path.resolve(__dirname, 'src/json/Size.json'), 'size.ts')
