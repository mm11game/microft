const express = require("express");
const app = express();

const port = 5000;
const cors = require("cors");
const path = require("path");
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

console.log("디렉트네임", __dirname);
console.log("파일네임", __filename);

app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "build", "index.html"))
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
// app.listen(3000, "https://mycroft-test-api.herokuapp.com/");
