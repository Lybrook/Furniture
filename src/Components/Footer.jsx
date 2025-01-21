import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        <div className="flex flex-col items-center md:text-center space-y-1">
          <div className="text-4xl font-extrabold text-yellow-500">KF</div> 
          <p className="text-lg font-medium text-gray-200">Kosala's Furniture</p> 
          <p className="text-sm text-gray-400 italic">Custom Furniture</p> 
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://www.instagram.com/kosalasfurniture"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300 ease-in-out transform hover:scale-125"
          >
            <i className="fab fa-instagram text-3xl text-pink-500"></i>
          </a>

          <a
            href="https://www.facebook.com/kosalasfurniture"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300 ease-in-out transform hover:scale-125"
          >
            <i className="fab fa-facebook text-3xl text-blue-600"></i>
          </a>

          <a
            href="https://www.twitter.com/kosalasfurniture"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300 ease-in-out transform hover:scale-125"
          >
            <i className="fab fa-twitter text-3xl text-blue-400"></i>
          </a>
        </div>

        <div className="text-sm md:text-right text-gray-400 space-y-1">
          <p>&copy; {new Date().getFullYear()} Kosala's Furniture | Brand</p>
          <p>
            Development & Website by{" "}
            <span className="text-orange-500 font-semibold">LYBROOK</span> 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;