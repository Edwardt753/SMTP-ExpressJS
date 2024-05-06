const nodemailer = require("nodemailer");
require("dotenv").config;

const transporter = nodemailer.createTransport({
  //   service: "gmail",
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "email",
    pass: "password",
  },
});

async function main() {
  const info = await transporter.sendMail({
    from: {
      name: "Edward",
      address: "email",
    }, // sender address
    to: ["email receiver"], // list of receivers
    subject: "Test Nodemailer", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
    //   attachments:[{

    //   }]
  });
  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);
