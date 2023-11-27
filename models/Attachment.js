const mongoose = require('mongoose');

const attachmentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: {type: String},
    type: {type: String}, // Internship || Attachment
    duration: {
        start: { type: Date, required: true },
        end: { type: Date, required: true },
    },
    requiredSkills: [{type: String}],
    keywords: [{ type: String }],
    interests: [{ type: String }],
    responsibilities: [{type: String}],
    educationalRequirements: {
        level: {type: String},
        degree: {type: String},
        fieldOfStudy: {type: String}
    },
    experienceRequirements: {
        type: {type: String}, // Internship || Work experience
        duration: {type: String}
    },
    location: {
        isRemote: { type: Boolean, default: false },
        coordinates: {
            longtitude: {type: Number},
            latitude: {type: Number}
        },
        details: {type: String}
    },
    // Store reference to the organization that posted the attachment
    organization: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    deadline: { type: Date, required: true }
    // Other attachment-related fields can be added here
});

const Attachment = mongoose.model('Attachment', attachmentSchema);

module.exports = Attachment;