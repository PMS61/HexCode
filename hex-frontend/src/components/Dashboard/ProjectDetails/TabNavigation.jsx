import React, { useState } from "react";
import Sidebar from "../Sidebar";
import DataShare from "./DataShare";
import ProjectInfo from "./ProjectInfo";
import ProjectLocation from "./ProjectLocation";

const TabNavigation = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("dataShare");

  // Function to render the content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "announcements":
        return <ProjectInfo />;
      case "projectDetails":
        return <ProjectLocation />;
      case "dataShare":
        return <DataShare />;
      default:
        return <ProjectInfo />;
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="ml-0 sm:ml-60 p-4 pt-16">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
          {/* Announcements Tab */}
          <li className="me-2">
            <button
              onClick={() => setActiveTab("announcements")}
              className={`inline-flex items-center justify-center p-4 border-b-2 ${
                activeTab === "announcements"
                  ? "text-blue-600 border-blue-600"
                  : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              } rounded-t-lg group`}
            >
              <svg
                className={`w-4 h-4 me-2 ${
                  activeTab === "announcements"
                    ? "text-blue-600"
                    : "text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              Project Info
            </button>
          </li>

          {/* Project Details Tab */}
          <li className="me-2">
            <button
              onClick={() => setActiveTab("projectDetails")}
              className={`inline-flex items-center justify-center p-4 border-b-2 ${
                activeTab === "projectDetails"
                  ? "text-blue-600 border-blue-600"
                  : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              } rounded-t-lg group`}
            >
              <svg
                className={`w-4 h-4 me-2 ${
                  activeTab === "projectDetails"
                    ? "text-blue-600"
                    : "text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
              </svg>
              Project Location
            </button>
          </li>

          <li className="me-2">
            <button
              onClick={() => setActiveTab("dataShare")}
              className={`inline-flex items-center justify-center p-4 border-b-2 ${
                activeTab === "dataShare"
                  ? "text-blue-600 border-blue-600"
                  : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              } rounded-t-lg group`}
              aria-current="page"
            >
              <svg
                className={`w-4 h-4 me-2 ${
                  activeTab === "dataShare"
                    ? "text-blue-600"
                    : "text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
              </svg>
              Data Share
            </button>
          </li>
        </ul>

        {/* Render the selected tab content */}
        <div className="mt-4">{renderContent()}</div>
      </div>
    </div>
  );
};

export default TabNavigation;
