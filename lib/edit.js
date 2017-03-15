require('shelljs/global')
const fs = require('fs')
const { spawn } = require('child_process')
const { join } = require('path')
const uuid = require('uuid')
const { TMP_DIR } = require('./constants')
const {
  loadMemo,
  writeMemo,
  findText
} = require('./heplers')

function edit (id) {
  let original = findText(id)
  if (!original) {
    return
  }
  let tmpFileName = uuid.v4()
  let tmpFilePath = join(TMP_DIR, tmpFileName)
  fs.writeFileSync(tmpFilePath, original)
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
    let content = {
      id,
      title,
      text,
      updatedAt
    }
    let memo = loadMemo()
    let index = memo.map(({ id }) => id).indexOf(id)
    if (index < 0) {
      return
    }
    memo[index] = content
    writeMemo(memo)
    console.log('Edit memo:')
    console.log(text)
  })
  micro.on('error', (err) => {
    console.error(err)
  })
}

module.exports = edit

/* global cat */
