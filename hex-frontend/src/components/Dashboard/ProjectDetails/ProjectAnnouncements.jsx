import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';  // Import useParams from react-router-dom
import projectContext from '../../../Context/projectContext';

const ProjectAnnouncements = () => {
  const [header, setHeader] = useState(''); // State for announcement header
  const [content, setContent] = useState('');
  const context = useContext(projectContext);
  const { projects, getAllProjects } = context;
  const [announcements, setAnnouncements] = useState([]);
  const apiUrl = process.env.EXPRESS_API_URL
  const { projectId } = useParams(); // Use useParams to get the project ID from the URL

  // useEffect to fetch all projects
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
        window.location.href = '/login';
      }
    };

    fetchProjects();
  }, []); // Dependency array is empty to avoid infinite loop

  // useEffect to fetch announcements for a specific project
  useEffect(() => {
    const fetchAnnouncements = async () => {
      if (localStorage.getItem('authToken')) {
        try {
          const response = await fetch(`${apiUrl}/api/announcements/${_id}/fetchAll`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('authToken'),  // Include the auth token in headers
            },
          });

          if (response.ok) {
            const data = await response.json();
            setAnnouncements(data);
          } else {
            console.error('Failed to fetch announcements');
          }
        } catch (error) {
          console.error('Error fetching announcements:', error);
        }
      }
    };

    fetchAnnouncements();
  }, [projectId]); // Only run when projectId changes

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (localStorage.getItem('authToken')) {
      try {
        const response = await fetch(`${apiUrl}/api/announcements/${projectId}/add`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('authToken'),  // Include the auth token in headers
          },
          body: JSON.stringify({
            header: header,  // Pass the header from state
            content: content,
          }),
        });

        if (response.ok) {
          const newAnnouncement = await response.json();
          setAnnouncements([newAnnouncement, ...announcements]);
          setHeader(''); // Reset the header field after submission
          setContent(''); // Reset the content field after submission
        } else {
          console.error('Failed to create announcement');
        }
      } catch (error) {
        console.error('Error creating announcement:', error);
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <main className="flex-1 p-8 bg-white min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Announcements for Project {projectId}</h1>
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-4">
            <label htmlFor="header" className="block text-sm font-medium text-gray-700">
              Announcement Header
            </label>
            <input
              id="header"
              name="header"
              type="text"
              value={header}
              onChange={(e) => setHeader(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter announcement header"
            />
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
              placeholder="Enter announcement content"
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
              {/* Add header in bold */}
              <p className="text-lg font-bold text-gray-700">{announcement.header}</p>
              <p className="text-sm text-gray-500">
                <strong>User</strong> posted at {new Date(announcement.createdAt).toLocaleString()}
              </p>
              <p className="mt-2">{announcement.content}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default ProjectAnnouncements;
