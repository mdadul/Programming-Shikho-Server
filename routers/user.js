const express = require("express");
const userController = require("../controller/user");
const auth = require("../middlewares/auth");
const role = require("../middlewares/roles");
const { ROLES } = require("../constants");
const router = new express.Router();

// Getting all users
router.get("/", auth, role.check(ROLES.ADMIN), userController.getAllUsers);

// Register a user
router.post("/signup", userController.signup);

// Login a user
router.post("/login", userController.login);
// get a user
router.get("/:id", auth, userController.getUser);

// update a user
router.put("/update/:id", auth, userController.updateUser);

// update role
router.put(
  "/role/:id",
  auth,
  role.check(ROLES.ADMIN),
  userController.updateRole
);

// statistics
router.get(
  "/statistics",
  auth,
  role.check(ROLES.ADMIN),
  userController.statistics
);

module.exports = router;
