const mongoose = require('mongoose');

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
            enum: ['student', 'admin','teacher'],
            default: 'student'
        },
        avatar: {
            type: String,
            default: 'https://res.cloudinary.com/dcqxcejza/image/upload/v1681748314/default-avatar-profile-flat-icon-vector-contact-symbol-illustration-184752213_hutkwd.jpg'
        },
        tokens: [
            {
                token: {
                    type: String,
                    required: true,
                },
            }
        ],
    },
    { timestamps: true }
);

module.exports = userSchema;
