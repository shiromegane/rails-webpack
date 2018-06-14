const { resolve } = require('path')
const root = resolve(__dirname, '..', '..')
const client = resolve(root, 'client')
const config = resolve(client, 'config')
const entry = resolve(client, 'src')
const output = resolve(client, 'www')
const environment = resolve(config, 'environments')
const loaders = resolve(config, 'loaders')
const javascripts = resolve(entry, 'javascripts')
const modules = resolve(javascripts, 'modules')
const vue = resolve(entry, 'vue')
const sfc = resolve(vue, 'sfc')
module.exports = {
  root,
  client,
  config,
  entry,
  output,
  environment,
  loaders,
  vue,
  sfc,
  modules,
}
