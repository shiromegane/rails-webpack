module.exports = {
  test: /\.(png|svg|jpg|jpeg|gif)$/,
  use: [
    {
      loader:'file-loader'
    },
  ],
}
