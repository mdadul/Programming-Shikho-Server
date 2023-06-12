const Assignment = require("../models/assignment");

// create assignment
exports.createAssignment = async (req, res) => {
  try {
    const assignment = new Assignment(req.body);
    await assignment.save();
    return res
      .status(200)
      .json({ msg: "Assignment created successfully", assignment });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// get all assignments by courseId
exports.getAllAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find({ courseId: req.params.id });
    return res.status(200).json({ assignments });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// get assignment by id
exports.getAssignmentById = async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id);
    return res.status(200).json({ assignment });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// update assignment
exports.updateAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id);
    if (!assignment) {
      throw new Error("Assignment not found");
    }
    const updates = Object.keys(req.body);
    updates.forEach((update) => (assignment[update] = req.body[update]));
    await assignment.save();
    return res
      .status(200)
      .json({ msg: "Assignment updated successfully", assignment });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// delete assignment
exports.deleteAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findByIdAndDelete(req.params.id);
    if (!assignment) {
      throw new Error("Assignment not found");
    }
    return res
      .status(200)
      .json({ msg: "Assignment deleted successfully", assignment });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
