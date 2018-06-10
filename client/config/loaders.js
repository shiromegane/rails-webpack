const { join } = require('path')
const { sync } = require('glob')
const dir = require('./directory')
module.exports = sync(join(dir.loader, '*.js')).map(file => require(file))
