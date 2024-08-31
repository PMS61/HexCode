import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import projectContext from "../../../Context/projectContext";

const ProjectInfo = () => {
  const { projectId } = useParams();
  const context = useContext(projectContext);
  const { projects } = context;

  const [project, setProject] = useState(null);

  useEffect(() => {
    const selectedProject = projects.find((proj) => proj.projectId === projectId);
    setProject(selectedProject);
  }, [projectId, projects]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-background rounded-lg border relative z-10 p-6">
        <header className="border-b pb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">{project.projectName}</h1>
              <p className="text-muted-foreground">{project.briefDescription}</p>
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
        <section className="mt-8">
          <h2 className="text-xl font-bold">Project Goals</h2>
          <p className="text-muted-foreground">{project.keyMilestones}</p>
        </section>
      </div>
    </div>
  );
};

export default ProjectInfo;
