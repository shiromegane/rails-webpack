const { resolve } = require('path')
const dir = require('../directories')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  test: /\.s?[ac]ss$/,
  use: [
    {
      loader: 'vue-style-loader',
    },
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
    },
    {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        sourceMap: false,
        plugins: [
          require('autoprefixer')({ grid: true }),
          require('postcss-flexboxfixer'),
        ],
      },
    },
    {
      loader: 'resolve-url-loader',
    },
    {
      loader: 'sass-loader',
    },
    {
      loader: 'sass-resources-loader',
      options: {
        resources: resolve(dir.entry, '**/*.scss'),
      },
    },
  ],
}
