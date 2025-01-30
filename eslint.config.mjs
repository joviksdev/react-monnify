import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import PluginJest from 'eslint-plugin-jest';

export default [
  {
    files: ['libs/test/**'],
    ...PluginJest.configs['flat/recommended'],
    rules: {
      ...PluginJest.configs['flat/recommended'].rules,
      'jest/prefer-expect-assertions': 'off',
    },
  },
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {sourceType: 'commonjs'},
  },
  {
    languageOptions: {
      globals: {
        AudioWorkletGlobalScope: 'readonly',
        // manually add other globals here as necessary
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    ignores: ['example/', 'dist/', 'babel.config.js', 'jest.config.js'],
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/camelcase': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/ban-ts-ignore': 'off',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
];
