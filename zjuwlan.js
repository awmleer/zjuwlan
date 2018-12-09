#!/usr/bin/env node

const program = require('commander')
const request = require('request')


program
  .version('0.1.0', '-v, --version')

program
  .command('login')
  .option('-p, --password [password]', 'use the given password')
  .option('-u, --username [username]', 'use the given username')
  .action(function (cmd) {
    // console.log(`login ${cmd.username} ${cmd.password}`)
    const {username, password} = cmd
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
        console.error('login failed')
        return
      }
      console.log(response.body)
      console.log(response.body.includes('login_ok'))
    })
  })

program
  .parse(process.argv)

