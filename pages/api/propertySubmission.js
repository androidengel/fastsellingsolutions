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
  const {
    name, address, email, phone,
  } = req.body;

  // send mail
  const info = await transporter.sendMail({
    from: `${name} <${email}>`,
    to: 'properties@example.com',
    subject: 'New Property Submission!',
    html: `<p>You received a new property submission:</p>
      <address>
        ${name}</br>
        ${address}</br>
        ${email}</br>
        ${phone}</br>
      </address>
    `,
  });
  res.status(200).json(info);
}
