const buildMail = require('./build-mail')

module.exports = function (options) {
  const seneca = this
  const sendgrid = require('@sendgrid/mail')
  sendgrid.setApiKey(options.key)

  seneca.add({role: 'mail', hook: 'send'}, (args, done) => {
    const mail = buildMail(args)
    sendgrid.send(mail)
    .then(response => done(null, {ok: true, details: response}))
    .catch(error => done(error))
  })

  seneca.add({role: 'mail', hook: 'init', sub: 'transport'}, (args, done) => {
    done(null)
  })

  return options.tag || 'seneca-sendgrid-mail'
}
