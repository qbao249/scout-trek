const getPlugins = () => {
  const defaultPlugins = [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        root: ['.'],
        alias: {
          '@constants': './src/constants',
          '@scenes': './src/scenes',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@models': './src/models',
          '@apis': './src/apis',
          '@utils': './src/utils',
          '@configs': './src/configs',
          '@navigators': './src/navigators',
          '@enums': './src/enums',
          '@HOCs': './src/HOCs',
        },
      },
    ],
    'react-native-reanimated/plugin',
    // 'nativewind/babel',
    // ['module:react-native-dotenv'],
    // ['@babel/plugin-proposal-decorators', { version: 'legacy' }],
  ]

  if (process.env.NODE_ENV === 'production') {
    defaultPlugins.push('transform-remove-console')
  }

  return defaultPlugins
}

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: getPlugins(),
}
