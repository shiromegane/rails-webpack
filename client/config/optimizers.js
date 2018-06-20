const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  minimize: true,
  minimizer: [
    new UglifyJsPlugin({
      exclude: /\/node_modules/,
      cache: true,
      parallel: true,
      sourceMap: false,
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
    new OptimizeCSSAssetsPlugin({}),
  ],
  splitChunks: {
    cacheGroups: {
      icons: {
        name: 'icons',
        test: /src\/stylesheets\/icons\.s?[ac]ss$/,
        chunks: 'all',
        enforce: true,
      },
      materialize: {
        name: 'materialize',
        test: /src\/stylesheets\/materialize\.s?[ac]ss$/,
        chunks: 'all',
        enforce: true,
      },
      wgt: {
        name: 'wgt',
        test: /src\/stylesheets\/wgt\.s?[ac]ss$/,
        chunks: 'all',
        enforce: true,
      },
    },
  },
}
