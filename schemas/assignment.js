const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    maxMarks: {
        type: Number,
        required: true,
    },
    passingMarks: {
        type: Number,
        required: true,
    },
});

module.exports = assignmentSchema;