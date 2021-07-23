"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, { foreignKey: "user_id" });
      Order.belongsTo(models.Item, { foreignKey: "item_id" });
    }
  }
  Order.init(
    {
      user_id: DataTypes.STRING,
      item_id: DataTypes.STRING,
      orderState: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
