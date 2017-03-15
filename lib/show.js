const {
  findText,
  findId
} = require('./heplers')

function show (id) {
  id = findId(id)
  let text = findText(id)
  if (text) {
    console.log(text)
  }
}

module.exports = show
