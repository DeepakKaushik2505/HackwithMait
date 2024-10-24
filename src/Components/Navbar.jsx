import React from 'react';
// Import the logo image
import logo from '../img/logo.png'; // Replace 'logo.png' with the actual image name

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 fixed top-4 left-0 w-full z-50">

      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Company logo image */}
          <img src={logo} alt="Rozgari Logo" className="w-10 h-10 mr-2" />
          <div className="text-2xl font-bold text-blue-600">
            ROZGARI
          </div>
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
