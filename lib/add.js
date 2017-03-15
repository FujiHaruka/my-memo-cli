require('shelljs/global')
const { spawn } = require('child_process')
const { join } = require('path')
const uuid = require('uuid')
const { TMP_DIR } = require('./constants')
const {
  loadMemo,
  writeMemo
} = require('./heplers')

function add () {
  let tmpFileName = uuid.v4()
  let tmpFilePath = join(TMP_DIR, tmpFileName)
  touch(tmpFilePath)
  // TODO hasbin check
  let micro = spawn('micro', [tmpFilePath], { stdio: 'inherit' })
  micro.on('close', () => {
    let text = cat(tmpFilePath).stdout
    if (!text) {
      console.log('Canceled.')
      return
    }
    let title = text.split('\n')[0]
    let updatedAt = new Date().toISOString()
    let id = uuid.v4().split('-')[0]
    let content = {
      id,
      title,
      text,
      updatedAt
    }
    let memo = loadMemo()
    memo.push(content)
    writeMemo(memo)
    console.log('Add memo:')
    console.log(content.text)
  })
  micro.on('error', (err) => {
    console.error(err)
  })
}

module.exports = add

/* global touch cat */
