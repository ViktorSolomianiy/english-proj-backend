const express = require("express");
const router = express.Router();

const { sendMail } = require("../controller/contacts");

router.post("/", sendMail);

module.exports = router;
