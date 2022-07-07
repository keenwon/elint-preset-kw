module.exports = {
  plugins: [
    '@elint/plugin-eslint',
    '@elint/plugin-stylelint',
    '@elint/plugin-prettier',
    '@elint/plugin-commitlint'
  ],
  configs: {
    commitlint: require.resolve('./configs/commitlint'),
    eslint: require.resolve('./configs/eslint'),
    stylelint: require.resolve('./configs/stylelint'),
  }
}
