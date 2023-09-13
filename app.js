const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.json({ message: "Hello" });
});

app.post("/send-mail", async (req, res) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "xmegasystem35@gmail.com",
        pass: "mhplmhfyunxcwrsn",
      },
    });

    let mailOptions = {
      from: "xmegasystem35@gmail.com",
      to: "viktorsolomianiy@gmail.com",
      subject: "Данні учня",
      text: `Name: ${req.body.name}, Email: ${req.body.email}, Phone: ${req.body.phone}, Description: ${req.body.description}`,
    };

    console.log(req.body);

    let info = await transporter.sendMail(mailOptions);

    console.log(`Лист надіслано: ${info.response}`);
  } catch (error) {
    console.error(error);
  }

  res.json(req.body);
});

app.listen(3001, () => {
  console.log(`Server is running`);
});
