const { response } = require("../app/app");

const router = require("express").Router();

router.get("/products", (request, response) => {
  response.send("I am Router");
});

router.get("/products", (request, response) => {
  response.send("I am Router");
});

router.get("/products", (request, response) => {
  response.send("I am Router");
});

router.get("/products", (request, response) => {
  response.send("I am Router");
});

router.get("/products", (request, response) => {
  response.send("I am Router");
});

module.exports = router;