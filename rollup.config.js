/**
 * Use Rollup to build ES Modules (esm) library files, because it can output .mjs references.
 * Note, no type checking for TypeScript, that happens as part of the tsc for CommonJS (cjs) output.
 * @see https://github.com/microsoft/TypeScript/issues/18442#issuecomment-749896695
 */

import typescript from '@rollup/plugin-typescript';

export default [
  {
    preserveModules: true,
    input: ['src/index.ts'],
    output: [{ dir: 'lib/esm', format: 'esm', entryFileNames: '[name].mjs' }],
    plugins: [typescript()]
  },
];