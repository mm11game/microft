const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController.js");
const { auth } = require("../middleware/auth.js");

router.get("/", auth, orderController.orderList);
router.get("/:id", auth, orderController.orderListById);
router.post("/", auth, orderController.postOrder);

module.exports = router;
