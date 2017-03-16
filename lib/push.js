require('shelljs/global')
const { join } = require('path')

const rootDir = join(__dirname, '..')

function push () {
  exec('git add .', { cwd: rootDir })
  exec('git commit -m "Update memo"')
  exec('git push origin master')
}

module.exports = push
