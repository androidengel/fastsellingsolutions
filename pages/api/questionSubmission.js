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
    name, email, phone, fax, comments,
  } = req.body;

  if (fax) {
    res.status(401).json({ message: 'Nobody faxes' });
    return;
  }

  if (!name || !email || !comments) {
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
    subject: `Contact Us | ${name}`,
    html: `<p>${comments}</p>
      <address>
        ${name}</br>
        ${email}</br>
        ${phone ? `${phone}</br>` : ''}
      </address>
    `,
  });
  res.status(200).json({ success: true });
}
