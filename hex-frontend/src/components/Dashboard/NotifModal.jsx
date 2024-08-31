import React from 'react';

const NotificationsModal = ({ isOpen, onClose, notifications }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96">
        <div className="px-4 py-2 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Notifications</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        <div className="p-4 max-h-96 overflow-y-auto">
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <div key={index} className="mb-4 border-b border-gray-200 pb-2">
                <p>{notification.message}</p>
                <small className="text-gray-500">{notification.date}</small>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No new notifications.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationsModal;
