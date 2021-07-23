"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Items", [
      {
        itemName: "아이템1",
        image: "/images/1.jpg",
      },
      {
        itemName: "아이템2",
        image: "/images/2.jpg",
      },
      {
        itemName: "아이템3",
        image: "/images/3.jpg",
      },
      {
        itemName: "아이템4",
        image: "/images/4.jpg",
      },
      {
        itemName: "아이템5",
        image: "/images/5.jpg",
      },
      {
        itemName: "아이템6",
        image: "/images/6.jpg",
      },
      {
        itemName: "아이템7",
        image: "/images/7.jpg",
      },
      {
        itemName: "아이템8",
        image: "/images/8.jpg",
      },
      {
        itemName: "아이템9",
        image: "/images/9.jpg",
      },
      {
        itemName: "아이템10",
        image: "/images/10.jpg",
      },
      {
        itemName: "아이템11",
        image: "/images/11.jpg",
      },
      {
        itemName: "아이템12",
        image: "/images/12.jpg",
      },
      {
        itemName: "아이템13",
        image: "/images/13.jpg",
      },
      {
        itemName: "아이템14",
        image: "/images/14.jpg",
      },
      {
        itemName: "아이템15",
        image: "/images/15.jpg",
      },
      {
        itemName: "아이템16",
        image: "/images/16.jpg",
      },
      {
        itemName: "아이템17",
        image: "/images/17.jpg",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Items", null, {});
  },
};
