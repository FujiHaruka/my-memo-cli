require('colors')
const { DATA_PATH } = require('./constants')

function list (filter = '') {
  let memoData = require(DATA_PATH)
  memoData.sort((data1, data2) =>
    new Date(data2.updatedAt) - new Date(data1.updatedAt)
  )
  if (filter) {
    memoData = memoData.filter(({ title }) => title.includes(filter))
  }
  let out = memoData.map(({ id, title }) => `${id} ${title}`).join('\n')
  console.log(`ID       title`.yellow)
  console.log(out)
}

module.exports = list