import globals from 'globals';
import pluginJs from '@eslint/js';


export default [
  {
    ignores: ['node_modules', 'dist']
  },
  {files: ['**/*.{js,mjs,cjs,jsx}']},
  {languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.es2021
    },
  }},
  pluginJs.configs.recommended,
  {
    rules: {
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always']
    }
  },
  {
    "extends": [
      "eslint:recommended",
      "plugin:prettier/recommended"
    ]
  }
];