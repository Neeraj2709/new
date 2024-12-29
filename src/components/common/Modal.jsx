import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    isOpen && (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full p-6">
            {children}
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
