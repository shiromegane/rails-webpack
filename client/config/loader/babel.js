module.exports = {
  test: /\.js$/,
  exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file),
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: [['env', { modules: false }]],
      },
    },
  ],
}
