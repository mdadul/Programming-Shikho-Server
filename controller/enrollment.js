const Enrollment = require("../models/enrollment");

exports.getAllEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ courseId: req.params.id });
    if (enrollments.length === 0)
      res.status(200).json({ msg: "No enrollments found" });

    res.status(200).json({ enrollments });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.getEnrollmentById = async (req, res) => {
  try {
    const enrollment = await Enrollment.findById(req.params.id);
    if (!enrollment) {
      throw new Error("Enrollment not found");
    }
    if (enrollment.length === 0)
      res.status(200).json({ msg: "No enrollments found" });
    else res.status(200).json({ enrollment });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.createEnrollment = async (req, res) => {
  try {
    const isEnrolled = await Enrollment.findOne({
      courseId: req.body.courseId,
      userId: req.body.userId,
    });
    if (isEnrolled) {
      throw new Error("Already enrolled");
    }
    const enrollment = new Enrollment(req.body);
    await enrollment.save();
    res.status(200).json({ msg: "Successfully Enrolled", enrollment });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.updateEnrollment = async (req, res) => {
  try {
    const enrollment = await Enrollment.findById(req.params.id);
    if (!enrollment) {
      throw new Error("Enrollment not found");
    }
    const updates = Object.keys(req.body);
    updates.forEach((update) => (enrollment[update] = req.body[update]));
    await enrollment.save();
    res.status(200).json({ enrollment });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

exports.deleteEnrollment = async (req, res) => {
  try {
    const enrollment = await Enrollment.findByIdAndDelete(req.params.id);
    if (!enrollment) {
      throw new Error("Enrollment not found");
    }
    res.status(200).json({ msg: "Enrollment deleted successfully" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

// get all my enrollments
exports.getMyEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ userId: req.user._id });
    if (enrollments.length === 0)
      res.status(200).json({ msg: "No enrollments found" });
    res.status(200).json({ enrollments });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
