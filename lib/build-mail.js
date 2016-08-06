'use strict'

module.exports = (args, done) => {
  const to = [
    {
      email: args.to
    }
  ]
  const from = {
    email: args.from
  }
  const content = [
    {
      type: 'text/plain',
      value: args.text
    }
  ]
  const mail = {
    method: 'POST',
    path: '/v3/mail/send',
    body: {
      personalizations: [
        {
          to: to,
          subject: args.subject
        }
      ],
      from: from,
      content: content
    }
  }

  return mail
}
