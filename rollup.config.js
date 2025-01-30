import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';

export default {
	input: 'src/index.tsx',
	output: [
		{
			file: 'dist/index.cjs.js',
			format: 'cjs',
			sourcemap: true,
		},
		{
			file: 'dist/index.esm.js',
			format: 'es',
			sourcemap: true,
		},
	],
	plugins: [
		peerDepsExternal(),
		resolve(),
		commonjs(),
		typescript(),
		babel({ babelHelpers: 'bundled' }),
		terser(),
	],
	external: ['react', 'react-dom'],
};
