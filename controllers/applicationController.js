const Application = require('../models/Application');

async function getAllApplications(req, res){
    try {
        const applications = await Application.find();
        res.status(200).json(applications);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

async function createApplication(req, res){
    const applicationData = req.body;

    try {
        const newApplication = new Application(applicationData);
        const savedApplication = await newApplication.save();

        res.status(201).json(savedApplication);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

async function getApplication(req, res){
    const applicationID = req.params.id;

    try {
        const application = await Application.findById(applicationID);

        if (!application) {
            return res.status(404).send('Application not found');
        }

        res.status(200).json(application);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

async function updateApplication(req, res){
    const applicationID = req.params.id;
    const updatedApplicationData = req.body;

    try {
        const application = await Application.findById(applicationID);

        if (!application) {
            return res.status(404).send('Application not found');
        }

        // Update application fields with new data
        Object.assign(application, updatedApplicationData);

        // Save the updated application
        const updatedApplication = await application.save();

        res.status(200).json(updatedApplication);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

async function deleteApplication(req, res){
    const applicationID = req.params.id;

    try {
        const application = await Application.findById(applicationID);

        if (!application) {
            return res.status(404).send('Application not found');
        }

        // Remove the application from the database
        await application.deleteOne();

        res.json({ message: 'Application deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

async function getAttachmentsApplications(req, res){
    const attachmentID = req.params.id;

    try {
        //const applications = await Application.find({ attachmentID });
        const applications = await Application.find({ attachment: attachmentID });
        res.status(200).json(applications);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

async function getStudentsApplications(req, res){
    const studentID = req.params.id;

    try {
        //const applications = await Application.find({ studentID });
        const applications = await Application.find({ student: studentID });
        res.status(200).json(applications);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    getAllApplications,
    createApplication,
    getApplication,
    updateApplication,
    deleteApplication,
    getAttachmentsApplications,
    getStudentsApplications
}