const { join } = require('path')
const { sync } = require('glob')
const dir = require('./directories')
module.exports = sync(join(dir.loaders, '*.js')).map(file => require(file))
