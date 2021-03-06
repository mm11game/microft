const { User } = require("../models");
const { generateToken } = require("../token/token");
const asyncHandler = require("express-async-handler");

module.exports = {
  signUp: asyncHandler(async (req, res) => {
    const { email, password, mobile } = req.body;

    const user = await User.findOne({
      where: { email },
    });

    if (user) {
      res.status(401);
      throw new Error("이미 가입한 사람");
    } else {
      const createUser = await User.create({
        email,
        password,
        mobile,
      });

      let token = generateToken(createUser.id);
      res.send({ token });
    }
  }),
  logIn: asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    console.dir(req);

    if (password.length < 8) {
      res.status(401);
      throw new Error("패스워드 짧음");
    }

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      res.status(401);
      throw new Error("해당 유저가 없음");
    } else {
      if (password !== user.password) {
        res.send({ err: new Error() });
        return;
      } else {
        let token = generateToken(user.id);
        res.send({ token });
      }
    }
  }),
  logOut: asyncHandler(async (req, res) => {
    res.send("로그아웃 완료");
  }),
};
