const fs = require('fs')
const _ = require('lodash')

const index = _.last(__filename.split('/'))
const sourceFiles = _.pull(fs.readdirSync('./sources'), index)
const fileToWrite = './index.js'

let sources = []

_.forEach(sourceFiles, function(file) {
  let source = JSON.parse(fs.readFileSync('./sources/' + file).toString())
  sources    = _.concat(sources, source)
})

// write to file which is then used
let data = 'module.exports = ' + JSON.stringify(sources, null, 2)
fs.writeFile(fileToWrite, data, function(err) {
  if (err) throw err
})
