require('shelljs/global')
const {
  loadMemo,
  writeMemo
} = require('./heplers')

function remove (id) {
  if (!id) {
    exec(`memo rm -h`)
    console.log(``)
  }
  let memo = loadMemo()
  let target = memo.find((content) => content.id === id)
  if (!target) {
    console.error(`ID=${id} is not found.`)
    return
  }
  let removed = memo.filter((content) => content.id !== id)
  writeMemo(removed)
  console.log(`"${target.title}" was removed.`)
}

module.exports = remove

/* global exec */
