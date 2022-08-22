const path = require("path");

const express = require("express");
const process = require("process");

const app = express();

// const publicPath = path.join(__dirname, "..", "public");

const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static());
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
  });
}
// app.use(express.static(publicPath));x

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log("Server is up!", port);
});
