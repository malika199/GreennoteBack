const User = require("../models/User");
const jwt = require("jsonwebtoken");

const CryptoJS = require("crypto-js");
exports.register = (req, res) => {
  let hashedPassword = CryptoJS.AES.encrypt(
    req.body.password,
    process.env.ACCESS_TOKEN_SECRET
  ).toString();
  console.log(req.body);
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    profilPecture: req.body.profilPecture,
    subscription: req.body.subscription,

    isActivate: false,
    password: hashedPassword,
  });

  user.save().then((user) => res.status(200).json(user));
};
exports.login = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      const bytes = CryptoJS.AES.decrypt(
        user.password,
        process.env.ACCESS_TOKEN_SECRET
      );
      const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

      originalPassword !== req.body.password &&
        res.status(401).json({
          message: "password not valid",
          auth: false,
          token: null,
        });
      
      let userToken = jwt.sign(
        {
          id: user._id,
          isActivate: user.isActivate,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: 86400,
        }
      );
      res.status(200).send({
        auth: true,
        token: userToken,
      });
    })
    .catch((err) => res.status(404).send(err));
};

exports.verifyToken = (req, res) => {
  if (req.user) {
    res.status(200).json({ verify: true });
  }
};
