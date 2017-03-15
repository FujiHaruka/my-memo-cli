const {
  DATA_PATH,
  TMP_DIR
} = require('../constants')
const fs = require('fs')

function loadMemo () {
  return require(DATA_PATH)
}

function writeMemo (memoArray) {
  let json = JSON.stringify(memoArray, null, '  ')
  fs.writeFileSync(DATA_PATH, json)
}

function findText (id) {
  let memo = loadMemo()
  if (!id) {
    console.error(`Required ID.`)
    return
  }
  let content = memo.find(content => content.id.startsWith(id))
  if (!content) {
    console.error(`ID=${id} is not found.`)
    return
  }
  return content.text
}

module.exports = {
  loadMemo,
  writeMemo,
  findText
}
