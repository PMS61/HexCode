import React, { useState } from "react";
import { Menu, Grid, PieChart } from "lucide-react";
import Map from "./Map";

const ProjectDetails = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleProfile = () => setProfileOpen(!profileOpen);

  // Dummy data for ongoing projects
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
      departements: ["BMC", "MCGM", "PWD"],
      poc: "John Doe",
      wardno: "12",
      address: "New York",
      latitude: 40.7128,
      longitude: -74.006,
      area: "Mulund",
      keymilestones: [" Design approval", "Construction", "Completion"],
    },
  ];

  // Header rendering function
  const renderHeader = () => (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              onClick={toggleSidebar}
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span className="sr-only">Open sidebar</span>
              <Menu className="w-6 h-6" />
            </button>
            <a href="" className="flex ms-2 md:me-24">
              <img src="" className="h-8 me-3" alt="" />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">
                HexCode
              </span>
            </a>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ms-3">
              <div>
                <button
                  onClick={toggleProfile}
                  type="button"
                  className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300"
                  aria-expanded={profileOpen}
                  aria-controls="dropdown-user"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src=""
                    alt="user photo"
                  />
                </button>
                {profileOpen && renderProfileMenu()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );

  // Profile menu rendering function
  const renderProfileMenu = () => (
    <div
      className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform translate-y-1"
      id="dropdown-user"
    >
      <div className="px-4 py-3">
        <p className="text-sm text-gray-900">PMS</p>
        <p className="text-sm font-medium text-gray-900 truncate">pms</p>
      </div>
      <ul className="py-1">
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Settings
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Earnings
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );

  // Sidebar rendering function
  const renderSidebar = () => (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } sm:translate-x-0`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <Grid className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
              <span className="ms-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <PieChart className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
              <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
              <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                3
              </span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );

  const renderProjectDetails = () => (
    <div className="bg-background rounded-lg border ml-0 sm:ml-64 p-4 pt-24">
      <header className="p-6 border-b">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">{projects[0].name}</h1>
            <p className="text-muted-foreground">
                {projects[0].description}
            </p>
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
          <p> Project ID: {projects[0].id} <br />
            Departments: {projects[0].departements.join(", ")} <br />
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
          <p className="text-muted-foreground">Ward No: {projects[0].wardno}
            <br/> Address: {projects[0].address}
            <br /> Area : {projects[0].area}
            </p>
            <Map latitude={projects[0].latitude} longitude={projects[0].longitude} zoomLevel={12} />
          </div>
        </section>
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      {renderHeader()}
      {renderSidebar()}
      {renderProjectDetails()}
    </div>
  );
};

export default ProjectDetails;
