const {
  DATA_PATH,
  INDEX_PATH
} = require('../constants')
const fs = require('fs')
// TODO 暗号化
const crypto = require('crypto')
// const encrypt = () => {}
// const decrypt = () => {}

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

function saveIds (memoIds = []) {
  let json = JSON.stringify(memoIds)
  fs.writeFileSync(INDEX_PATH, json)
}

function loadIds () {
  try {
    return require(INDEX_PATH)
  } catch (e) {
    return []
  }
}

function findId (idOrIndex) {
  let index = Number(idOrIndex)
  if (isNaN(index)) {
    return idOrIndex
  } else {
    let ids = loadIds()
    let id = ids[index]
    if (!id) {
      console.error(`Index=${index} is not found.`)
      return null
    }
    return id
  }
}

module.exports = {
  loadMemo,
  writeMemo,
  findText,
  saveIds,
  loadIds,
  findId
}
