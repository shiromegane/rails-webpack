const path = require('path')

module.exports = {
  test: /\.vue$/,
  loader: 'vue-loader',
  options: {
    loaders: {
      scss: [
        'vue-style-loader',
        'css-loader',
        'postcss-loader',
        'sass-loader',
        {
          loader: 'sass-resources-loader',
          options: {
            resources: path.resolve(__dirname, '../../../app/assets/stylesheets/base/*.scss'),
          },
        },
      ],
    },
    cssSourceMap: false,
  },
}
