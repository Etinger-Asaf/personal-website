const nodemailer = require("nodemailer");

module.exports = main = async (emailAddress) => {
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

  let info = await transporter.sendMail({
    from: "Asaf Etinger <asafetinger@gmail.com>",
    to: emailAddress,
    subject: "Asaf Etinger CV",
    text: "Thank you! Hope to meet you soon!",
    attachments: [
      {
        filename: "Asaf Etinger CV.pdf",
        path: "./src/assets/CV/Asaf Etinger CV.pdf",
      },
    ],
  });

  console.log("Message sent: %s", info);
};
main().catch(console.error);
