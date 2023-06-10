const User = require("../models/User");
const CryptoJS = require("crypto-js");

exports.register = async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json({
      savedUser,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.name });
    !user && res.status(401).json("Wrong credentials");
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    OriginalPassword !== req.body.password &&
      res.status(401).json("Wrong credentials");
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
