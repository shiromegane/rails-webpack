const enabledSourceMap = (process.env.NODE_ENV === 'development')
module.exports = {
  test: /\.s?[ac]ss$/,
  use: [
    {
      loader: 'vue-style-loader'
    },
    {
      loader: 'style-loader'
    },
    {
      loader: 'css-loader',
      options: {
        url: false,
        sourceMap: enabledSourceMap,
        minimize: true,
        importLoaders: 2
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
        plugins: [
          require('autoprefixer')({grid: true})
        ]
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: enabledSourceMap,
      }
    }
    ,
  ],
}
