const { join } = require('path')

module.exports = {
  DATA_PATH: join(__dirname, '../data/memo.json'),
  TMP_DIR: join(__dirname, '../tmp'),
  INDEX_PATH: join(__dirname, '../tmp/index_data.json')
}
