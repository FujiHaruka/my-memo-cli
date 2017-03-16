#!/usr/bin/env node
const commander = require('commander')
const memo = require('../lib')

commander
  .version(require('../package.json').version)
  .alias('v')

let actions = [
  ['repos', memo.setRepository],
  ['ls [filter]', memo.list],
  ['add', memo.add],
  ['rm [id]', memo.remove],
  ['show [id]', memo.show],
  ['edit [id]', memo.edit],
  ['drop', memo.drop],
  ['push', memo.push]
]

for (let action of actions) {
  let [name, func] = action
  commander.command(name).action(func)
}

commander.parse(process.argv)
