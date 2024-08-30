import React, { useState } from 'react';
import { Menu, Grid, PieChart } from 'lucide-react';
import axios from 'axios';
import Sidebar from './Sidebar';

const Dashboard = () => {
  
  

  // Dummy data for ongoing projects
  const projects = [
    { name: 'Project Alpha', category: 'Software', location: 'New York', status: 'In Progress' },
    { name: 'Project Beta', category: 'Infra', location: 'San Francisco', status: 'Completed' },
    { name: 'Project Gamma', category: 'Software', location: 'Chicago', status: 'Pending' },
    { name: 'Project Delta', category: 'Consulting', location: 'Austin', status: 'In Progress' },
    { name: 'Project Epsilon', category: 'Software', location: 'Seattle', status: 'Not Started' },
    { name: 'Project Zeta', category: 'Software', location: 'Los Angeles', status: 'In Progress' },
    // Add more projects if needed to test the scrolling functionality
  ];

  // Function to determine the color of the status dot
  const getStatusDotColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500';
      case 'In Progress':
        return 'bg-yellow-500';
      case 'Pending':
        return 'bg-gray-500';
      case 'Not Started':
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className="bg-white min-h-screen">
      

<Sidebar />
    

      <main className="ml-0 sm:ml-64 p-4 pt-24">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-h-[300px] overflow-y-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 sticky top-0">
              <tr>
                <th scope="col" className="px-6 py-3">Project Name</th>
                <th scope="col" className="px-6 py-3">Category</th>
                <th scope="col" className="px-6 py-3">Location</th>
                <th scope="col" className="px-6 py-3 hidden sm:table-cell">Status</th> {/* Hidden on mobile */}
              </tr>
            </thead>
            <tbody>
  {projects.map((project, index) => (
    <tr 
      key={index} 
      className="bg-white border-b hover:bg-gray-100" // Add hover:bg-gray-100
    >
      <td className="px-6 py-4 flex items-center">
        <span className={`w-3 h-3 rounded-full ${getStatusDotColor(project.status)} sm:hidden me-2`}></span>
        {project.name}
      </td>
      <td className="px-6 py-4">{project.category}</td>
      <td className="px-6 py-4">{project.location}</td>
      <td className="px-6 py-4 hidden sm:table-cell">
        <span
          className={`px-2 py-1 text-xs font-semibold rounded-full ${
            project.status === 'Completed' ? 'bg-green-100 text-green-800' :
            project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
            project.status === 'Pending' ? 'bg-orange-100 text-orange-800' :
            'bg-gray-100 text-gray-800'
          }`}
        >
          {project.status}
        </span>
      </td>
    </tr>
  ))}
</tbody>

          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
