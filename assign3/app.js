const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/users", (req, res) => {
  console.log(req.body);
  res.redirect("/users");
});

app.get("/users", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "users.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(3000);
