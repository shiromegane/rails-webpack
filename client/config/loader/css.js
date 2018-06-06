module.exports = {
  test: /\.css/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        url: false,
        minimize: true,
        sourceMap: (process.env.NODE_ENV === 'development'),
      }
    },
  ],
}
