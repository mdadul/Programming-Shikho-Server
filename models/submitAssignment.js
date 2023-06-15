const mongoose = require('mongoose');
const submitAssignmentSchema = require('../schemas/submitAssignment');

const SubmitAssignment = mongoose.model('SubmitAssignment', submitAssignmentSchema);

module.exports = SubmitAssignment;