require('shelljs/global')
const { join } = require('path')

const rootDir = join(__dirname, '..')

function push () {
  let options = {
    cwd: rootDir
  }
  exec('git add .', options)
  exec('git commit -m "Update memo"', options)
  exec('git push origin master', options)
}

module.exports = push

/* global exec */
