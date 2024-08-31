import React, { useState } from 'react';
import { Menu, Grid, PieChart, Plus, Bell, User, LogOut } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import MultiStepForm from '../Form/MultiStepForm';
import Modal from '../Form/Modal';
import NotificationsModal from './NotifModal';

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false); // Correctly defined state
  const [notifications, setNotifications] = useState([
    { message: 'New comment on your post', date: '2024-08-31' },
    { message: 'Project deadline approaching', date: '2024-08-30' },
  ]);

  const navigate = useNavigate();
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleNotificationsModal = () => setIsNotificationsOpen(!isNotificationsOpen);

  const handleSignOut = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                <span className="sr-only">Open sidebar</span>
                <Menu className="w-6 h-6" />
              </button>
              <a href="/" className="flex ms-2 md:me-24">
                <img src="/assets/logo.png" alt="Logo" className="h-8 w-8" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">HexCode</span>
              </a>
            </div>
            <div className="flex items-center">
              <button onClick={toggleNotificationsModal} className="text-gray-500 hover:text-gray-700">
                <Bell className="w-6 h-6" />
              </button>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="ms-3 flex items-center p-2 text-gray-500 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                  <User className="w-6 h-6" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Profile
                    </a>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <LogOut className="inline w-4 h-4 mr-2" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <a href="/dashboard" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <Grid className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/queryforum" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <PieChart className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                <span className="flex-1 ms-3 whitespace-nowrap">Forum</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">3</span>
              </a>
            </li>
            {isDashboard && (
              <li>
                <button onClick={openModal} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                  <Plus className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="ms-3">Add New Project</span>
                </button>
              </li>
            )}
          </ul>
        </div>
      </aside>

      {/* Render the Modals */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <MultiStepForm onClose={closeModal} />
      </Modal>

      <NotificationsModal 
        isOpen={isNotificationsOpen} 
        onClose={toggleNotificationsModal} 
        notifications={notifications} 
      />
    </div>
  );
};

export default Sidebar;
