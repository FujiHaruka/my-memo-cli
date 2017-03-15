require('shelljs/global')
const { TMP_DIR } = require('./constants')

exec(`mkdir -p ${TMP_DIR}`)

const memoAction = {
  setRepository () {

  },
  list: require('./list'),
  add: require('./add'),
  remove: require('./remove'),
  show: require('./show'),
  edit: require('./edit'),
  drop: require('./drop')
}

module.exports = memoAction

/* global exec */
