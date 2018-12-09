#!/usr/bin/env node

let program = require('commander')

program
  .version('0.1.0', '-v, --version')

program
  .command('login')
  .option('-p, --password [password]', 'use the given password')
  .option('-u, --username [username]', 'use the given username')
  .action(function (cmd) {
    console.log(`login ${cmd.username} ${cmd.password}`)
  })

program
  .parse(process.argv)

