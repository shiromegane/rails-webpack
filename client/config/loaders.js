const path = require('path')
const {sync} = require('glob')
const dir = require('./directory')
module.exports = sync(path.join(dir.loader, '*.js')).map(file => require(file))

