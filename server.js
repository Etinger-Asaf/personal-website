const path = require("path");
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3001;

const app = express();
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// app.use(express.static(path.resolve(__dirname, "./public")));
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

app.get("*", (req, res) => {
  res.json({ message: "hi" });
  // res.sendFile(path.resolve(__dirname, "../public", "index.html"));
});
