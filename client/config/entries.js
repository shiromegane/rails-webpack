const { resolve } = require('path')
const dir = require('./directories')

module.exports = {
  app: resolve(dir.entry, 'entry.js'),
}

/**
 * エントリポイントをディレクトリ探索で設定する場合はこっち使う
 */
// const { basename, dirname, join, relative, resolve, extname } = require('path')
// const { sync } = require('glob')
// const extensions = ['.scss', '.js', '.vue']
// const entryPaths = sync(join(dir.entry, `**/*{${extensions.join(',')}}*`))
// module.exports = entryPaths.reduce((object, path) => {
//   const namespace = relative(join(dir.entry), dirname(path))
//   const name = join(namespace, basename(path, extname(path)))
//   object[name] = path
//   return object
// }, {})
