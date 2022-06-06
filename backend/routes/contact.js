const express = require("express");
const { contactEmailSend } = require("../controllers/contactController");

const router = express.Router();

router.route("/contact").post(contactEmailSend);

module.exports = router;
