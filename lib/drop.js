const { writeMemo } = require('./heplers')

function drop () {
  writeMemo([])
  console.log('All memo was removed.')
}

module.exports = drop
