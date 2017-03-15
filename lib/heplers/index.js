const {
  DATA_PATH,
  TMP_DIR
} = require('../constants')
const fs = require('fs')

module.exports = {
  loadMemo () {
    return require(DATA_PATH)
  },
  writeMemo (memoArray) {
    let json = JSON.stringify(memoArray, null, '  ')
    fs.writeFileSync(DATA_PATH, json)
  }
}
