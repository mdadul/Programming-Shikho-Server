const express = require("express");
const router = express.Router();
const assignmentController = require("../controller/assignmnet");
const {ROLES} = require("../constants");
const role = require("../middlewares/roles");

router.post("/", role.check(ROLES.ADMIN), assignmentController.createAssignment);

router.get("/", assignmentController.getAllAssignments);

router.get("/:id", assignmentController.getAssignmentById);

router.put("/:id", role.check(ROLES.ADMIN), assignmentController.updateAssignment);

router.delete("/:id", role.check(ROLES.ADMIN), assignmentController.deleteAssignment);

module.exports = router;
