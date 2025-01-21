import React from 'react';

const Hero = () => {
  const heroImage = 'src/assets/images/hero.jpg';
  const heroText = 'Crafting Beautiful Furniture and Interior Designs';

  return (
    <section
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="flex justify-center items-center h-full bg-black bg-opacity-50">
        <h1 className="text-white text-4xl font-bold">{heroText}</h1>
      </div>
    </section>
  );
};

export default Hero;