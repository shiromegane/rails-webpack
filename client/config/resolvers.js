const { resolve } = require('path')
const dir = require('./directory')

module.exports = {
  modules: [resolve(dir.entry), 'node_modules'],
  alias: {
    vue$: 'vue/dist/vue.esm.js',
    VueSfc: resolve(dir.vueSfc),
  },
  extensions: ['*', '.js', '.vue', '.json', '.scss'],
}
