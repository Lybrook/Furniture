import React from 'react';
import heroImage from 'src/assets/images/heroImage.jpg';

const Hero = () => {
  const heroText = 'Crafting Beautiful Furniture and Interior Designs';

  return (
    <section
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="flex justify-center items-center h-full bg-black bg-opacity-50 p-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">{heroText}</h1>
        <a href="#services" className="mt-6 inline-block bg-yellow-500 text-black py-2 px-6 rounded-lg hover:bg-yellow-600 transition">
          Explore Our Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
