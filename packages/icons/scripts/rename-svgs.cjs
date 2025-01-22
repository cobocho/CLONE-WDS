const fs = require('fs')
const path = require('path')

// SVG 파일이 있는 디렉토리 경로
const SVG_DIR = path.join(__dirname, 'svgs')

// 디렉토리 내 모든 .svg 파일에 대해 반복
fs.readdir(SVG_DIR, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err)
    return
  }

  files.forEach((file) => {
    if (path.extname(file) === '.svg') {
      const baseName = path.basename(file, '.svg')
      const newName = `${baseName}Icon.svg`
      const oldPath = path.join(SVG_DIR, file)
      const newPath = path.join(SVG_DIR, newName)

      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error(`Error renaming ${file}:`, err)
        } else {
          console.log(`Renamed ${file} to ${newName}`)
        }
      })
    }
  })
})
