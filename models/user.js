const mongoose = require('mongoose');
const userSchema = require('../schemas/user');
const variables = require('../config/variables');

const User = mongoose.model('User', userSchema);
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Generate token and save user
userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({_id:user._id.toString()}, variables.authKey);
    return token;
};

// Find user by email and password
userSchema.methods.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('No user found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Password does not match');
    }

    return user;
};
module.exports = User;
