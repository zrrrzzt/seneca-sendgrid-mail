'use strict'

const tap = require('tap')
const sendgrid = require('sendgrid')

tap.ok(sendgrid, 'SendGrid loads OK')
