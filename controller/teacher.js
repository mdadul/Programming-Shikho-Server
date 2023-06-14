const Teacher = require("../models/teacher");

// get all teachers for a course
exports.getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find({ courseId: req.params.id })
      .populate("teacherId", "name email avatar")
      .populate("courseId", "name")
      .exec();
    if (teachers.length === 0) {
      return res.status(200).json({ msg: "No teachers found" });
    }
    return res.status(200).json({ teachers });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

// assign a teacher to a course
exports.assignTeacher = async (req, res) => {
  try {
    const isAssigned = await Teacher.findOne({teacherId: req.body.teacherId, courseId: req.body.courseId});
    if (isAssigned) {
      throw new Error("Teacher already assigned");
    }
    const teacher = new Teacher(req.body);
    await teacher.save();
    return res.status(201).json({ msg: "Successfully Assigned",teacher });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

// delete a teacher from a course
exports.deleteTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndDelete(req.params.id);
    if (!teacher) {
      throw new Error("Teacher not found");
    }
    return res.status(200).json({ msg: "Successfully deleted" });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};
