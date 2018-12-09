#!/usr/bin/env node

const program = require('commander')
const request = require('request')

const Conf = require('conf')
const config = new Conf()

const updateNotifier = require('update-notifier')
const pkg = require('./package.json')
updateNotifier({pkg}).notify()




program
  .version('0.1.0', '-v, --version')

program
  .option('-p, --password [password]', 'use the given password')
  .option('-u, --username [username]', 'use the given username')
  .parse(process.argv)


let {username, password} = program
const shouldUpdate = {
  username: true,
  password: true,
}
if (!username) {
  shouldUpdate.username = false
  username = config.get('username')
  if (!username) {
    console.error('Please provide username.')
    return
  }
}
if (!password) {
  shouldUpdate.password = false
  password = config.get('password')
  if (!password) {
    console.error('Please provide password.')
    return
  }
}
console.log(`Logging in with account ${username}...`)
request.post({
  url: 'http://net.zju.edu.cn:802/include/auth_action.php',
  headers: {
    'Content-type': 'application/x-www-form-urlencoded',
    'Accept': 'text/plain','Host':'net.zju.edu.cn:802',
    'Origin':'net.zju.edu.cn:802',
    'Referer':'http://net.zju.edu.cn:802/srun_portal_pc.php?ac_id=1&&ac_id=3'
  },
  form: {
    'action': 'login',
    'username': username,
    'password': password,
    'ac_id': '3',
    'type': '1',
    'is_ldap': '1',
    'local_auth': '1',
    'user_ip':'',
    'nas_ip':'',
    'user_mac':'',
    'save_me':'1',
    'ajax':'1'
  }
}, (error, response, body) => {
  if (error) {
    console.error(`Request failed.`)
    return
  }
  if (body.includes('login_ok')) {
    console.log('Success.')
    if (shouldUpdate.username) {
      config.set('username', username)
      console.log('Username updated.')
    }
    if (shouldUpdate.password) {
      config.set('password', password)
      console.log('Password updated.')
    }
  } else {
    console.error(`Failed: ${body}`)
  }
})
