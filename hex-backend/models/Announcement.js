const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Announcement schema
const announcementSchema = new Schema({
  projectID: {
    type: Schema.Types.ObjectId,
    ref: 'Project',   // annoucement is associated with a project
    required: true
  },
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User', // announcement is created by a user and associated to it
    required: true
  },
  header: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create the Announcement model
const Announcement = mongoose.model('Announcement', announcementSchema);

module.exports = Announcement;
