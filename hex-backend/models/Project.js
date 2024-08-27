const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true,
    },
    projectId: {
        type: String,
        required: true,
        unique: true,
    },
    projectType: {
        type: String,
        required: true,
    },
    briefDescription: {
        type: String,
        required: true,
    },
    detailedProjectOverview: {
        type: String,
    },
    primaryDepartment: {
        type: String,
        required: true,
    },
    otherDepartments: {
        type: [String], // Array of strings to list multiple departments
    },
    projectManager: {
        type: String,
        required: true,
    },
    locationInfo: {
        wardNo: {
            type: String, // Changed to String
            required: true,
        },
        specificAddress: {
            type: String,
            required: true,
        },
        latitude: {
            type: Number,
            required: true,
        },
        longitude: {
            type: Number,
            required: true,
        },
        affectedArea: {
            type: Number, // Assuming area in square meters
            required: true,
        },
    },
    proposedStartDate: {
        type: Date,
        required: true,
    },
    estimatedCompletionDate: {
        type: Date,
        required: true,
    },
    keyMilestones: {
        type: String, // Single string to represent milestones and deadlines
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming you have a User model
        required: true,
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields automatically
});

module.exports = mongoose.model('Project', ProjectSchema);
