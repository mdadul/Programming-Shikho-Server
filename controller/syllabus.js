const Syllabus = require("../models/syllabus");

exports.createSyllabus = async (req, res) => {
  try {
    const syllabus = new Syllabus(req.body);
    await syllabus.save();
    res.status(201).json({ msg: "Topic created successfully", syllabus });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
};

// update

exports.updateSyllabus = async (req, res) => {
  try {
    console.log(req.params.id);
    const syllabus = await Syllabus.findOne(req.params.id);
    if (!syllabus) {
      throw new Error("Syllabus not found");
    }
    const updates = Object.keys(req.body);
    updates.forEach((update) => (syllabus[update] = req.body[update]));
    await syllabus.save();
    res.status(200).json({ msg: "Topic updated successfully", syllabus });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
};

// delete

exports.deleteSyllabus = async (req, res) => {
  try {
    const syllabus = await Syllabus.findByIdAndDelete(req.params.id);
    if (!syllabus) {
      throw new Error("Syllabus not found");
    }
    res.status(200).json({ msg: "Topic deleted successfully", syllabus });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
};

// get all by course id
exports.getSyllabusByCourseId = async (req, res) => {
  try {
    const syllabus = await Syllabus.find({ courseId: req.params.id });
    res.status(200).json({ syllabus });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
};
