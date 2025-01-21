import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'
import path from 'path'
import alias from '@rollup/plugin-alias'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  input: 'src/index.ts', // 진입점
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs', // CommonJS 출력
      exports: 'auto',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm', // ES Module 출력
    },
  ],
  plugins: [
    alias({
      entries: [{ find: '@', replacement: path.join(__dirname, './src') }],
    }),
    resolve(), // node_modules 확인
    commonjs(), // CommonJS 변환
    typescript({ tsconfig: './tsconfig.json' }), // 타입스크립트 변환
    terser(), // 코드 압축
    filesize(),
  ],
}
