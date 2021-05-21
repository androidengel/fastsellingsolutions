import nodemailer from 'nodemailer';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export default async function handler(req, res) {
  // send mail
  const info = await transporter.sendMail({
    from: 'Terold Phillips <terold@example.com>',
    to: 'properties@example.com',
    subject: 'sell my house!',
    html: '<p>Please sell my house now!</p>',
  });
  res.status(200).json(info);
}
