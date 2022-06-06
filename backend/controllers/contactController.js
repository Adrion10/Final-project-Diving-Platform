const emailSender = require("../models/emailSender");

exports.contactEmailSend = (req, res) => {
  console.log(req.body);
  emailSender.sendEmail(
    req.body.contactName,
    req.body.email,
    req.body.message,
    (ok) => {
      if (ok) {
        res.json("ok");
      } else {
        res.json("no");
      }
    }
  );
};
