'use strict'

module.exports = args => {
  const to = [
    {
      email: args.to
    }
  ]
  const from = {
    email: args.from
  }
  const replyTo = args.replyTo ? {email: args.replyTo} : {}

  var personalization = {
    to: to,
    subject: args.subject
  }
  var content = []

  if (args.bcc) {
    personalization.bcc = [
      {
        email: args.bcc
      }
    ]
  }

  if (args.cc) {
    personalization.cc = [
      {
        email: args.cc
      }
    ]
  }

  if (args.text) {
    content.push(
      {
        type: 'text/plain',
        value: args.text
      }
    )
  }

  if (args.html) {
    content.push(
      {
        type: 'text/html',
        value: args.html
      }
    )
  }

  const mail = {
    method: 'POST',
    path: '/v3/mail/send',
    body: {
      personalizations: [personalization],
      from: from,
      content: content
    },
    reply_to: replyTo
  }

  return mail
}
