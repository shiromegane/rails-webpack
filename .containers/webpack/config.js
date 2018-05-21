const path = require('path')
const appRootPath = path.resolve(__dirname, '../../')
const entryPath = path.resolve(appRootPath, 'app/frontend/')
const outputPath = path.resolve(appRootPath, 'public/')
const config = {
  entry: path.resolve(entryPath, 'entry.js'),
  output: {
    path: path.resolve(outputPath),
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?modules'],
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },
  eslint: {
    configFile: './.eslintrc.yaml',
    fix: true,
  },
  plugins: [

  ],
}

module.exports = config
