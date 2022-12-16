import { defineConfig } from 'tsup';
export default defineConfig({
	dts: true,
	entry: ['src'],
	bundle: false,
	target: 'esnext',
	format: ['cjs', 'esm'],
	platform: 'browser',
	external: ['react', 'react-dom', 'voxeliface'],
	splitting: true,
	sourcemap: true
});