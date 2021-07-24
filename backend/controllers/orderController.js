const { Item, Order } = require("../models");
const asyncHandler = require("express-async-handler");
const item = require("../models/item");
const { sleep } = require("../util/sleep");

module.exports = {
  //get
  orderList: asyncHandler(async (req, res) => {
    let pageNum = req.query.page;
    if (pageNum === undefined) {
      pageNum = 0;
    }
    let offset = 0;
    if (parseInt(pageNum) > 0) {
      offset = parseInt(pageNum) * 5;
    }

    const totalContent = await Order.findAll({
      where: {
        user_id: req.tokenUser.id,
      },
    });
    const totalPages = Math.ceil(totalContent.length / 5);

    const content = await Item.findAll({
      offset,
      limit: 5,
      include: [{ model: Order, where: { user_id: req.tokenUser.id } }],
    });

    await sleep(1000);
    res.send({ totalPages, currentPage: parseInt(pageNum), content });
  }),
  orderListById: asyncHandler(async (req, res) => {
    const { id } = req.params;
    const item = await Item.findByPk(id);

    res.send(item);
  }),
  postOrder: asyncHandler(async (req, res) => {
    const { itemId } = req.body;
    const order = await Order.findOne({
      where: {
        user_id: req.tokenUser.id,
        item_id: itemId,
      },
    });

    if (!order) {
      const createdOrder = await Order.create({
        user_id: req.tokenUser.id,
        item_id: itemId,
      });
      res.send({ createdOrder });
    } else {
      res.send({ err: "이미 존재함" });
    }
  }),
};
