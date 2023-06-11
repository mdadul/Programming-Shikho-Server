const mongoose = require('mongoose');

const assignmentSchema = require('../schemas/assignment');

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;