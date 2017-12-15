module.exports = args => {
  let mail = {
    to: args.to,
    from: args.from,
    subject: args.subject,
    text: args.text
  }

  if (args.cc) {
    mail.cc = args.cc
  }

  if (args.bcc) {
    mail.bcc = args.bcc
  }

  if (args.replyTo) {
    mail.replyTo = args.replyTo
  }

  if (args.text) {
    mail.text = args.text
  }

  if (args.html) {
    mail.html = args.html
  }

  return mail
}
