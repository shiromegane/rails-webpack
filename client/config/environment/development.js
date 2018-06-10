const dir = require('../directory')
module.exports = {
  mode: 'development',
  watch: true,
  devtool: 'inline-source-map',
  devServer: {
    open: false,
    contentBase: [
      dir.output
    ],
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    inline: true,
    progress: true,
    compress: true,
    disableHostCheck: true,
    https: false,
    noInfo: false,
    publicPath: '/',
    watchContentBase: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    watchOptions: { ignored: /node_modules/ },
  },
}
