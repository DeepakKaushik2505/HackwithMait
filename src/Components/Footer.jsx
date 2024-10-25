import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About Us */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              Rozgari is a platform that connects job seekers with the right opportunities, offering guidance and support every step of the way.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-white">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-white">Jobs</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-white">Services</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-300 hover:text-white">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter Subscription */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-300 mb-4">Stay updated with the latest job postings and career advice.</p>
            <form>
              <input
                type="email"
                className="w-full px-4 py-2 mb-4 text-black rounded focus:outline-none"
                placeholder="Enter your email"
              />
              <button className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-600">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="my-8 border-t border-gray-600"></div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-white hover:text-gray-400">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Footer Bottom Text */}
        <div className="text-center text-gray-400 mt-8">
          &copy; 2024 Rozzgari. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
