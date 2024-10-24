import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          ROZGARI
        </div>
        <div className="flex space-x-8">
          <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#jobs" className="text-gray-700 hover:text-blue-600">Jobs</a>
          <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
