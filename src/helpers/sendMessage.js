import nodemailer from 'nodemailer';
import mailgun from 'nodemailer-mailgun-transport'

const sender = {
  auth: {
    api_key: process.env.KEY,
    domain: process.env.DOMAIN
  }
}

const dest = {
  username: process.env.EMAIL_DEST_USER
}

const transporter = nodemailer.createTransport(mailgun(sender))

export default function sendMessage (subject, message, user) {

  const email = {
    from: user,
    to: dest.username,
    subject,
    html: message
  };

  return new Promise((resolve, reject) => {

    transporter.sendMail(email, (err, info) => {

      if(err) { return reject(err) }

      return resolve(info)

    });

  })
};


