const express = require("express");
require("dotenv").config();
require("./src/config/dbConnection");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());



app.listen(port, () => {
  console.log(`Server is running ${port} port..`);
});
