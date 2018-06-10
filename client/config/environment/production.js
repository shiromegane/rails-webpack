const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const cachePath = path.resolve(__dirname, '..', 'cache')

module.exports = {
  mode: 'production',
  watch: true,
  devtool: 'source-map',
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true,
      exclude: /\/node_modules/,
      cache: cachePath,
      parallel: 4,
      uglifyOptions: {
        ecma: 6,
        warnings: false,
        output: {
          comments: false,
          beautify: false,
        },
        safari10: true,
      },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
}
