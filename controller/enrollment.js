const enrollment = require('../models/enrollment');

exports.getAllEnrollments = async (req, res) => {
    try {
        const enrollments = await enrollment.find({});
        if(enrollments.length === 0) res.status(200).json({ msg: "No enrollments found" });
        res.status(200).json({ enrollments });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

exports.getEnrollmentById = async (req, res) => {
    try {
        const enrollment = await enrollment.findById(req.params.id);
        if (!enrollment) {
            throw new Error("Enrollment not found");
        }
        if(enrollment.length === 0) res.status(200).json({ msg: "No enrollments found" });
        else res.status(200).json({ enrollment });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

exports.createEnrollment = async (req, res) => {
    try {
        const enrollment = new enrollment(req.body);
        await enrollment.save();
        res.status(201).json({ enrollment });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

exports.updateEnrollment = async (req, res) => {
    try {
        const enrollment = await enrollment.findById(req.params.id);
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
        const enrollment = await enrollment.findByIdAndDelete(req.params.id);
        if (!enrollment) {
            throw new Error("Enrollment not found");
        }
        res.status(200).json({ msg: "Enrollment deleted successfully" });

    } catch (error) {
        res.status(400).json({ msg: error.message });        
    }
};

exports.getEnrollmentsByStudentId = async (req, res) => {
    try {
        const enrollments = await enrollment.find({ studentId: req.params.id });
        if(enrollments.length === 0) res.status(200).json({ msg: "No enrollments found" });
        res.status(200).json({ enrollments });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

exports.getEnrollmentsByCourseId = async (req, res) => {
    try {
        const enrollments = await enrollment.find({ courseId: req.params.id });
        if(enrollments.length === 0) res.status(200).json({ msg: "No enrollments found" });
        res.status(200).json({ enrollments });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

exports.getEnrollmentsByStudentIdAndCourseId = async (req, res) => {
    try {
        const enrollments = await enrollment.find({ studentId: req.params.studentId, courseId: req.params.courseId });
        if(enrollments.length === 0) res.status(200).json({ msg: "No enrollments found" });
        res.status(200).json({ enrollments });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

exports.getEnrollmentsByStudentIdAndCourseIdAndStatus = async (req, res) => {
    try {
        const enrollments = await enrollment.find({ studentId: req.params.studentId, courseId: req.params.courseId, status: req.params.status });
        if(enrollments.length === 0) res.status(200).json({ msg: "No enrollments found" });
        res.status(200).json({ enrollments });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

exports.getEnrollmentsByStudentIdAndStatus = async (req, res) => {
    try {
        const enrollments = await enrollment.find({ studentId: req.params.studentId, status: req.params.status });
        if(enrollments.length === 0) res.status(200).json({ msg: "No enrollments found" });
        res.status(200).json({ enrollments });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

exports.getEnrollmentsByCourseIdAndStatus = async (req, res) => {
    try {
        const enrollments = await enrollment.find({ courseId: req.params.courseId, status: req.params.status });
        if(enrollments.length === 0) res.status(200).json({ msg: "No enrollments found" });
        res.status(200).json({ enrollments });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

exports.getEnrollmentsByStatus = async (req, res) => {
    try {
        const enrollments = await enrollment.find({ status: req.params.status });
        if(enrollments.length === 0) res.status(200).json({ msg: "No enrollments found" });
        res.status(200).json({ enrollments });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

