const {
  findText
} = require('./heplers')

function show (id) {
  let text = findText(id)
  if (text) {
    console.log(text)
  }
}

module.exports = show
