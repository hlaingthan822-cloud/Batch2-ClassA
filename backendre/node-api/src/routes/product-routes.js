const express = require("express");
const router = express.Router();
const products = [{ id: 1, name: "Sofa", price: 30000, color: "pink" }];
router.get("/", (req, res) => {
  res.json(products);
});

//get products by id
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((c) => c.id === id);
  if (!product) {
    res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
});

//create product
router.post("/", (req, res) => {
  const { name, sofa, price, color } = req.body;
  const newProduct = {
    id: products.length + 1,
    name,
    price,
    color,
  };
  products.push(newProduct);
  res.status(201).json({
    message: "Product created successfully",
    data: newProduct,
  });
});

//update product
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email, price, color } = req.body;
  const productIndex = products.findIndex((c) => c.id === id);
  if (productIndex === -1) {
    return res.status(404).json({
      message: "Product not found",
    });
  }
  products[productIndex] = {
    ...products[productIndex],
    name,
    price,
    color,
  };
  res.json({
    message: "Product updated",
    data: products[productIndex],
  });
});

//delete product
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex((c) => c.id === id);
  if (productIndex === -1) {
    return res.status(404).json({
      message: "Product not found",
    });
  }
  const deletedProduct = products[productIndex];
  products.splice(productIndex, 1);
  res.json({
    message: "Product deleted",
    data: deletedProduct,
  });
});

module.exports = router;
