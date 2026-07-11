require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json()); //Middleware to parse JSON request bodies//
const customerRoutes = require("./routes/customer-routes.js");
app.use("/api/customers", customerRoutes);

app.get("/", (req, res) => {
  res.send("Hello Students! Your Node.js API is working.!");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost: ${PORT}`);
});
