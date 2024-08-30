import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import projectContext from "../../Context/projectContext";
import MapNew from "./MapNew";

const ProjectDetails = () => {
  const { projectId } = useParams(); // Extract projectId from the URL
  const context = useContext(projectContext); // Access context
  const { projects } = context;

  const [project, setProject] = useState(null); // Local state to hold the selected project

  useEffect(() => {
    // Find the project with the matching projectId
    const selectedProject = projects.find(
      (proj) => proj.projectId === projectId
    );
    setProject(selectedProject); // Set the project in state
  }, [projectId, projects]);

  if (!project) {
    return <div>Loading...</div>; // Add proper loading or error handling
  }

  return (
    <div className="bg-white min-h-screen">
      <Sidebar />
      <div className="bg-background rounded-lg border ml-0 sm:ml-64 p-4 pt-24">
        <header className="p-6 border-b">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">{project.projectName}</h1>
              <p className="text-muted-foreground">
                {project.briefDescription}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end">
                <p className="text-sm text-muted-foreground">Start Date</p>
                <p className="font-medium">
                  {new Date(project.proposedStartDate).toLocaleDateString()}
                </p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-sm text-muted-foreground">End Date</p>
                <p className="font-medium">
                  {new Date(project.estimatedCompletionDate).toLocaleDateString()}
                </p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-sm text-muted-foreground">Project Type</p>
                <p className="font-medium">{project.projectType}</p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <p>
              Project ID: {project.projectId} <br />
              Departments: {project.primaryDepartment}
              {project.otherDepartments &&
                project.otherDepartments.length > 0 &&
                `, ${project.otherDepartments.join(", ")}`}{" "}
              <br />
              Project Manager: {project.projectManager}
            </p>
          </div>
        </header>
        <div className="p-6 grid gap-8">
          <section>
            <h2 className="text-xl font-bold">Project Goals</h2>
            <p className="text-muted-foreground">
              {project.keyMilestones}
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold">Location</h2>
            <div className="aspect-[4/3] w-full">
              <p className="text-muted-foreground">
                Ward No: {project.locationInfo.wardNo}
                <br /> Address: {project.locationInfo.specificAddress}
                <br /> Area: {project.locationInfo.affectedArea} sq. meters
              </p>
              <MapNew
                latitude={project.locationInfo.latitude}
                longitude={project.locationInfo.longitude}
                locationName={project.locationInfo.specificAddress}
                zoomLevel={16}
                width="80%"
                height="60vh"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
