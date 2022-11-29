const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: `${process.env.HOSTMAIL}`,
  port: `${process.env.PORTMAIL}`,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.USERMAIL,
    pass: process.env.PASSMAIL
  },
  tls: {
    rejectUnauthorized: false
  }
});


module.exports = transporter