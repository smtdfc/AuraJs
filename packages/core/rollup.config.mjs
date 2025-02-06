import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from "@rollup/plugin-terser";
import os from 'os';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default [
  {
    input: path.join(__dirname, 'src/index.js'),
    output: [
      {
        file: path.join(__dirname, 'dist/index.esm.js'),
        format: 'esm',
        sourcemap: true,
      },
      {
        file: path.join(__dirname, 'dist/index.cjs.js'),
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: path.join(__dirname, 'dist/index.js'),
        format: 'iife',
        name: 'Rumious',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      terser({
        maxWorkers: {
          value: os.cpus().length || 1,
        }
      })
    ],
  },
  {
    input: path.join(__dirname, 'src/index.js'),
    output: [
      {
        file: path.join(__dirname, 'dist/index.esm.min.js'),
        format: 'esm',
        sourcemap: false,
      },
      {
        file: path.join(__dirname, 'dist/index.cjs.min.js'),
        format: 'cjs',
        sourcemap: false,
      },
      {
        file: path.join(__dirname, 'dist/index.min.js'),
        format: 'iife',
        name: 'Rumious',
        sourcemap: false,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      terser({
        compress: {
          drop_console: true,
          passes: 3,
        },
        mangle: true,
        output: {
          comments: false,
        },
        maxWorkers: {
          value: os.cpus().length || 1,
        }
      })
    ],
  },
];