const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { fileURLtopath } = require("url");
const path = require("path");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("views"));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/book", function (req, res) {
  res.sendFile(__dirname + "/views/book.html");
});
app.get("/login", function (req, res) {
  res.sendFile(__dirname + "/views/login.html");
});
app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/views/about.html");
});
app.listen(3000, () => console.log(`Server is listening on port 3000`));
