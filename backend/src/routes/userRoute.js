const router = require('express').Router();
const userController = require("../controllers/userController");

router.get("/usertest", userController.getUsers);
router.post("/userposttest",userController.addUser);

module.exports=router;