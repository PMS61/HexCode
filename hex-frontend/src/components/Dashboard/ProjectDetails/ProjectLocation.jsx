import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import projectContext from "../../../Context/projectContext";
import MapNew from "../MapNew";

const ProjectLocation = () => {
  const { projectId } = useParams();
  const context = useContext(projectContext);
  const { projects } = context;

  const [project, setProject] = useState(null);

  useEffect(() => {
    const selectedProject = projects.find((proj) => proj._id === projectId);
    setProject(selectedProject);
  }, [projectId, projects]);

  if (!project) {
    return <div>Loading...</div>;
  }

  const { locationInfo } = project;

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-white border-black rounded-lg border relative z-10 mx-4 p-4">
        <section>
          <h2 className="text-xl font-bold">Location</h2>
          <div className="aspect-[4/3] w-full relative z-0 mt-4">
            <p className="text-muted-foreground mb-6">
              Ward No: {locationInfo.wardNo}
              <br /> Address: {locationInfo.specificAddress}
              <br /> Area: {locationInfo.affectedArea} sq. meters
            </p>
            <MapNew
              latitude={locationInfo.latitude}
              longitude={locationInfo.longitude}
              locationName={locationInfo.specificAddress}
              zoomLevel={16}
              width="100%"
              height="60vh"
              className="relative z-0"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectLocation;
