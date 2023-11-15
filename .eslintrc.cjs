module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'max-depth': ['error', 2],
    'prefer-const': 2,
    'no-var': 2,
    'no-undef': 2,
    'no-unused-vars': 1,
    'max-lines-per-function': ['error', 15],
    'no-else-return': ['error', { allowElseIf: false }],
    'import/extensions': 'warn',
  },
  parserOptions: {
    ecmaVersion: 13,
  },
};
