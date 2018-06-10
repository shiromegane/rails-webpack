module.exports = {
  test: /\.(png|jpe?g|gif|svg)$/,
  use: [
    {
      loader: 'file-loader',
    },
    {
      loader: 'url-loader',
      query: {
        limit: 1000, // 1kB
        name: 'img/[name].[hash:7].[ext]',
      },
    },
  ],
}
