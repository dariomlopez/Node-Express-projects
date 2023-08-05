const router = require("express").Router();

const { faker } = require("@faker-js/faker");
const Products = require("../model/product.model");

router.get("/products", async (request, response) => {
  const products = await Products.findAll();
    response.status(200).json({
        ok: true,
        status: 200,
        body: products,
    });
});

router.get("/products/:id", async (request, response) => {
  const id = request.params.id;
    const product = await Products.findOne({
        where: {
            id: id,
        },
    });
    res.status(200).json({
        ok: true,
        status: 200,
        body: product,
    });
});

router.post("/products", async (request, response) => {
  const dataProducts = request.body;
  await Products.sync();
  const createProduct = await Products.create({
    productName: faker.commerce.product(),
    price: faker.commerce.price(),
    inStock: faker.datatype.boolean()
  })
  response.status(201).json({
    ok: true,
    status: 201,
    message: "Product created successfully"
  })
});

router.put("/products/:id", async (request, response) => {
  const id = request.params.id;
    const dataProducts = request.body;
    const updateProduct = await Products.update(
        {
            product_name: dataProducts.product_name,
            price: dataProducts.price,
            inStock: dataProducts.inStock,
        },
        {
            where: {
                id: id,
            },
        }
    );
    res.status(200).json({
        ok: true,
        status: 200,
        body: updateProduct,
    });
});

router.delete("/products", async (request, response) => {
  const id = request.params.id;
    const deleteProduct = await Products.destroy({
        where: {
            id: id,
        },
    });
    res.status(200).json({
        ok: true,
        status: 204,
        body: deleteProduct,
    });
});

module.exports = router;