import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between">
        <div>
          <h3 className="text-lg font-bold">Get In Touch</h3>
          <p>Delhi, INDIA</p>
          <p>Phone: +91 1234567890</p>
          <p>Email: bhumit9416@gmail.com</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Jobs</li>
            <li>Services</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
