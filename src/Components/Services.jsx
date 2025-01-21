import React from 'react';

const Services = () => {
  return (
    <section className="p-8 bg-black text-gray-200 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src="https://i.pinimg.com/736x/f9/72/ec/f972ec4c7c312f1254b842d91057b1bc.jpg"
            alt="Furniture Design"
            className="w-full h-80 object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
            loading="lazy"
          />
        </div>

        <div className="w-full md:w-1/2 pl-6">
          <h2 className="text-4xl font-extrabold text-yellow-500 mb-6 text-center md:text-left">Our Services</h2>
          <ul className="list-disc pl-6 space-y-4 text-lg">
            <li className="hover:text-yellow-500 cursor-pointer transition-all duration-300">
              Custom Furniture Design
            </li>
            <li className="hover:text-yellow-500 cursor-pointer transition-all duration-300">
              Interior Design Consultation
            </li>
            <li className="hover:text-yellow-500 cursor-pointer transition-all duration-300">
              Renovation & Restoration
            </li>
          </ul>
          <div className="mt-6">
            <a
              href="/services"
              className="px-6 py-3 bg-yellow-500 text-black font-bold uppercase rounded-lg shadow-md transform hover:scale-105 transition duration-300 hover:bg-white focus:outline-none focus:ring focus:ring-blue-300"
            >
              Explore More Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;