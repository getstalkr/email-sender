import nodemailer from 'nodemailer';

const sender = {
  service: process.env.EMAIL_SERVER_SERVICE,
  username: process.env.EMAIL_SERVER_USER,
  password: process.env.EMAIL_SERVER_PASS
}

const dest = {
  username: process.env.EMAIL_DEST_USER
}

const transporter = nodemailer.createTransport({
  service: sender.service,
  auth: {
    user: sender.username,
    pass: sender.password
  }
});

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


