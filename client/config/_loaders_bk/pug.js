module.exports = {
  test: /\.pug$/,
  exclude: /node_modules/,
  loader: 'riot-tag-loader',
  query: {
    template: 'pug',
  },
}
