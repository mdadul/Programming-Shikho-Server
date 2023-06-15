const express = require("express");
const enrollmentController = require("../controller/enrollment");
const { ROLES } = require("../constants");
const role = require("../middlewares/roles");
const router = express.Router();
const auth = require("../middlewares/auth");

router.get(
  "/course/:id",
  auth,
  role.check(ROLES.ADMIN,ROLES.TEACHER),
  enrollmentController.getAllEnrollments
);
router.get(
  "/:id",
  auth,
  role.check(ROLES.ADMIN, ROLES.STUDENT),
  enrollmentController.getEnrollmentById
);
router.post("/", auth, enrollmentController.createEnrollment);
router.put(
  "/:id",
  auth,
  role.check(ROLES.ADMIN, ROLES.TEACHER),
  enrollmentController.updateEnrollment
);
router.delete(
  "/:id",
  auth,
  role.check(ROLES.ADMIN),
  enrollmentController.deleteEnrollment
);

router.get(
  "/me/:id",
  auth,
  role.check(ROLES.STUDENT),
  enrollmentController.getMyEnrollments
);

module.exports = router;
