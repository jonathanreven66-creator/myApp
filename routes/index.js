const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

//root endpoint
router.get("/", (_, res) => {
  res.send("Hello World!");
});

//user endpoint
router.post("/users", userController.createUser);
router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);

module.exports = router;
