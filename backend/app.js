const express = require("express");
require("dotenv").config();
require("./src/config/dbConnection");
const userRoute = require("./src/routes/userRoute");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.get("/api/test", (req, res) => {
  res.json({
    message: "welcome to the e-carsi!",
  });
});
app.use("/api/users", userRoute);
app.listen(port, () => {
  console.log(`Server is running ${port} port..`);
});
