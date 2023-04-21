const mongoose = require('mongoose');
const { ROLES } = require('../constants');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 50
        },
        email: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 255,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true,
            minlength: 5,
        },
        role: {
            type: String,
            default: ROLES.STUDENT,
            enum: [ROLES.ADMIN, ROLES.TEACHER, ROLES.STUDENT],
            
        },
        avatar: {
            type: String,
            default: 'https://res.cloudinary.com/dcqxcejza/image/upload/v1681748314/default-avatar-profile-flat-icon-vector-contact-symbol-illustration-184752213_hutkwd.jpg'
        }
    },
    { timestamps: true }
);

module.exports = userSchema;
