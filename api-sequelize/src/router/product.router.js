const router = require("express").Router();

const { faker } = require("@faker-js/faker");
const Products = require("../model/product.model");

/**Get endpoint method to get all the products */
router.get("/products", async (request, response) => {
  const products = await Products.findAll();
    response.status(200).json({
        ok: true,
        status: 200,
        body: products,
    });
});

/**Get endpoint method to get one product by id */
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

/**Post method endpoint to create a new product */
router.post("/products", async (request, response) => {
  const dataProducts = request.body;
  await Products.sync();
  const createProduct = await Products.create({
    /**With faker we can create a fake product in our database */
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

/**Put endpoint method to update data in one product of our database */
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
    response.status(200).json({
        ok: true,
        status: 200,
        body: updateProduct,
    });
});

/**Delete endpoint method to delete one product by id */
router.delete("/products", async (request, response) => {
  const id = request.params.id;
    const deleteProduct = await Products.destroy({
        where: {
            id: id,
        },
    });
    response.status(200).json({
        ok: true,
        status: 204,
        body: deleteProduct,
    });
});

module.exports = router;