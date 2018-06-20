const { resolve } = require('path')
const dir = require('./directories')

module.exports = {
  app: resolve(dir.entry, 'entry.js'),
  wgt: resolve(dir.stylesheets, 'wgt.scss'),
  materialize: resolve(dir.stylesheets, 'materialize.scss'),
  icons: resolve(dir.stylesheets, 'icons.scss'),
}

/**
 * エントリポイントをディレクトリ探索で設定する場合はこっち使う
 */
// const { basename, dirname, join, relative, extname } = require('path')
// const { sync } = require('glob')
// const extensions = ['.scss', '.js', '.vue']
// const entryPaths = sync(join(dir.entry, `**/*{${extensions.join(',')}}*`))
// module.exports = entryPaths.reduce((object, path) => {
//   const namespace = relative(join(dir.entry), dirname(path))
//   const name = join(namespace, basename(path, extname(path)))
//   object[name] = path
//   return object
// }, {})
