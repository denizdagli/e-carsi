const express = require("express");
require("dotenv").config();
require("./src/config/dbConnection");
const userRoute = require("./src/routes/userRoute");
const authRoute = require("./src/routes/authRoute");
const productRoute = require("./src/routes/productRoute");
const cartRoute = require("./src/routes/cartRoute");
const orderRoute = require("./src/routes/orderRoute");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());


app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(port, () => {
  console.log(`Server is running ${port} port..`);
});
