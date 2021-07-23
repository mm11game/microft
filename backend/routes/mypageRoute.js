const express = require("express");
const router = express.Router();
const mypageController = require("../controllers/mypageController.js");
const { auth } = require("../middleware/auth.js");

router.get("/itemlist", mypageController.itemList);

module.exports = router;
