const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
    {
        courseName :{
            type: String,
            required: true,
        },
        courseDescription :{
            type: String,
            required: true,
        },
        courseImage :{
            type: String,
            required: true,
        },
        coursePrice :{
            type: Number,
            required: true,
        },
        courseCategory :{
            type: String,
            required: true,
        },
        courseTeacherId :{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    }
);


module.exports = courseSchema;