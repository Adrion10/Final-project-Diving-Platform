// nodemailer to send emails
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "mail.divingShop.org",
  port: 465,
  auth: {
    user: "divingShop@nautilius.org",
    pass: "nautilius1234",
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
});

function sendEmail(contactName, email, message, callback) {
  const mailOption = {
    from: "divingShop@nautilius.org",
    to: ["internetlabi81@gmail.com"],
    subject: "Message from Diving Shop",
    text:
      "\n" +
      "Contact Name:  " +
      contactName +
      "\n" +
      "email:  " +
      email +
      "\n" +
      "Message: " +
      "\n" +
      message,
  };
  transporter.sendMail(mailOption, function (error, info) {
    if (error) {
      console.log(error);
      callback(false);
    } else {
      console.log(info.response);
      callback(true);
    }
  });
}

module.exports = { sendEmail };
