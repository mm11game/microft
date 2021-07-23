const express = require("express");
const app = express();

const port = 5000;
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const userRoutes = require("./routes/userRoute.js");
const mypageRoutes = require("./routes/mypageRoute.js");
const orderRoutes = require("./routes/orderRoute.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/", userRoutes);
app.use("/mypage", mypageRoutes);
app.use("/order", orderRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
