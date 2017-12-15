const tap = require('tap')
const sendgridMail = require('../../lib/sendgrid')

tap.ok(sendgridMail, 'seneca-sendgrid-mail loads OK')
