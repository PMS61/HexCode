import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import projectContext from '../../Context/projectContext';
import Map from './Map';

const Dashboard = () => {
  const context = useContext(projectContext);
  const { projects, setProjects, getAllProjects } = context;
  const [mapMarkers, setMapMarkers] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      getAllProjects();
    } else {
      navigate('/login');
    }
  }, []);

  useEffect(() => {
    // Transform the projects data into map marker format
    const markers = projects.map(project => ({
        name: project.projectName,
        latitude: project.locationInfo.latitude,
        longitude: project.locationInfo.longitude,
        area: project.locationInfo.affectedArea // Add affectedArea as radius in meters
    }));
    setMapMarkers(markers);
  }, [projects]);

  const getStatusDotColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500';
      case 'In Progress':
        return 'bg-yellow-500';
      case 'Not Started':
        return 'bg-gray-300';
    }
  };

  const handleRowClick = (projectId) => {
    navigate(`/projectdetails/${projectId}`);
  };

  const getProjectStatus = (project) => {
    const currentDate = new Date();
    const proposedStartDate = new Date(project.proposedStartDate);
    const estimatedCompletionDate = new Date(project.estimatedCompletionDate);

    if (currentDate < proposedStartDate) {
      return 'Not Started';
    } else if (currentDate > estimatedCompletionDate) {
      return 'Completed';
    } else {
      return 'In Progress';
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Sidebar />

      <main className="ml-0 sm:ml-64 p-4 pt-24">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-2 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm">Project Name</th>
                <th scope="col" className="px-2 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm">Category</th>
                <th scope="col" className="px-2 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm">Location</th>
                <th scope="col" className="px-2 sm:px-6 py-2 sm:py-3 hidden sm:table-cell text-xs sm:text-sm">Status</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => {
                const status = getProjectStatus(project);
                return (
                  <tr key={index} 
                  onClick={() => handleRowClick(project.projectId)}
                  className="bg-white border-b hover:bg-gray-100" >
                    <td className="px-2 sm:px-6 py-2 sm:py-4 flex items-center text-xs sm:text-sm">
                      <span className={`w-3 h-3 rounded-full ${getStatusDotColor(status)} sm:hidden me-2`}></span>
                      {project.projectName}
                    </td>
                    <td className="px-2 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm">{project.projectType}</td>
                    <td className="px-2 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm">{project.projectId}</td>
                    <td className="px-2 sm:px-6 py-2 sm:py-4 hidden sm:table-cell text-xs sm:text-sm">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          status === 'Completed' ? 'bg-green-100 text-green-800' :
                          status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="relative shadow-md sm:rounded-lg mt-6 w-full -z-0">
          <Map markers={mapMarkers} zoomLevel={12} width="100%" height="60vh" />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
