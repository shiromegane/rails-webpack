const { resolve } = require('path')
const root = resolve(__dirname, '..')
const config = resolve(root, 'config')
const entry = resolve(root, 'src')
const output = resolve(root, 'www')
const environments = resolve(config, 'environments')
const loaders = resolve(config, 'loaders')
const fonts = resolve(entry, 'fonts')
const images = resolve(entry, 'images')
const javascripts = resolve(entry, 'javascripts')
const stylesheets = resolve(entry, 'stylesheets')
const modules = resolve(javascripts, 'modules')
const vue = resolve(entry, 'vue')
const vueSfc = resolve(vue, 'sfc')
const nodeModules = resolve(root, 'node_modules')
module.exports = {
  root,
  config,
  entry,
  output,
  environments,
  loaders,
  vue,
  vueSfc,
  modules,
  stylesheets,
  fonts,
  images,
  nodeModules,
  materialize: {
    css: resolve(nodeModules, 'materialize-css', 'dist', 'css'),
  },
  assets: {
    font: fonts,
    img: images,
    js: javascripts,
    css: stylesheets,
  },
}
