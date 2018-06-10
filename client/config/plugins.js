const dir = require('./directory')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = [
  new CleanWebpackPlugin(['www/*'], { root: dir.client }),
  new VueLoaderPlugin(),
  new ManifestPlugin({
    outputPath: dir.output,
    writeToFileEmit: true,
  }),
  new MiniCssExtractPlugin({
    filename: '[name]-[hash].css',
    chunkFilename: '[id]-[hash].css',
  }),
]
