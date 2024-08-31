import React, { useState } from "react";
import { FileText, MapPin, Share, Megaphone, Calendar } from "lucide-react"; // Importing the Calendar icon for Timeline
import Sidebar from "../Sidebar";
import DataShare from "./DataShare";
import ProjectInfo from "./ProjectInfo";
import ProjectLocation from "./ProjectLocation";
import ProjectAnnouncements from "./ProjectAnnouncements";
import Timeline from "./Timeline";

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("projectInfo");

  const renderContent = () => {
    switch (activeTab) {
      case "projectInfo":
        return <ProjectInfo />;
      case "projectLocation":
        return <ProjectLocation />;
      case "timeline":
        return <Timeline />;
      case "dataShare":
        return <DataShare />;
      case "projectAnnouncements":
        return <ProjectAnnouncements />;
      default:
        return <ProjectInfo />;
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="ml-0 sm:ml-60 p-4 pt-16">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-800 dark:text-gray-600 border-b border-gray-200 dark:border-gray-200">
          {/* Project Info Tab */}
          <li className="me-2">
            <button
              onClick={() => setActiveTab("projectInfo")}
              className={`inline-flex items-center justify-center p-4 border-b-2 ${
                activeTab === "projectInfo"
                  ? "text-blue-800 border-blue-800"
                  : "border-transparent hover:text-gray-600 hover:border-gray-400 dark:hover:text-gray-400"
              } rounded-t-lg group`}
            >
              <FileText
                className={`w-5 h-5 me-2 ${
                  activeTab === "projectInfo"
                    ? "text-blue-800"
                    : "text-gray-800 group-hover:text-gray-600 dark:text-gray-600 dark:group-hover:text-gray-400"
                }`}
              />
              Project Info
            </button>
          </li>

          {/* Project Location Tab */}
          <li className="me-2">
            <button
              onClick={() => setActiveTab("projectLocation")}
              className={`inline-flex items-center justify-center p-4 border-b-2 ${
                activeTab === "projectLocation"
                  ? "text-blue-800 border-blue-800"
                  : "border-transparent hover:text-gray-600 hover:border-gray-400 dark:hover:text-gray-400"
              } rounded-t-lg group`}
            >
              <MapPin
                className={`w-5 h-5 me-2 ${
                  activeTab === "projectLocation"
                    ? "text-blue-800"
                    : "text-gray-800 group-hover:text-gray-600 dark:text-gray-600 dark:group-hover:text-gray-400"
                }`}
              />
              Project Location
            </button>
          </li>

          {/* Data Share Tab */}
          <li className="me-2">
            <button
              onClick={() => setActiveTab("dataShare")}
              className={`inline-flex items-center justify-center p-4 border-b-2 ${
                activeTab === "dataShare"
                  ? "text-blue-800 border-blue-800"
                  : "border-transparent hover:text-gray-600 hover:border-gray-400 dark:hover:text-gray-400"
              } rounded-t-lg group`}
              aria-current="page"
            >
              <Share
                className={`w-5 h-5 me-2 ${
                  activeTab === "dataShare"
                    ? "text-blue-800"
                    : "text-gray-800 group-hover:text-gray-600 dark:text-gray-600 dark:group-hover:text-gray-400"
                }`}
              />
              Data Share
            </button>
          </li>

          {/* Project Announcements Tab */}
          <li className="me-2">
            <button
              onClick={() => setActiveTab("projectAnnouncements")}
              className={`inline-flex items-center justify-center p-4 border-b-2 ${
                activeTab === "projectAnnouncements"
                  ? "text-blue-800 border-blue-800"
                  : "border-transparent hover:text-gray-600 hover:border-gray-400 dark:hover:text-gray-400"
              } rounded-t-lg group`}
            >
              <Megaphone
                className={`w-5 h-5 me-2 ${
                  activeTab === "projectAnnouncements"
                    ? "text-blue-800"
                    : "text-gray-800 group-hover:text-gray-600 dark:text-gray-600 dark:group-hover:text-gray-400"
                }`}
              />
              Project Announcements
            </button>
          </li>

          {/* Timeline Tab */}
          <li className="me-2">
            <button
              onClick={() => setActiveTab("timeline")}
              className={`inline-flex items-center justify-center p-4 border-b-2 ${
                activeTab === "timeline"
                  ? "text-blue-800 border-blue-800"
                  : "border-transparent hover:text-gray-600 hover:border-gray-400 dark:hover:text-gray-400"
              } rounded-t-lg group`}
            >
              <Calendar
                className={`w-5 h-5 me-2 ${
                  activeTab === "timeline"
                    ? "text-blue-800"
                    : "text-gray-800 group-hover:text-gray-600 dark:text-gray-600 dark:group-hover:text-gray-400"
                }`}
              />
              Timeline
            </button>
          </li>
        </ul>

        <div className="mt-4">{renderContent()}</div>
      </div>
    </div>
  );
};

export default TabNavigation;
