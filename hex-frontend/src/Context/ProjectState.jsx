import React, { useState } from "react";
import ProjectContext from "./projectContext";


const ProjectState = (props) => {
    const host = 'https://hexcode-zfv6.onrender.com';
    let projectsInitial = [];

    const [projects, setProjects] = useState(projectsInitial);

    // Fetch all projects
    const getAllProjects = async () => {
        let url = `${host}/api/projects/fetchAllProjects`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('authToken')
            }
        });
        let json = await response.json();
        setProjects(json);
        console.log(json)
    };

    // Fetch a specific project by ID
    const getProjectById = async (id) => {
        let url = `${host}/api/projects/fetchProject/${id}`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        });
        let json = await response.json();
        return json; // Returning the specific project
    };

    // Add a new project
    const addProject = async (project,onSuccess) => {
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
        } = project;
        
        let url = `${host}/api/projects/addProject`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({
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
            })
        });

        const json = await response.json();
        setProjects([...projects, json]); // Adding the new project to state
        if (onSuccess) {
            onSuccess(); // Call the success callback
        }
    };

    // Update a project
    const updateProject = async (project) => {
        const { 
            id, 
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
        } = project;

        let url = `${host}/api/projects/updateProject/${id}`;
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({
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
            })
        });

        const json = await response.json();
        const updatedProjects = projects.map(proj => proj._id === id ? json : proj);
        setProjects(updatedProjects); // Updating state with the modified project
    };

    // Delete a project
    const deleteProject = async (id) => {
        let url = `${host}/api/projects/deleteProject/${id}`;
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        });

        await response.json();
        const newProjects = projects.filter(project => project._id !== id);
        setProjects(newProjects); // Removing the deleted project from state
    };

    return (
        <ProjectContext.Provider value={{
            projects,
            setProjects,
            getAllProjects,
            getProjectById,
            addProject,
            updateProject,
            deleteProject
        }}>
            {props.children}
        </ProjectContext.Provider>
    );
};

export default ProjectState;
