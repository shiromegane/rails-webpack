const { resolve } = require('path')
const root = resolve(__dirname, '..', '..')
const client = resolve(root, 'client')
const config = resolve(client, 'config')
const entry = resolve(client, 'src')
const output = resolve(client, 'www')
const environment = resolve(config, 'environment')
const loader = resolve(config, 'loader')
const vue = resolve(entry, 'vue')
const vueSfc = resolve(vue, 'sfc')
module.exports = {
  root,
  client,
  config,
  entry,
  output,
  environment,
  loader,
  vue,
  vueSfc,
}
