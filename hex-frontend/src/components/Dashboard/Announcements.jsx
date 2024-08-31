import React, { useState } from 'react';
import projectContext from '../../Context/projectContext';
import { useContext } from 'react';
import { useEffect } from 'react';
const Announcements = () => {
  const [selectedProject, setSelectedProject] = useState('');
  const [content, setContent] = useState('');
  const context = useContext(projectContext);
  const {projects,getAllProjects} = context;
  const [announcements, setAnnouncements] = useState([]);


  useEffect(() => {
    const fetchProjects = async () => {
      if (localStorage.getItem('authToken')) {
        try {
          await getAllProjects();
        } catch (error) {
          console.error('Error fetching projects:', error);
        }
      } else {
        // Redirect to login if no auth token
        // Adjust the redirection logic if needed
        window.location.href = '/login';
      }
    };

    fetchProjects();
  }, [getAllProjects]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAnnouncement = {
      user: 'Current User', // Replace with the logged-in user's name
      projectName: selectedProject,
      time: new Date().toLocaleString(),
      content: content,
    };
    setAnnouncements([newAnnouncement, ...announcements]);
    setSelectedProject('');
    setContent('');
  };

  return (
    <div className="bg-white min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Announcements</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label htmlFor="project" className="block text-sm font-medium text-gray-700">
            Select Project
          </label>
          <select
            id="project"
            name="project"
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">--Select a Project--</option>
            {projects.length > 0 ? (
              projects.map((project) => (
                <option key={project.projectId} value={project.projectName}>
                  {project.projectName}
                </option>
              ))
            ) : (
              <option value="" disabled>No projects available</option>
            )}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Announcement Content
          </label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows="4"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit Announcement
        </button>
      </form>

      <h2 className="text-xl font-bold mb-4">Previous Announcements</h2>
      <ul className="space-y-4">
        {announcements.map((announcement, index) => (
          <li key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500">
              <strong>{announcement.user}</strong> posted in <strong>{announcement.projectName}</strong> at {announcement.time}
            </p>
            <p className="mt-2">{announcement.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Announcements;
