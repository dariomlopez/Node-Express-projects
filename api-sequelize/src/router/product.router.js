const router = require("express").Router();
const Products = require("../model/product.model");
const { faker } = require("@faker-js/faker");

router.get("/products", (request, response) => {
  response.send("I am Router");
});

router.get("/products", (request, response) => {
  response.send("I am Router");
});

router.post("/products", async (request, response) => {
  await Products.sync();
  const createProduct = await Products.create({
    productName: faker.commerce.product(),
    price: faker.commerce.price(),
    inStock: faker.datatype.boolean()
  })
  response.status(201)
});

router.put("/products", (request, response) => {
  response.send("I am Router");
});

router.delete("/products", (request, response) => {
  response.send("I am Router");
});

module.exports = router;