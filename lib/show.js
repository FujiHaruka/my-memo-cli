const {
  loadMemo
} = require('./heplers')

function show (id) {
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
  console.log(content.text)
}

module.exports = show
