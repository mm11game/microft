const dotenv = require("dotenv");
dotenv.config();

const config = {
  development: {
    host: "127.0.0.1",
    username: "root",
    password: "cjswo12",
    database: "microft",
    dialect: "mysql",
    port: 3306,
  },
  production: {
    host: "127.0.0.1",
    username: "root",
    password: "cjswo12",
    database: "microft",
    dialect: "mysql",
    port: 3306,
  },
};

// DB_PASSWORD=cjswo12
// DB_HOST=127.0.0.1
// DB_USER=root
module.exports = config;
