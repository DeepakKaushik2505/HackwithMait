import React from 'react';
import carousel3 from '../img/carousel3.jpg'

const Header = () => {
  return (
    <header className="bg-blue-50 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            Your Job, Our Mission: <span className="text-blue-600">Rozgari</span> at Your Service
          </h1>
          <p className="mt-4 text-gray-600">
            Whether you're seeking a new position or looking to advance in your field, Rozgari is here to help you find the right job and build a successful career.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded">Get Started</button>
        </div>
        <div>
          {/* Image placeholder */}
          <img src={carousel3} alt="Construction Workers" />
        </div>
      </div>
    </header>
  );
};

export default Header;
