const express = require('express');
const userController = require('../controller/user');
const auth = require('../middlewares/auth');
const router = new express.Router();

// Getting all users
router.get('/',auth, userController.getAllUsers);

// Register a user
router.post('/signup', userController.signup);

// Login a user
router.post('/login', userController.login);

module.exports = router;