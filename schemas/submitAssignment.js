const mongoose = require('mongoose');

const submitAssignmentSchema = new mongoose.Schema({
    assignmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Assignment',
        required: true
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    file: {
        type: String,
        required: true
    },
    marks: {
        type: Number,
        default: 0
    },
    isGraded: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = submitAssignmentSchema;