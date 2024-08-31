const express = require('express');
const router = express.Router();
const fetchUser = require('../middleware/fetchUser');  // middleware to fetch user from JWT
const Announcement = require('../models/Announcement');  // importing the Announcement mongoDB model

// ROUTE 1: Fetch all announcements for a specific project GET: /api/announcements/:projectId/fetchAll Login Required
router.get('/:projectId/fetchAll', fetchUser, async (req, res) => {
    try {
        const { projectId } = req.params;
        const announcements = await Announcement.find({ projectID: projectId });
        res.json(announcements);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal error occurred" });
    }
});

// ROUTE 2: Create a new announcement for a project POST: /api/announcements/:projectId/add Login Required
router.post('/:projectId/add', fetchUser, async (req, res) => {
    const { header, content } = req.body;
    const { projectId } = req.params;

    try {
        const newAnnouncement = new Announcement({
            projectID: projectId,
            userID: req.user.id,  // Assuming the logged-in user is creating the announcement
            header,
            content,
        });

        const savedAnnouncement = await newAnnouncement.save();
        res.json(savedAnnouncement);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal error occurred" });
    }
});

// ROUTE 3: Update an existing announcement PUT: /api/announcements/:id/update Login Required
router.put('/:id/update', fetchUser, async (req, res) => {
    const { header, content } = req.body;

    try {
        // Find the announcement
        const announcement = await Announcement.findById(req.params.id);

        if (!announcement) {
            return res.status(404).json({ error: "Announcement not found" });
        }

        // Update the announcement fields
        announcement.header = header;
        announcement.content = content;

        const updatedAnnouncement = await announcement.save();
        res.json(updatedAnnouncement);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal error occurred" });
    }
});

// ROUTE 4: Delete an existing announcement DELETE: /api/announcements/:id/delete Login Required
router.delete('/:id/delete', fetchUser, async (req, res) => {
    try {
        const announcement = await Announcement.findById(req.params.id);

        if (!announcement) {
            return res.status(404).json({ error: "Announcement not found" });
        }

        // Allow only the creator to delete the announcement (optional)
        if (announcement.userID.toString() !== req.user.id) {
            return res.status(401).json({ error: "Not authorized to delete this announcement" });
        }

        // Delete the announcement
        await Announcement.findByIdAndDelete(req.params.id);

        res.json({ message: "Announcement deleted successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal error occurred" });
    }
});

// ROUTE 5: Fetch a specific announcement by ID GET: /api/announcements/:id Login Required
router.get('/:id', fetchUser, async (req, res) => {
    try {
        const announcement = await Announcement.findById(req.params.id);

        if (!announcement) {
            return res.status(404).json({ error: "Announcement not found" });
        }

        res.json(announcement);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal error occurred" });
    }
});

module.exports = router;
