const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send(`I'm doing something in express in real time`);
});

module.exports = app;