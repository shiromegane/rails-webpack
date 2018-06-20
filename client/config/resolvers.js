const { resolve } = require('path')
const dir = require('./directories')

module.exports = {
  modules: [resolve(dir.entry), 'node_modules'],
  alias: {
    $: 'jquery',
    jQuery: 'jquery',
    jquery: 'jquery',
    'window.jQuery': 'jquery',
    _: 'lodash',
    Modules: resolve(dir.modules),
    vue$: 'vue/dist/vue.esm.js',
    vuex: 'vuex/dist/vuex.js',
    VueSFC: resolve(dir.vueSfc),
    Sass: resolve(dir.stylesheets),
  },
  extensions: ['*', '.js', '.vue', '.json', '.scss'],
}
