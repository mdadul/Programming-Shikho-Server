const express = require("express");
const enrollmentController = require("../controller/enrollment");
const { ROLES } = require("../constants");
const role = require("../middlewares/roles");
const router = express.Router();
const auth = require("../middlewares/auth");

router.get(
  "/",
  auth,
  role.check(ROLES.ADMIN),
  enrollmentController.getAllEnrollments
);
router.get(
  "/:id",
  auth,
  role.check(ROLES.ADMIN),
  enrollmentController.getEnrollmentById
);
router.post("/", auth, enrollmentController.createEnrollment);
router.put(
  "/:id",
  auth,
  role.check(ROLES.ADMIN),
  enrollmentController.updateEnrollment
);
router.delete(
  "/:id",
  auth,
  role.check(ROLES.ADMIN),
  enrollmentController.deleteEnrollment
);


module.exports = router;