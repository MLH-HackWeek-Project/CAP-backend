const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    // Reference to the student
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
    // Reference to the attachment
    attachment: { type: mongoose.Schema.Types.ObjectId, ref: 'Attachment', required: true },
    submissionTimestamp: { type: Date, default: Date.now },
    feedback: {
        ratingByOrganization: {type: Number},
        ratingCommentsByOrganization: {type: String},
        ratingByStudent: {type: Number},
        ratingCommentsByStudent: {type: String},
    },
    interviewDetails: {
        date: {type: Date},
        time: {type: String},
        location: {
            isVirtual: { type: Boolean, default: false },
            details: {type: String},
        },
        interviewers: [{type: String}],
        moreInfo: {type: String}
    },
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;