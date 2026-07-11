const express = require("express");
const router = express.Router();
//Sample custoner DataTransfer//
const customers = [
  { id: 1, name: "John Doe", email: "johndoe@gmail.com" },
  { id: 2, name: "Alice", email: "alice@gmail.com" },
];
//get all customer
router.get("/", (req, res) => {
  res.json(customers);
});

//get customer by id
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const customer = customers.find((c) => c.id === id);
  if (!customer) {
    res.status(404).json({ message: "Customer not found" });
  }
  res.json(customer);
});

//create customer
router.post("/", (req, res) => {
  const { name, email } = req.body;
  const newCustomer = {
    id: customers.length + 1,
    name,
    email,
  };
  customers.push(newCustomer);
  res.status(201).json({
    message: "Customer created successfully",
    data: newCustomer,
  });
});

//update customer
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  const customerIndex = customers.findIndex((c) => c.id === id);
  if (customerIndex === -1) {
    return res.status(404).json({
      message: "Customer not found",
    });
  }
  customers[customerIndex] = {
    ...customers[customerIndex],
    name,
    email,
  };
  res.json({
    message: "Customer updated",
    data: customers[customerIndex],
  });
});

//delete customer
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const customerIndex = customers.findIndex((c) => c.id === id);
  if (customerIndex === -1) {
    return res.status(404).json({
      message: "Customer not found",
    });
  }
  const deletedCustomer = customers[customerIndex];
  customers.splice(customerIndex, 1);
  res.json({
    message: "Customer deleted",
    data: deletedCustomer,
  });
});

module.exports = router;
