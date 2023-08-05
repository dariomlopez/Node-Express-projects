const express = require("express");
const morgan = require("morgan");
const router = require("../router/product.router");

const app = express();

app.use(morgan("dev"));

app.get("/", (request, response) => {
  response.send(`I'm doing something in express in real time`);
});

app.use("/api/v1", router);

module.exports = app;