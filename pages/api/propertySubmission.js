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
    name, address, email, phone, fax,
  } = req.body;

  if (fax) {
    res.status(401).json({ message: 'Nobody faxes' });
    return;
  }

  if (!name || !address || !email) {
    res.status(401).json({ message: 'Please fill out all required fields' });
    return;
  }

  if (email && !email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm)) {
    res.status(401).json({ message: 'Invalid email' });
    return;
  }

  // send mail
  const info = await transporter.sendMail({
    from: `${name} <${email}>`,
    to: process.env.MAIL_TO,
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
