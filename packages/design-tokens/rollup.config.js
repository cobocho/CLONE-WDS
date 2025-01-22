import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'
import babel from '@rollup/plugin-babel'

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
    resolve(), // node_modules 확인
    commonjs(), // CommonJS 변환
    typescript({ tsconfig: './tsconfig.json' }), // 타입스크립트 변환
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    terser(), // 코드 압축
    filesize(),
  ],
}
