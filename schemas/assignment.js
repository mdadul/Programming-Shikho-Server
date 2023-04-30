const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
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