const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const variables = require("../config/variables");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};
// get only teachers
exports.getAllTeachers = async (req, res) => {
  try {
    const users = await User.find({ role: "teacher" });
    res.status(200).json({ users });
  } catch (error) {
    res.status(400).json({ msg: error.message });
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
    return res.status(500).send(error);
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
      expiresIn: 3600 * 24 * 7,
    });
    return res.status(201).json({ user, token });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

// get a user
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      throw new Error("No user found");
    }
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};
exports.updateRole = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      throw new Error("No user found");
    }
    const updates = Object.keys(req.body);
    const allowedUpdates = ["role"];
    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );
    if (!isValidOperation) {
      throw new Error("Invalid updates");
    }
    updates.forEach((update) => (user[update] = req.body[update]));
    await user.save();

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      throw new Error("No user found");
    }
    const updates = Object.keys(req.body);
    updates.forEach((update) => (user[update] = req.body[update]));
    await user.save();

    const token = jwt.sign({ _id: user._id.toString() }, variables.authKey, {
      expiresIn: 3600 * 24 * 7,
    });
    return res.status(200).json({ user, token });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

exports.statistics = async (req, res) => {
  try {
    const users = await User.find({});
    const teachers = await User.find({ role: "teacher" });
    const students = await User.find({ role: "student" });

    const list = {
      users,
      teachers,
      students,
    };
    return res.status(200).json(list);
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};
