const User = require('../models/user');
const bcrypt = require("bcrypt");

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.signup = async (req, res) => {

    // Exisiting user check
    const user = new User(req.body);
    try {
        const existingUser = await User.findOne({ email: user.email });
        if (existingUser) {
            res.status(400).json({ msg: 'User already exists' });
        }

        const hasedPassword = await bcrypt.hash(user.password, 10);
        const result = await User.create({
            name: user.name,
            email: user.email,
            password: hasedPassword

        });

        const token = await user.generateAuthToken();

        res.status(201).json({ user: result, token});
    } catch (error) {
        console.log(error)
        res.status(500).json(error);        
    }
    

};


exports.login = async (req, res) => {
};