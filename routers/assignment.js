const express = require("express");
const router = express.Router();
const assignmentController = require("../controller/assignmnet");
const { ROLES } = require("../constants");
const role = require("../middlewares/roles");
const auth = require("../middlewares/auth");

router.post(
  "/",
  auth,
  role.check(ROLES.ADMIN, ROLES.TEACHER),
  assignmentController.createAssignment
);

router.get("/course/:id", auth, assignmentController.getAllAssignments);

router.get("/:id",auth, role.check(ROLES.STUDENT,ROLES.ADMIN), assignmentController.getAssignmentById);

router.put(
  "/:id",
  auth,
  role.check(ROLES.ADMIN, ROLES.TEACHER),
  assignmentController.updateAssignment
);

router.delete(
  "/:id",
  auth,
  role.check(ROLES.ADMIN, ROLES.TEACHER),
  assignmentController.deleteAssignment
);

module.exports = router;
