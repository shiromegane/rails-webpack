const dir = require('./directory')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = [
  new CleanWebpackPlugin(['www/*'], { root: dir.client }),
  new ManifestPlugin(),
  new MiniCssExtractPlugin({
    filename: '[name]-[hash].css',
  }),
  new ExtractTextPlugin('style.css'),
]
