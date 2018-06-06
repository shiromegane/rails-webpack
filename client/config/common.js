const path = require('path')
const merge = require('webpack-merge')
const dir = require('./directory')
const plugins = require('./plugins')
const loaders = require('./loaders')
const envConfig = require(path.resolve(dir.environment, `${process.env.NODE_ENV}.js`))

module.exports = merge(envConfig, {
  entry: {
    app: path.resolve(dir.entry, 'entry.js'),
    app2: path.resolve(dir.entry, 'entry.js'),
  },
  output: {
    filename: '[name].js',
    path: dir.output,
    publicPath: '/',
  },
  module: {
    rules: loaders
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: plugins,
})
