const { resolve } = require('path')
const merge = require('webpack-merge')
const dir = require('./directory')
const entries = require('./entries')
const plugins = require('./plugins')
const loaders = require('./loaders')
const optimizers = require('./optimizers')
const resolvers = require('./resolvers')

const envConfig = require(resolve(
  dir.environment,
  `${process.env.NODE_ENV}.js`
))

module.exports = merge(envConfig, {
  entry: entries,
  output: {
    filename: '[name]-[hash].js',
    path: dir.output,
    publicPath: '/',
  },
  module: {
    rules: loaders,
  },
  resolve: resolvers,
  plugins: plugins,
  optimization: optimizers,
})
