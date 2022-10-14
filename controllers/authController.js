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

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user &&
      res.status(401).json({
        message: "Email not valid",
        auth: false,
      });

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

    const accessToken = jwt.sign(
      { id: user._id, isActivate: user.isActivate },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "5d" }
    );

    res.status(200).json({ auth: true, token: accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.verifyToken = (req, res) => {
  if (req.user) {
    res.status(200).json({ verify: true });
  }
};
