const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, enum: ['organization', 'student', 'admin', 'guest'], default: 'guest', required: true },
  fullName: {type: String},
  phone: {type: String},
  location: {
    street: {type: String},
    city: {type: String},
    country: {type: String},
    coordinates: {
      longtitude: {type: Number},
      latitude: {type: Number}
    }
  },
  bio: {type: String},
  // Organization-specific fields
  organizationName: {type: String},
  industryType: {type: String},
  organizationSize: {type: String},
  website: {type: String},
  // Attachments posted by an organization
  attachments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attachment' }],
  // Student-specific fields
  educationBackground: {
    institution: {type: String},
    degree: {type: String},
    fieldOfStudy: {type: String},
    startDate: {type: String},
    endDate: {type: String},
    additionalInfo: {type: String}
  },
  skills: [{type: String}], // Array to store skills of the student
  keywords: [{ type: String }],
  interests: [{ type: String }],
  preferences: [{ type: String }],
  radius: [{ type: Number, default: 300 }],
  availability: {
    start: { type: Date },
    end: { type: Date },
  },
  // Applications made by a student
  applications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Application' }]
  // Other user-related fields can be added here
});

const User = mongoose.model('User', userSchema);

module.exports = User;
