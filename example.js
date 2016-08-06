'use strict'

const seneca = require('seneca')()
const sendgridOptions = {
  key: 'YOUR_SENDGRID_API_KEY'
}

seneca.use('mail')
seneca.use('sendgrid-mail', sendgridOptions)

seneca.ready(function (error) {
  if (error) {
    return console.log(error)
  }

  seneca.act({
    role: 'mail',
    cmd: 'send',
    text: 'Hi There!',
    to: 'alice@example.com',
    from: 'bob@example.com',
    subject: 'Greetings!'
  })
})
