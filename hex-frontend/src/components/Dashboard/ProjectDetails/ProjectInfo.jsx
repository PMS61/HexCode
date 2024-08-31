import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import projectContext from "../../../Context/projectContext";

const ProjectInfo = () => {
  const { projectId } = useParams();
  const context = useContext(projectContext);
  const { projects } = context;

  const [project, setProject] = useState(null);

  useEffect(() => {
    const selectedProject = projects.find(
      (proj) => proj.projectId === projectId
    );
    setProject(selectedProject);
  }, [projectId, projects]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white min-h-screen">
      <div className=" border-black rounded-lg border relative z-10 mx-4 my-2 pb-4">
        <h1 className="px-6 py-4 font-semibold">Basic Project Information</h1>
        <div className="w-full h-0.5 bg-black"></div>

        {/* <p className="px-6 py-4">{project.briefDescription}</p> */}
        <p className="px-6 py-4 font-light">
          The Barfiwala Flyover was constructed in 2008 by the Maharashtra State
          Road Development Corporation (MSRDC), originating from Juhu and
          connecting with the north-south arms of the old Gokhale Bridge, which
          has been in existence since 1960.
        </p>

        <h3 className="px-6 font-semibold">Project ID: {project.projectId}</h3>
        <h3 className="px-6 font-semibold">
          Departments: {project.primaryDepartment}
          {project.otherDepartments &&
            project.otherDepartments.length > 0 &&
            `, ${project.otherDepartments.join(", ")}`}{" "}
        </h3>
        <h3 className="px-6 font-semibold">
          Project Manager: {project.projectManager}
        </h3>
        <h3 className="px-6 font-semibold">
          Project Type: {project.projectType}
        </h3>

        
      </div>

      <div className="border-black bg-white rounded-lg border relative z-10 mx-4 my-2 mt-10">
        <h1 className="px-6 py-4 font-semibold">Project Goals and Deadlines</h1>
        <div className="w-full h-0.5 bg-black"></div>

        <p className="px-6 py-4 font-light">{project.keyMilestones}</p>
        <p className="px-6 font-semibold">
          Start Date: {new Date(project.proposedStartDate).toLocaleDateString()}
        </p>
        <p className="px-6 pb-4 font-semibold">
          End Date:{" "}
          {new Date(project.estimatedCompletionDate).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default ProjectInfo;
