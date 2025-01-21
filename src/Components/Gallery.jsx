import React from 'react';

const images = [
  { src: "https://i.pinimg.com/control2/474x/1a/64/3b/1a643bc14d232b5edee134838671b846.jpg", alt: "Furniture 1" },
  { src: "https://i.pinimg.com/control2/236x/a8/60/32/a86032344a05544e6188f37de272b0c8.jpg", alt: "Furniture 2" },
  { src: "https://i.pinimg.com/control2/236x/1c/e6/96/1ce6969354247b68eb86ef25b4eb5b81.jpg", alt: "Furniture 3" },
];

const Gallery = () => {
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Our Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} className="w-full h-64 object-cover rounded-lg transform transition duration-300 ease-in-out hover:scale-105 hover:opacity-80" loading="lazy" />
        ))}
      </div>
    </section>
  );
};

export default Gallery;