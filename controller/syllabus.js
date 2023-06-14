const Syllabus = require("../models/syllabus");

exports.createSyllabus = async (req, res) => {
  try {
    const syllabus = new Syllabus(req.body);
    await syllabus.save();
    return res
      .status(201)
      .json({ msg: "Topic created successfully", syllabus });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

// update

exports.updateSyllabus = async (req, res) => {
  try {
    const syllabus = await Syllabus.findOne(req.params.id);
    if (!syllabus) {
      throw new Error("Syllabus not found");
    }
    const updates = Object.keys(req.body);
    updates.forEach((update) => (syllabus[update] = req.body[update]));
    await syllabus.save();
    return res
      .status(200)
      .json({ msg: "Topic updated successfully", syllabus });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

// delete

exports.deleteSyllabus = async (req, res) => {
  try {
    const syllabus = await Syllabus.findByIdAndDelete(req.params.id);
    if (!syllabus) {
      throw new Error("Syllabus not found");
    }
    return res
      .status(200)
      .json({ msg: "Topic deleted successfully", syllabus });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

// get all by course id
exports.getSyllabusByCourseId = async (req, res) => {
  try {
    const syllabus = await Syllabus.find({ courseId: req.params.id });
    return res.status(200).json({ syllabus });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
