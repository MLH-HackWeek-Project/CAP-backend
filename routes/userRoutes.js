const express = require('express');
const router = express.Router();
const userController = require('./../controllers/userController');

router.route('/')
    .get(userController.getAllUsers) // Fetch all users
    .post(userController.createUser); // Create a new user

router.route('/:id')
    .get(userController.getUser) // Get user details by ID
    .patch(userController.updateUser) // Update user details
    .delete(userController.deleteUser); // Delete user

module.exports = router;