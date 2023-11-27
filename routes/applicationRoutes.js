const express = require('express');
const router = express.Router();
const applicationController = require('./../controllers/applicationController');

router.route('/')
    .get(applicationController.getAllApplications) // Fetch all applications
    .post(applicationController.createApplication); // Create a new application

router.route('/:id')
    .get(applicationController.getApplication) // Get application details by ID
    .patch(applicationController.updateApplication) // Update application details
    .delete(applicationController.deleteApplication); // Delete application

// Fetch all applications made on a certain attachment opportunity
router.get('/attachment/:id', applicationController.getAttachmentsApplications);

// Fetch all applications a student has made on different attachments
router.get('/user/:id', applicationController.getStudentsApplications);

module.exports = router;