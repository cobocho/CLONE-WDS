import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'
import babel from '@rollup/plugin-babel'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

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
    {
      dir: 'dist', // 출력 디렉토리
      format: 'esm', // ES Module 출력
      preserveModules: true, // 각 모듈별로 출력
      preserveModulesRoot: 'src', // src 디렉토리를 기준으로 폴더 구조 유지
    },
    {
      dir: 'dist',
      format: 'cjs',
      preserveModules: true,
      preserveModulesRoot: 'src',
      exports: 'auto',
      entryFileNames: '[name].cjs',
    },
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    peerDepsExternal(),
    resolve(), // node_modules 확인
    commonjs(), // CommonJS 변환
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist',
      rootDir: 'src',
    }), // 타입스크립트 변환
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    terser(), // 코드 압축
    filesize(),
  ],
}
