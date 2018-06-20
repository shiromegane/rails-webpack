const dir = require('./directories')
const { resolve } = require('path')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = [
  new CleanWebpackPlugin(['www/*'], { root: dir.client }),
  new LodashModuleReplacementPlugin(),
  new VueLoaderPlugin(),
  new ManifestPlugin({
    outputPath: dir.output,
    writeToFileEmit: true,
  }),
  new MiniCssExtractPlugin({
    filename: '[name]-[hash].css',
    chunkFilename: '[id]-[hash].css',
  }),
  new CopyWebpackPlugin([
    {
      from: resolve(dir.fonts),
      to: resolve(dir.output, 'fonts'),
      toType: 'dir',
    },
    {
      from: resolve(dir.images),
      to: resolve(dir.output, 'images'),
      toType: 'dir',
    },
  ]),
]
