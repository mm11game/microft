const { Item } = require("../models");
const asyncHandler = require("express-async-handler");

module.exports = {
  itemList: asyncHandler(async (req, res) => {
    const items = await Item.findAll({});

    if (!items || items.length === 0) {
      res.send("아이템이 없음");
    } else {
      res.send(items);
    }
  }),
};
