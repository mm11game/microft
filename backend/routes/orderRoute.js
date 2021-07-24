const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController.js");
const { auth } = require("../middleware/auth.js");

router.get("/", auth, orderController.orderList);
router.post("/", auth, orderController.postOrder);

router.get("/:id", auth, orderController.orderListById);

module.exports = router;
