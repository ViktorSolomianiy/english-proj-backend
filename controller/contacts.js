const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const { ctrlWrapper } = require("../helpers");

const sendMail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.ADMIN_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.ADMIN_EMAIL,
    to: "viktorsolomianiy@gmail.com",
    subject: "Данні учня",
    text: `Name: ${req.body.name}, Email: ${req.body.email},  try { Phone: ${req.body.phone}, Description: ${req.body.description}`,
  };

  const info = await transporter.sendMail(mailOptions);

  res.json(req.body);
  console.log(`Лист надіслано: ${info.response}`);
};

module.exports = { sendMail: ctrlWrapper(sendMail) };
