require('colors')
const pad = require('pad')
const { DATA_PATH } = require('./constants')
const { saveIds } = require('./heplers')

function list (filter = '') {
  let memoData = require(DATA_PATH)
  memoData.sort((data1, data2) =>
    new Date(data2.updatedAt) - new Date(data1.updatedAt)
  )
  if (filter) {
    memoData = memoData.filter(({ title }) => title.includes(filter))
  }
  let out = memoData.map(({ id, title }, index) => `${pad(5, String(index))}  ${id}  ${title}`).join('\n')
  console.log(`Index  ID        Title`.yellow)
  console.log(out)
  let memoIdses = memoData.map(({ id }) => id)
  saveIds(memoIdses)
}

module.exports = list
