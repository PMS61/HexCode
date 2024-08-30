const express = require('express');
const router = express.Router();
const fetchUser = require('../middleware/fetchUser');  // middleware to fetch user from JWT
const Project = require('../models/Project');  // importing the Project mongoDB model

// ROUTE 1: Fetch all projects for the logged-in user GET: /api/projects/fetchAllProjects Login Required
router.get('/fetchAllProjects', fetchUser, async (req, res) => {
    try {
        const projects = await Project.find({ userId: req.user.id });
        res.json(projects);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal error occurred" });
    }
});

// ROUTE 2: Create a new project POST: /api/projects/addProject Login Required
router.post('/addProject', fetchUser, async (req, res) => {
    const { 
        projectName, 
        projectId, 
        projectType, 
        briefDescription, 
        detailedProjectOverview, 
        primaryDepartment, 
        otherDepartments, 
        projectManager, 
        locationInfo, 
        proposedStartDate, 
        estimatedCompletionDate, 
        keyMilestones 
    } = req.body;

    try {
        const newProject = new Project({
            projectName,
            projectId,
            projectType,
            briefDescription,
            detailedProjectOverview,
            primaryDepartment,
            otherDepartments,
            projectManager,
            locationInfo,
            proposedStartDate,
            estimatedCompletionDate,
            keyMilestones,
            userId: req.user.id  // Assuming you want to associate projects with users
        });

        const savedProject = await newProject.save();
        res.json(savedProject);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal error occurred" });
    }
});

// ROUTE 3: Update an existing project PUT: /api/projects/updateProject/:id Login Required
router.put('/updateProject/:id', fetchUser, async (req, res) => {
    const { 
        projectName, 
        projectId, 
        projectType, 
        briefDescription, 
        detailedProjectOverview, 
        primaryDepartment, 
        otherDepartments, 
        projectManager, 
        locationInfo, 
        proposedStartDate, 
        estimatedCompletionDate, 
        keyMilestones 
    } = req.body;

    try {
        const updatedProjectData = {
            projectName,
            projectId,
            projectType,
            briefDescription,
            detailedProjectOverview,
            primaryDepartment,
            otherDepartments,
            projectManager,
            locationInfo,
            proposedStartDate,
            estimatedCompletionDate,
            keyMilestones
        };

        // Find and update the project
        const updatedProject = await Project.findByIdAndUpdate(
            req.params.id,
            { $set: updatedProjectData },
            { new: true }
        );

        if (!updatedProject) {
            return res.status(404).json({ error: "Project not found" });
        }

        // Verify user ownership
        if (updatedProject.userId.toString() !== req.user.id) {
            return res.status(401).json({ error: "Not authorized" });
        }

        res.json(updatedProject);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal error occurred" });
    }
});

// ROUTE 4: Delete an existing project DELETE: /api/projects/deleteProject/:id Login Required
router.delete('/deleteProject/:id', fetchUser, async (req, res) => {
    try {
        // Find the project to delete
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({ error: "Project not found" });
        }

        // Verify user ownership
        if (project.userId.toString() !== req.user.id) {
            return res.status(401).json({ error: "Not authorized" });
        }

        // Delete the project
        await Project.findByIdAndDelete(req.params.id);

        res.json({ message: "Project deleted successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal error occurred" });
    }
});

// ROUTE 5: Fetch a specific project by ID GET: /api/projects/fetchProject/:id Login Required
router.get('/fetchProject/:id', fetchUser, async (req, res) => {
    try {
        // Find the project by ID
        const project = await Project.findById(req.params.id);

        // Check if the project exists
        if (!project) {
            return res.status(404).json({ error: "Project not found" });
        }

        // Verify user ownership
        if (project.userId.toString() !== req.user.id) {
            return res.status(401).json({ error: "Not authorized" });
        }

        // Return the project details
        res.json(project);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal error occurred" });
    }
});


module.exports = router;
