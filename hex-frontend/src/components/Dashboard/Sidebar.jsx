import React, { useState } from 'react';
import { Menu, Grid, PieChart, Plus } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import MultiStepForm from '../Form/MultiStepForm';
import Modal from '../Form/Modal';

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
                <img src="src/assets/logo.png" alt="Logo" className="h-8 w-8" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">HexCode</span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                {/* User profile dropdown (omitted for brevity) */}
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
            <li>
              <button onClick={openModal} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                <Plus className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                <span className="ms-3">Add New Project</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>

      {/* Render the Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <MultiStepForm onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default Sidebar;
