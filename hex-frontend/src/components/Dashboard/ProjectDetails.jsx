import React from "react";
import { Menu, Grid, PieChart } from "lucide-react";
import Map from "./Map";
import Sidebar from "./Sidebar";

const ProjectDetails = () => {
  // Dummy data for an ongoing project
  const projects = [
    {
      name: "Project Bridge",
      id: "ae4d",
      description: "Redesign and rebuild the bridge",
      startDate: "Jan 1, 2024",
      endDate: "Mar 31, 2024",
      type: "Construction",
      objectives: [
        "Good quality construction",
        "Ensure safety",
        "On-time delivery",
        "Within budget",
      ],
      departments: ["BMC", "MCGM", "PWD"],
      poc: "John Doe",
      wardno: "12",
      address: "New York",
      latitude: 40.7128,
      longitude: -74.006,
      area: "City Hall",
      keymilestones: ["Design approval", "Construction", "Completion"],
    },
  ];

  const renderProjectDetails = () => (
    <div className="bg-background rounded-lg border ml-0 sm:ml-64 p-4 pt-24">
      <header className="p-6 border-b">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">{projects[0].name}</h1>
            <p className="text-muted-foreground">{projects[0].description}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end">
              <p className="text-sm text-muted-foreground">Start Date</p>
              <p className="font-medium">{projects[0].startDate}</p>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-sm text-muted-foreground">End Date</p>
              <p className="font-medium">{projects[0].endDate}</p>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-sm text-muted-foreground">Project Type</p>
              <p className="font-medium">{projects[0].type}</p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-4">
          <p>
            Project ID: {projects[0].id} <br />
            Departments: {projects[0].departments.join(", ")} <br />
            Project Manager: {projects[0].poc}
          </p>
        </div>
      </header>
      <div className="p-6 grid gap-8">
        <section>
          <h2 className="text-xl font-bold">Project Goals</h2>
          <p className="text-muted-foreground">
            {projects[0].keymilestones.join("  =>  ")}
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold">Objectives</h2>
          <ul className="list-disc pl-6 space-y-2">
            {projects[0].objectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold">Location</h2>
          <div className="aspect-[4/3] w-full">
            <p className="text-muted-foreground">
              Ward No: {projects[0].wardno}
              <br /> Address: {projects[0].address}
              <br /> Area: {projects[0].area}
            </p>
            <Map
              latitude={projects[0].latitude}
              longitude={projects[0].longitude}
              locationName={projects[0].area}
              zoomLevel={16}
              width="80%"
              height="60vh"
            />
          </div>
        </section>
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      <Sidebar />
      {renderProjectDetails()}
    </div>
  );
};

export default ProjectDetails;
