module.exports = {
  test: /\.js$/,
  use: [
    {
      loader: 'eslint-loader',
    },
  ],
  enforce: 'pre',
  exclude: /node_modules/,
}
