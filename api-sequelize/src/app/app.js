const express = require("express");
const router = require("../router/product.router");

const app = express();

app.get("/", (request, response) => {
  response.send(`I'm doing something in express in real time`);
});

app.use("/api/v1", router);

module.exports = app;