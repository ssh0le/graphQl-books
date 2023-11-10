module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'simple-import-sort', 'react', 'prettier'],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^@?\\w'],
          ['@/styles/\\w*.css$'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$', '@/', '@UI'],
          ['^\\u0000', '^\\./\\w'],
        ],
      },
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
// module.exports = {
//   root: true,
//   env: { browser: true, es2020: true },
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:react-hooks/recommended',
//   ],
//   ignorePatterns: ['dist', '.eslintrc.cjs'],
//   parser: '@typescript-eslint/parser',
//   plugins: ['react-refresh', 'simple-import-sort', 'react', 'prettier'],
//   rules: {
//     'simple-import-sort/imports': [
//       'error',
//       {
//         groups: [
//           ['^@?\\w'],
//           ['@/styles/\\w*.css$'],
//           ['^\\.\\.(?!/?$)', '^\\.\\./?$', '@/', '@UI'],
//           ['^\\u0000', '^\\./\\w'],
//         ],
//       },
//     ],
//     'react-refresh/only-export-components': [
//       'warn',
//       { allowConstantExport: true },
//     ],
//   },
// };
