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
//get id
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const customer = customers.find((c) => c.id === id);
  if (!customer) {
    res.status(404).json({ message: "Customer not found" });
  }
  res.json(customer);
});

//create a new customer
router.post("/", (req, res) => {
  const { name, email } = req.body;
  const newCustomer = {
    id: customers.length + 1,
    name,
    email,
  };
  customers.push(newCustomer);
  res.status(201).json({
    message: "Customer created successfully.",
    data: newCustomer,
  });
});
//Update a customer
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  const customerIndex = customers.findIndex((c) => c.id === id);
  if (customerIndex === -1) {
    return res.status(404).json({ message: "Customer not found" });
  }
  customers[customerIndex] = { id, name, email };
  res.json({
    message: "Customer updated successfully",
    data: customers[customerIndex],
  });
});

//delete a customer
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const customerIndex = customers.findIndex((c) => c.id === id);
  if (customerIndex === -1) {
    return res.status(404).json({ message: "Customer not found" });
  }
  const deletedCustomer = customers[customerIndex];
  customers.splice(customerIndex, 1);
  res.json({ message: "Customr deleted successfully", data: deletedCustomer });
});

module.exports = router;
