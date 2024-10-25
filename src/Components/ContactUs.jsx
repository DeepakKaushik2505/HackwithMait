import React from 'react';
import callUs from '../img/callUs.jpg';

const ContactUs = () => {
  return (
    <section id="contact" className="py-16 bg-blue-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Image in the center */}
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
            <img src={callUs} alt="Contact Agent" className="w-60 h-60 object-cover rounded-lg shadow-lg" />
          </div>

          {/* Text and Buttons in the center */}
          <div className="text-center">
            <h2 className="text-3xl font-bold">Contact With Our Certified Agent</h2>
            <p className="mt-4 text-gray-600">Get in touch to find the best job fit for you.</p>
            <div className="mt-8">
              <button className="bg-blue-600 text-white px-6 py-2 rounded mr-4">Make A Call</button>
              <button className="bg-gray-600 text-white px-6 py-2 rounded">Get Appointment</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
