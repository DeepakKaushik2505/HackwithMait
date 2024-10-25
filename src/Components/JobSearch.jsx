import React from 'react';

const JobSearch = () => {
  return (
    <div className="bg-blue-600 py-10 shadow-lg rounded-lg mx-4 mt-10">
      <div className="container mx-auto flex justify-center space-x-4">
        {/* Input for Search Jobs */}
        <input
          type="text"
          className="w-full max-w-xs p-2 rounded-l border border-gray-300"
          placeholder="Search Jobs"
        />
        
        {/* Dropdown for Job Type */}
        <select className="p-2 border border-gray-300 rounded">
          <option value="">Job Type</option>
        </select>
        
        {/* Input for Location */}
        <input
          type="text"
          className="w-full max-w-xs p-2 rounded-r border border-gray-300"
          placeholder="Location"
        />
        
        {/* Search Button */}
        <button className="bg-blue-700 text-white p-2 px-4 rounded">
          Search
        </button>
      </div>
    </div>
  );
};

export default JobSearch;
