module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/recommended',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'vue/custom-event-name-casing': 'off',
    'vue/attributes-order': ['error', {
      alphabetical: true
    }],
    'vue/no-v-html': 'off'
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
