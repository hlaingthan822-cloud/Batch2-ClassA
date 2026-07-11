import express from "express";
import prisma from "../config/db.js";
const router = express.Router();
// Sample customer data
const customers = [
  { id: 1, name: "John Doe", email: "johndoe@gmail.com" },
  { id: 2, name: "Alice", email: "alice@gmail.com" },
];

// GET - Customer
router.get("/", async (req, res) => {
   const allCustomers = await prisma.customer.findMany({
    orderBy: {
      id: "asc",
    },
   });
  res.json(allCustomers);
});

// GET - ID 
router.get("/:id", async (req, res) => {
 
  const id = parseInt(req.params.id);
  const customer = customers.find((c) => c.id === id);

  if (!customer) {
    return res.status(404).json({ message: "Customer not found" });
  }
  res.json(customer);
});

// POST - Customer 
router.post("/", async (req, res) => {
  const { name, email } = req.body;allCustomers

  const existingCustomer = await prisma.customer.findUnique({
    where: { email },
  });
  if (existingCustomer) {
    return res.status(400).json({ message: "Email already exists" });
  }

  const newCustomer = {
    id: customers.length ? Math.max(...customers.map((c) => c.id)) + 1 : 1,
    name,
    email,
  };

  customers.push(newCustomer);
  res.status(201).json({
    message: "Customer created successfully",
    data: newCustomer,
  });
});

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

//Delete a customer

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const customerIndex = customers.findIndex((c) => c.id === id);

  if (customerIndex === -1) {
    return res.status(404).json({ message: "Customer not found" });
  }
  const deleteCustomer = customers[customerIndex];
  customers.splice(customerIndex, 1);
  res.json({ message: "Customer deleted successfully", data: deleteCustomer });
});

export default router;