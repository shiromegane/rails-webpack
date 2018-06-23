const { resolve } = require('path')
const dir = require('../directories')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  test: /\.s?[ac]ss$/,
  oneOf: [
    {
      resourceQuery: /^\?vue/,
      use: [
        {
          loader: 'vue-style-loader',
        },
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            url: false,
            minimize: false,
            sourceMap: false,
          },
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
          options: {
            sourceMap: false,
          },
        },
        {
          loader: 'sass-resources-loader',
          options: {
            resources: [
              resolve(dir.stylesheets, 'materialize.scss'),
              resolve(dir.stylesheets, 'icons.scss'),
            ],
          },
        },
      ],
    },
    {
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            url: false,
            minimize: false,
            sourceMap: false,
          },
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
          options: {
            sourceMap: false,
          },
        },
      ],
    },
  ],
}
