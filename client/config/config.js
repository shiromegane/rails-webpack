const path = require('path')
const webpack = require('webpack')

const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// const {join, resolve} = require('path')

const rootPath = path.resolve(__dirname, '..', '..')
const entryPath = path.resolve(rootPath, 'app', 'frontend')
const outputPath = path.resolve(rootPath, 'public')
const configPath = path.resolve(__dirname)
const loaderPath = path.resolve(configPath, 'loaders')
const { sync } = require('glob')
const ETP = require('extract-text-webpack-plugin')

const config = {
  mode: 'development',
  entry: {
    application: [path.resolve(entryPath, 'entry.js')],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(outputPath),
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      {
        est: /\.(csv|tsv)$/,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/,
        use: ['xml-loader'],
      },

      {
        test: /\.(eot|ttf|woff|woff2)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath,
              name:
                env.NODE_ENV === 'production'
                  ? '[name]-[hash].[ext]'
                  : '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg|eot|ttf|woff|woff2)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath,
              name:
                env.NODE_ENV === 'production'
                  ? '[name]-[hash].[ext]'
                  : '[name].[ext]',
            },
          },
        ],
      },
      // {test: /\.css$/, loader: ETP.extract("style-loader", "css-loader")},
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }, { loader: 'eslint-loader' }],
      },
      // {test: /\.js$/, exclude: /node_modules/, use: {loader: "eslint-loader"}},
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader', options: { minimize: true } }],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
    // rules: sync(join(loaderPath, '*.js')).map(loader => require(loader)),
  },

  plugins: [
    // new HtmlWebPackPlugin({
    //   template: "./src/index.html",
    //   filename: "./index.html"
    // }),
    // new MiniCssExtractPlugin({
    //   filename: "[name].css",
    //   chunkFilename: "[id].css"
    // }),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    // }),
    // new ETP("styles.css") // styles.cssに抜き出す。
  ],

  // resolve: {
  //   extensions: ['.js', '.jsx'],
  // },
}

module.exports = config
