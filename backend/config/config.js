const dotenv = require("dotenv");
dotenv.config();

const config = {
  development: {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "microft",
    dialect: "mysql",
    port: 3306,
  },
  production: {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "microft",
    dialect: "mysql",
    port: 3306,
  },
};

module.exports = config;
