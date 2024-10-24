import React from 'react';
import callUs from '../img/callUs.jpg'

const ContactUs = () => {
  return (
    <section id="contact" className="py-16 bg-blue-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Contact With Our Certified Agent</h2>
        <p className="mt-4 text-gray-600">Get in touch to find the best job fit for you.</p>
        <div className="mt-8">
          {/* Image placeholder */}
          <img src={callUs} alt="Contact Agent" className="w-40 h-40 mx-auto mb-6" />
          <button className="bg-blue-600 text-white px-6 py-2 rounded mr-4">Make A Call</button>
          <button className="bg-gray-600 text-white px-6 py-2 rounded">Get Appointment</button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
