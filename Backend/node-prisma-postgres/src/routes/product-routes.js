import express from "express";
const router = express.Router();

// 1. FIXED: Changed array name to plural "products" to match the route logic
const products = [
  { id: 1, name: "lotion", pics: "12", date: "2,3,26" },
  { id: 2, name: "handcream", pics: "13", date: "3,2,26" },
];

// Get all products
router.get("/", (req, res) => {
  res.json(products);
});

// Get product by id
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  // 2. FIXED: Changed "order.find" to "products.find"
  const foundProduct = products.find((c) => c.id === id);

  if (!foundProduct) {
    return res.status(404).json({ message: "product not found" }); // Added missing return statement
  }
  res.json(foundProduct);
});

// Create a new product
router.post("/", (req, res) => {
  const { name, pics, date } = req.body;

  // 3. FIXED: Defined "newProduct" variable correctly so it can be pushed and sent in the response
  const newProduct = {
    id: products.length + 1,
    name,
    pics,
    date,
  };

  products.push(newProduct);
  res.status(201).json({
    message: "Product created successfully.",
    data: newProduct,
  });
});

// Update product
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, pics, date } = req.body;

  const productIndex = products.findIndex((c) => c.id === id);

  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products[productIndex] = { id, name, pics, date };
  res.json({
    message: "Product update successfully",
    data: products[productIndex],
  });
});

// Delete product
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex((c) => c.id === id);

  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  const deletedProduct = products[productIndex];
  products.splice(productIndex, 1);
  res.json({ message: "Product deleted successfully", data: deletedProduct });
});

export default  router;