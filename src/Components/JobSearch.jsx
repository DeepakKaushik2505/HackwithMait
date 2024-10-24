import React from 'react';

const JobSearch = () => {
  return (
    <div className="bg-blue-600 py-10">
      <div className="container mx-auto flex justify-center">
        <input
          type="text"
          className="w-full max-w-xs p-2 rounded-l"
          placeholder="Search Jobs"
        />
        <select className="p-2 rounded-l border-none">
          <option value="">Job Type</option>
        </select>
        <input
          type="text"
          className="w-full max-w-xs p-2 rounded-r"
          placeholder="Location"
        />
        <button className="bg-blue-700 text-white p-2 px-4 rounded">Search</button>
      </div>
    </div>
  );
};

export default JobSearch;
