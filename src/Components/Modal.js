import React from 'react';

const Modal = ({ isOpen, onClose, onApplyTopRated }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-6 rounded shadow-lg z-10">
        <h2 className="text-xl mb-4">Filter Options</h2>
        <button
          className="p-2 mb-4 w-full bg-blue-500 text-white rounded"
          onClick={onApplyTopRated}
        >
          Top Rated Restaurants
        </button>
        <button
          className="p-2 w-full bg-gray-300 text-black rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
