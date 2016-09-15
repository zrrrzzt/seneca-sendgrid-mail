'use strict'
const sendgrid = require('sendgrid')
const buildMail = require('./build-mail')

module.exports = function (options) {
  const sendgridinstance = sendgrid(options.key)
  const seneca = this

  seneca.add({role: 'mail', hook: 'send'}, (args, done) => {
    const mail = buildMail(args)
    const request = sendgridinstance.emptyRequest(mail)

    sendgridinstance.API(request, (error, response) => {
      if (error) {
        return done(error)
      } else {
        return done(null, {ok: true, details: response})
      }
    })
  })

  seneca.add({role: 'mail', hook: 'init', sub: 'transport'}, (args, done) => {
    done(null)
  })

  return options.tag || 'seneca-sendgrid-mail'
}
