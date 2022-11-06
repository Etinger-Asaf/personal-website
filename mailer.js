const nodemailer = require("nodemailer");

module.exports = async (emailAddress) => {
  if (emailAddress === undefined) return;

  let transporter = nodemailer.createTransport({
    host: process.env.STMPSERVER,
    port: process.env.STMPPORT,
    secure: false,
    auth: {
      user: process.env.STMPLOGIN,
      pass: process.env.STMPPASS,
    },
  });

  let res = await transporter.sendMail({
    from: "Asaf Etinger <asafetinger@gmail.com>",
    to: emailAddress,
    subject: "Asaf Etinger CV - FrontEnd Developer",
    text: "Thank you! Hope to meet you soon!",
    attachments: [
      {
        filename: "Asaf Etinger CV.pdf",
        path: "./src/assets/CV/Asaf Etinger CV.pdf",
      },
    ],
  });

  return res;
};
