const Assignment = require('../models/assignment');

exports.getAllAssignments = async (req, res) => {
    try {
        const assignments = await Assignment.find({});
        if(assignments.length === 0) res.status(200).json({ msg: "No assignments found" });
        res.status(200).json({ assignments });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

exports.getAssignmentById = async (req, res) => {
    try {
        const assignment = await Assignment.findById(req.params.id);
        if(!assignment) res.status(200).json({ msg: "No assignment found" });
        res.status(200).json({ assignment });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

exports.getAssignmentsByCourseId = async (req, res) => {
    try {
        const assignments = await Assignment.find({ courseId: req.params.id });
        if(assignments.length === 0) res.status(200).json({ msg: "No assignments found" });
        res.status(200).json({ assignments });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

// create assignment

exports.createAssignment = async (req, res) => {
    try {
        const assignment = await Assignment.create(req.body);
        res.status(200).json({ assignment });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

// update assignment

exports.updateAssignment = async (req, res) => {
    try{
        const assignment = await Assignment.findById(req.params.id);
        if(!assignment) res.status(200).json({ msg: "No assignment found" });
        Object.keys(req.body).forEach(key => {
            assignment[key] = req.body[key];
        });

        await assignment.save();
        res.status(200).json({ assignment });

    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

// delete assignment

exports.deleteAssignment = async (req, res) => {
    try {
        const assignment = await Assignment.findByIdAndDelete(req.params.id);
        if(!assignment) res.status(200).json({ msg: "No assignment found" });
        res.status(200).json({ msg: "Assignment deleted successfully" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};