const fs = require('fs')
const path = require('path')

// ./src 경로 설정
const directoryPath = path.join(__dirname, '../src')

// 디렉토리 내의 모든 파일 처리
function refactorSvgFiles(dirPath) {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error('디렉토리를 읽을 수 없습니다:', err)
      return
    }

    files.forEach((file) => {
      const filePath = path.join(dirPath, file)

      // 파일이 디렉토리인지 확인
      if (fs.statSync(filePath).isDirectory()) {
        refactorSvgFiles(filePath)
        return
      }

      // 파일 확장자가 .tsx인지 확인
      if (path.extname(file) === '.tsx') {
        fs.readFile(filePath, 'utf8', (readErr, data) => {
          if (readErr) {
            console.error(`파일을 읽을 수 없습니다: ${file}`, readErr)
            return
          }

          // forwardRef가 적용되지 않은 경우에만 변경
          if (!data.includes('forwardRef')) {
            const componentName = file.replace('.tsx', '')

            const updatedData = data
              .replace('const Svg', 'const ')
              .replace('export default Svg', 'export default ')
              // 1. React import를 업데이트
              .replace(
                /import \* as React from 'react';?/,
                `import React, { forwardRef } from 'react';`,
              )
              // 2. 함수형 컴포넌트를 forwardRef로 감싸기
              .replace(
                /const (\w+) = \((props: SVGProps<SVGSVGElement>)\) => \(/,
                `const $1 = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (`,
              )
              // 3. <svg> 태그에 ref 추가 및 viewBox 삽입
              .replace(
                /<svg([^>]*)>/,
                `<svg\n  ref={ref}\n  viewBox="0 0 24 24"$1\n>`,
              )
              // 4. displayName 추가
              .replace(/const (\w+) = forwardRef/, `const $1 = forwardRef`)
              .concat(`\n${componentName}.displayName = '${componentName}';\n`)
              // forwardRef로 감싸진 함수의 끝에 ) 추가
              .replace(/(\s+)<\/svg>\s*\)/, `$1</svg>\n))`)

            fs.writeFile(filePath, updatedData, 'utf8', (writeErr) => {
              if (writeErr) {
                console.error(`파일을 수정할 수 없습니다: ${file}`, writeErr)
                return
              }

              console.log(`forwardRef와 viewBox가 적용되었습니다: ${file}`)
            })
          }
        })
      }
    })
  })
}

// 스크립트 실행
refactorSvgFiles(directoryPath)
