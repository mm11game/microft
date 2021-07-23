const dotenv = require("dotenv");
dotenv.config();

const config = {
  development: {
    host: process.env.DBHOST,
    username: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: "microft",
    dialect: "mysql",
  },
};

module.exports = config;
