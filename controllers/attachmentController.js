const Attachment = require('../models/Attachment');

async function getAllAttachments(req, res){
    try {
        const attachments = await Attachment.find();
        res.status(200).json(attachments);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

async function createAttachment(req, res){
    const attachmentData = req.body;

    try {
        const newAttachment = new Attachment(attachmentData);
        const savedAttachment = await newAttachment.save();

        res.status(201).json(savedAttachment);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

async function getAttachment(req, res){
    const attachmentID = req.params.id;

    try {
        const attachment = await Attachment.findById(attachmentID);

        if (!attachment) {
            return res.status(404).send('Attachment not found');
        }

        res.status(200).json(attachment);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

async function updateAttachment(req, res){
    const attachmentID = req.params.id;
    const updatedAttachmentData = req.body;

    try {
        const attachment = await Attachment.findById(attachmentID);

        if (!attachment) {
            return res.status(404).send('Attachment not found');
        }

        // Update attachment fields with new data
        Object.assign(attachment, updatedAttachmentData);

        // Save the updated attachment
        const updatedAttachment = await attachment.save();

        res.status(200).json(updatedAttachment);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

async function deleteAttachment(req, res){
    const attachmentID = req.params.id;

    try {
        const attachment = await Attachment.findById(attachmentID);

        if (!attachment) {
            return res.status(404).send('Attachment not found');
        }

        // Remove the attachment from the database
        await attachment.deleteOne();

        res.json({ message: 'Attachment deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

async function getOrganisationsAttachments(req, res){
    const organizationID = req.params.id;

    try {
        //const attachments = await Attachment.find({ organizationID });
        const attachments = await Attachment.find({ organization: organizationID });
        res.status(200).json(attachments);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    getAllAttachments,
    createAttachment,
    getAttachment,
    updateAttachment,
    deleteAttachment,
    getOrganisationsAttachments
}