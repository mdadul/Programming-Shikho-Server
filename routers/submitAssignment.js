const express = require("express");
const submitAssignmentController = require("../controller/submitAssignment");
const auth = require("../middlewares/auth");
const role = require("../middlewares/roles");
const { ROLES } = require("../constants");
const router = new express.Router();

// get all submitAssignment - /submitAssignment
router.get("/", auth, submitAssignmentController.getAllSubmitAssignment);

// get submitAssignment by id - /submitAssignment/:id
router.get("/:id", auth, submitAssignmentController.getSubmitAssignmentById);

// create submitAssignment - /submitAssignment
router.post(
  "/",
  auth,
  role.check(ROLES.STUDENT),
  submitAssignmentController.submitAssignment
);

// update submitAssignment by id - /submitAssignment/:id
router.put(
  "/:id",
  auth,
  role.check(ROLES.TEACHER),
  submitAssignmentController.updateSubmitAssignment
);

module.exports = router;
