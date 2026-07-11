const express = require("express");
const router = express.Router();
//Sample customer data
const customers = [
  { id: 1, name: "John Doe", email: "johndoe@gmai.com" },
  { id: 2, name: "Alice", email: "alice@gmail.com" },
];
//Get all customers
router.get("/", (req, res) => {
  res.json(customers);
});
