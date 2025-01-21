import React from 'react';

const NavBar = () => {
  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/gallery", text: "Gallery" },
    { href: "/services", text: "Services" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <nav className="p-6 bg-black text-gray-200 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <ul className="flex flex-col md:flex-row items-center md:space-x-12 space-y-4 md:space-y-0">
          {navLinks.slice(0, 3).map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="uppercase font-light text-lg tracking-wider transition duration-300 transform hover:text-yellow-500 hover:scale-110"
              >
                {link.text}
              </a>
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
              <a
                href={link.href}
                className="uppercase font-light text-lg tracking-wider transition duration-300 transform hover:text-yellow-500 hover:scale-110"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;