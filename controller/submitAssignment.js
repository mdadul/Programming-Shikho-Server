const SubmitAssignment = require('../models/submitAssignment');

// post - /submitAssignment
exports.submitAssignment = async (req, res) => {
    try {
        const submitAssignment = new SubmitAssignment(req.body);
        await submitAssignment.save();
        return res.status(201).json({ msg:"Assignment Successfully Submitted",submitAssignment });
    } catch (error) {
        return res.status(400).json({ msg: error.message });
    }
};

// get - /submitAssignment
exports.getAllSubmitAssignment = async (req, res) => {
    try {
        const submitAssignment = await SubmitAssignment.find({});
        if (submitAssignment.length === 0)
            return res.status(200).json({ msg: "No submitAssignment found" });
        return res.status(200).json({ submitAssignment });
    } catch (error) {
        return res.status(400).json({ msg: error.message });
    }
};

// get - /submitAssignment/:id
exports.getSubmitAssignmentById = async (req, res) => {
    try {
        const submitAssignment = await SubmitAssignment.findById(req.params.id);
        if (!submitAssignment) {
            throw new Error("submitAssignment not found");
        }
        if (submitAssignment.length === 0)
            return res.status(200).json({ msg: "No submitAssignment found" });
        return res.status(200).json({ submitAssignment });
    } catch (error) {
        return res.status(400).json({ msg: error.message });
    }
};

// put - /submitAssignment/:id by teacher
exports.updateSubmitAssignment = async (req, res) => {
    try {
        const submitAssignment = await SubmitAssignment.findById(req.params.id);
        if (!submitAssignment) {
            throw new Error("submitAssignment not found");
        }
        const updates = Object.keys(req.body);
        updates.forEach((update) => (submitAssignment[update] = req.body[update]));
        await submitAssignment.save();
        return res.status(200).json({ submitAssignment });
    } catch (error) {
        return res.status(400).json({ msg: error.message });
    }
};
