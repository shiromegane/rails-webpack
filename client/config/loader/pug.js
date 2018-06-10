module.exports = {
  test: /\.pug$/,
  exclude: /node_modules/,
  oneOf: [
    {
      resourceQuery: /^\?vue/,
      use: [{ loader: 'pug-plain-loader' }],
    },
    {
      use: [{ loader: 'raw-loader' }, { loader: 'pug-plain-loader' }],
    },
  ],
}
