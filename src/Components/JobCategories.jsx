import React from 'react';
import electrician from '../img/electrician.png'
import gardener from '../img/gardener.png'
import guard from '../img/guard.png'
import maid from '../img/maid.png'
import plumber from '../img/plumber.png'
import carpenter from '../img/carpenter.png'
import cashier from '../img/cashier.png'
import workers from '../img/workers.png'

const JobCategories = () => {
  const categories = [
    { name: 'Electrician', image: electrician },
    { name: 'Gardener', image: gardener },
    { name: 'Security Guard', image: guard },
    { name: 'Maid', image: maid },
    { name: 'Plumber', image: plumber },
    { name: 'Carpenter', image: carpenter },
    { name: 'Cashier', image: cashier },
    { name: 'Construction Workers', image: workers },
        // Add other categories
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Look for job openings</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-10">
          {categories.map((category, index) => (
            <div key={index} className="text-center bg-gray-100 p-6 rounded shadow">
              <img src={category.image} alt={category.name} className="w-16 h-16 mx-auto mb-4"/>
              <h3 className="text-lg font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;
