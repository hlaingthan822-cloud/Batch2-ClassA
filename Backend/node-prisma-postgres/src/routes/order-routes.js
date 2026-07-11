import express from "express";
const router = express.Router();

// Sample orders data
const orders = [
  { id: 1, name: "ring", pics: "12", date: "2,3,26" },
  { id: 2, name: "necklace", pics: "13", date: "3,2,26" },
];

// Get all orders
router.get("/", (req, res) => {
  res.json(orders);
});

// Get order by id
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const foundOrder = orders.find((c) => c.id === id);

  if (!foundOrder) {
    return res.status(404).json({ message: "order not found" }); // Added missing return statement
  }
  res.json(foundOrder);
});

// Create a new order
router.post("/", (req, res) => {
  const { name, pics, date } = req.body;
  const newOrder = {
    id: orders.length + 1,
    name,
    pics,
    date,
  };
  orders.push(newOrder);
  res.status(201).json({
    message: "Order created successfully.",
    data: newOrder,
  });
});

// Update order
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, pics, date } = req.body;

  const orderIndex = orders.findIndex((c) => c.id === id);

  if (orderIndex === -1) {
    return res.status(404).json({ message: "Order not found" });
  }

  orders[orderIndex] = { id, name, pics, date };
  res.json({
    message: "Order update successfully",
    data: orders[orderIndex],
  });
});

// Delete order
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const orderIndex = orders.findIndex((c) => c.id === id);

  if (orderIndex === -1) {
    return res.status(404).json({ message: "Order not found" });
  }

  const deletedOrder = orders[orderIndex];
  orders.splice(orderIndex, 1);
  res.json({ message: "Order deleted successfully", data: deletedOrder });
});
export  default router;