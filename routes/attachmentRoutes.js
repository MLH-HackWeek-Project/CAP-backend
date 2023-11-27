const express = require('express');
const router = express.Router();
const attachmentController = require('./../controllers/attachmentController');
const sortAttachmentsMiddleware = require('../middleware/sortAttachmentsMiddleware');

router.route('/')
    .get(sortAttachmentsMiddleware, (req, res) => {
        // Retrieve the sorted attachments from res.locals
        const sortedAttachments = res.locals.sortedAttachments;
        // Send the sorted attachments in the response
        res.json(sortedAttachments);} ) // Fetch all attachments
    .post(attachmentController.createAttachment); // Create a new attachment

router.route('/:id')
    .get(attachmentController.getAttachment) // Get attachment details by ID
    .patch(attachmentController.updateAttachment) // Update attachment details
    .delete(attachmentController.deleteAttachment); // Delete attachment

// Fetch all attachments posted by an organization
router.get('/organization/:id', attachmentController.getOrganisationsAttachments);

module.exports = router;