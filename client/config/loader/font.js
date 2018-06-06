module.exports = {
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  use: [
    {
      loader:'file-loader'
    },
  ],
}
