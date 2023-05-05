const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const variables = require("../config/variables");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.signup = async (req, res) => {
  const user = new User(req.body);
  try {
    const existingUser = await User.findOne({ email: user.email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const hasedPassword = await bcrypt.hash(user.password, 10);
    const result = await User.create({
      name: user.name,
      email: user.email,
      password: hasedPassword,
    });

    const token = jwt.sign({ _id: user._id.toString() }, variables.authKey);
    return res.status(201).json({ user: result, token });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("No user found");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Password does not match");
    }
    const token = jwt.sign({ _id: user._id.toString() }, variables.authKey, {
      expiresIn: "1h",
    });
    res.status(201).json({ user, token });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
