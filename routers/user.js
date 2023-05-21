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
router.get("/:id", auth, role.check(ROLES.ADMIN), userController.getUser);

// update a user
router.put("/:id", auth, role.check(ROLES.ADMIN), userController.updateUser);

module.exports = router;
