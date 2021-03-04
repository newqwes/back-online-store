import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport(
  {
    service: process.env.MAIL_SERVICE,
    auth: {
      user: process.env.MAIL_ADMIN,
      pass: process.env.MAIL_PASS,
    },
  },
  {
    from: `Pizza Store ${process.env.MAIL_ADMIN}`,
    subject: 'New order!',
  },
);

const mailer = message => {
  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log('Email sent: ', info);
  });
};

export default mailer;
