'use strict'

const seneca = require('seneca')()
const mail = require('seneca-mail')
const sendgridMail = require('seneca-sendgrid-mail')
const sendgridOptions = {
  key: 'YOUR_SENDGRID_API_KEY',
  tag: 'seneca-sendgrid-mail'
}
const email = {
  role: 'mail',
  cmd: 'send',
  text: 'Hi There!',
  to: 'alice@example.com',
  from: 'bob@example.com',
  subject: 'Greetings!'
}

seneca.use(mail)
seneca.use(sendgridMail, sendgridOptions)

seneca.ready(error => {
  if (error) {
    return console.log(error)
  }
  seneca.act(email, (err, response) => {
    if (err) {
      return console.error(err)
    }
    console.log(response)
  })
})
