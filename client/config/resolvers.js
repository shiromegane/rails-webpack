const { resolve } = require('path')
const dir = require('./directories')

module.exports = {
  modules: [resolve(dir.entry), 'node_modules'],
  alias: {
    Modules: resolve(dir.modules),
    vue$: 'vue/dist/vue.esm.js',
    VueSFC: resolve(dir.sfc),
  },
  extensions: ['*', '.js', '.vue', '.json', '.scss'],
}
