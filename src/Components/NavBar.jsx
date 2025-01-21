import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/gallery", text: "Gallery" },
    { to: "/services", text: "Services" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <nav className="p-6 bg-black text-gray-200 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <ul className="flex flex-col md:flex-row items-center md:space-x-12 space-y-4 md:space-y-0">
          {navLinks.slice(0, 3).map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `uppercase font-light text-lg tracking-wider transition duration-300 transform hover:text-yellow-500 hover:scale-110 ${
                    isActive ? 'text-yellow-500' : ''
                  }`
                }
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="text-center">
          <div className="text-5xl font-extrabold text-yellow-500">KF</div>
          <p className="text-lg italic font-medium text-yellow-200">Kosala's Furniture</p>
          <p className="text-sm italic text-gray-400">Custom Furniture</p>
        </div>

        <ul className="flex flex-col md:flex-row items-center md:space-x-12 space-y-4 md:space-y-0">
          {navLinks.slice(3).map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `uppercase font-light text-lg tracking-wider transition duration-300 transform hover:text-yellow-500 hover:scale-110 ${
                    isActive ? 'text-yellow-500' : ''
                  }`
                }
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
