import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import filesize from 'rollup-plugin-filesize';

function addUseClient() {
	return {
		name: 'add-use-client', // 플러그인 이름
		renderChunk(code) {
			return `"use client";\n${code}`; // 최상단에 "use client" 추가
		},
	};
}

function mergeStyles({ name }) {
	return name?.replace(/(?:.+\/)?([^\/]+)\.css\.ts\.vanilla\.css$/, '$1.css');
}

export default {
	input: 'src/index.ts', // 진입점
	output: [
		{
			file: 'dist/index.cjs.js',
			format: 'cjs', // CommonJS 출력
			exports: 'auto',
			assetFileNames: mergeStyles,
		},
		{
			file: 'dist/index.esm.js',
			format: 'esm', // ES Module 출력
			assetFileNames: mergeStyles,
		},
	],
	external: ['react', 'react-dom'], // 외부 의존성
	plugins: [
		peerDepsExternal(),
		resolve(), // node_modules 확인
		commonjs(), // CommonJS 변환
		typescript({ tsconfig: './tsconfig.json' }), // 타입스크립트 변환
		babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }), // Babel
		vanillaExtractPlugin(),
		addUseClient(),
		terser(), // 코드 압축
		filesize(),
	],
};
