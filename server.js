const path = require("path");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config({ path: "./config.env" });
const sendEmail = require("./mailer");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "build")));
app.get("/", function (req, res, next) {
  try {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  } catch (e) {
    console.log("e", e);
    res.status(400).json({
      status: "fail",
      data: e,
    });
  }
});

app.post("/cv", function (req, res) {
  try {
    if ((req.body.emailAddress === "") | !req.body.emailAddress.includes("@"))
      return;
    sendEmail(req.body.emailAddress);
    res.status(200).json({
      status: "success",
      body: "success",
    });
  } catch (e) {
    console.log("error at the server", e);
    res.status(400).json({
      status: "fail",
      data: e,
    });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
