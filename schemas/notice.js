const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
    },
    date: {
        type: Date,
        required: true
    },
    title : {
        type: String,
        required: true

    },
    description: {
        type: String,
        required: true
    },
});

module.exports = noticeSchema;