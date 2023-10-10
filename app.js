const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const contactsRouter = require("./routes/contacts");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/send-mail", contactsRouter);

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
