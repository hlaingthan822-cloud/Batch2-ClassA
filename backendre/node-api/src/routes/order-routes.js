const express = require("express");
const router = express.Router();
const orders = [
  { id: 1, date: "12.4.2003", total_amount: 120000, payment_method: "Kpay" },
  {
    id: 2,
    date: "23.4.2005",
    total_amount: 130000,
    payment_method: "Wave Pay",
  },
];

router.get("/", (req, res) => {
  res.json(orders);
});

//get order by id
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const order = orders.find((c) => c.id === id);
  if (!order) {
    res.status(404).json({ message: "Order not found" });
  }
  res.json(order);
});

//Create new Order
router.post("/", (req, res) => {
  const { date, total_amount, payment_method } = req.body;
  const newOrder = {
    id: orders.length + 1,
    date,
    total_amount,
    payment_method,
  };
  orders.push(newOrder);
  res.status(201).json({
    message: "Order created succssfully",
    data: newOrder,
  });
});

//update orders
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { date, total_amount, payment_method } = req.body;
  const orderIndex = orders.findIndex((c) => c.id === id);
  if (orderIndex === -1) {
    return res.status(404).json({
      message: "Order not found",
    });
  }
  orders[orderIndex] = {
    ...orders[orderIndex],
    date,
    total_amount,
    payment_method,
  };
  res.json({
    message: "Order updated",
    data: orders[orderIndex],
  });
});

//delete Orders
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const orderIndex = orders.findIndex((c) => c.id === id);
  if (orderIndex === -1) {
    return res.status(404).json({
      message: "Order not found",
    });
  }
  const deletedOrder = orders[orderIndex];
  orders.splice(orderIndex, 1);
  res.json({
    message: "Order deleted",
    data: deletedOrder,
  });
});

module.exports = router;
