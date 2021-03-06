const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");

router.post("/sign-up", userController.signUp);
router.post("/login", userController.logIn);
router.post("/logout", userController.logOut);

module.exports = router;
