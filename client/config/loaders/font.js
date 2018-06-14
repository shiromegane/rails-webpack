module.exports = {
  test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
  use: [
    {
      loader: 'file-loader',
    },
    {
      loader: 'url-loader',
      query: {
        limit: 1000, // 1kB
        name: 'fonts/[name].[hash:7].[ext]',
      },
    },
  ],
}
