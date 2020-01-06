const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("io")(http);

app.get("/", function(req, res) {
  res.send("Hello World!");
});
