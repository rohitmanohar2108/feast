import React from 'react';

const Shimmer = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array(8).fill("").map((_, index) => (
          <div key={index} className="shimmer-card p-4 cursor-pointer">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-xl">
              <div className="relative bg-gray-300 h-40 rounded-t-lg animate-pulse"></div>
              <div className="p-4">
                <div className="bg-gray-300 h-6 mb-2 rounded animate-pulse"></div>
                <div className="bg-gray-300 h-6 mb-2 rounded animate-pulse"></div>
                <div className="flex justify-between items-center text-xs mt-2">
                  <div className="bg-gray-300 h-4 w-20 rounded animate-pulse"></div>
                  <div className="bg-gray-300 h-4 w-10 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
