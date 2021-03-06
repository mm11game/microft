const express = require("express");
const app = express();

const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const userRoutes = require("./routes/userRoute.js");
const mypageRoutes = require("./routes/mypageRoute.js");
const orderRoutes = require("./routes/orderRoute.js");
const { notFound, errorHandler } = require("./middleware/errorhandle");

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

if (process.env.NODE_ENV === "production") {
  app.use(
    express.static(path.join(__dirname, "..", "/frontend/test-app/build"))
  );
  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../frontend", "test-app", "build", "index.html")
    )
  );
}

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
