module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    // eslint
    semi: 0,
    // ts
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'warn',
    // Note: you must disable the base rule as it can report incorrect errors
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',

    // React Native
    'react-native/no-inline-styles': 'off',
  },
}
