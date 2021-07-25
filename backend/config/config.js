const dotenv = require("dotenv");
dotenv.config();

const config = {
  development: {
    host: "127.0.0.1",
    username: "root",
    password: "cjswo12",
    database: "microft",
    dialect: "mysql",
  },
  production: {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "microft",
    dialect: "mysql",
  },
};

module.exports = config;
