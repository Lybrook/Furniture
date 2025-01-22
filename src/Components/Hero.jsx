import React from 'react';
import hero from '/src/assets/images/hero.jpg';

const Hero = () => {
  const heroText = 'Crafting Beautiful Furniture and Interior Designs';
  const heroButton = 'Explore Our Work';

  return (
    <section
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="flex justify-center items-center h-full bg-black bg-opacity-50 p-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">{heroText}</h1>
      </div>
    </section>
  );
};

export default Hero;