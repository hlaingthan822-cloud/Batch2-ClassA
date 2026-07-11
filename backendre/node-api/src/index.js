require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const customerRoutes = require("./routes/customer-routes");
app.use("/api/customers", customerRoutes);

//order routes

const orderRoutes = require("./routes/order-routes");
app.use("/api/orders", orderRoutes);

//product routes
const productRoutes=require("./routes/product-routes");
app.use("/api/products",productRoutes);


app.get("/", (req, res) => {
  res.send("Hello Nan! Your Node.js API is working");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
