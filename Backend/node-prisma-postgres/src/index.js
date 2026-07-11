import express from "express";
import dotenv from "dotenv";
import  customerRoutes from "./routes/customer-routes.js";
import orderRoutes from "./routes/order-routes.js";
import productRoutes from"./routes/product-routes.js";

dotenv.config();



const app = express();
app.use(express.json()); //Middleware to parse JSON request bodies//

app.use("/api/customers", customerRoutes);

app.get("/api/customers", (req, res) => {
  res.json(customers);
});

app.get("/", (req, res) => {
  res.send("Hello Phyu Phyu! Your Node.js API is working.!");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


app.use("/api/orders", orderRoutes);

app.get("/api/orders", (req, res) => {
  res.json(orders);
});

app.get("/", (req, res) => {
  res.send("Hello Ei Moe lwin! Your Node.js API is working.!");
});

app.use("/api/products", productRoutes);

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/", (req, res) => {
  res.send("Hello Ei Moe lwin! Your Node.js API is working.!");
});