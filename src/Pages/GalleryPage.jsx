import React from "react";

const Gallery = () => {
  const images = [
    {
      src: "https://i.pinimg.com/474x/1a/64/3b/1a643bc14d232b5edee134838671b846.jpg",
      alt: "Furniture 1",
    },
    {
      src: "https://i.pinimg.com/236x/a8/60/32/a86032344a05544e6188f37de272b0c8.jpg",
      alt: "Furniture 2",
    },
    {
      src: "https://i.pinimg.com/236x/1c/e6/96/1ce6969354247b68eb86ef25b4eb5b81.jpg",
      alt: "Furniture 3",
    },
    {
      src: "https://i.pinimg.com/236x/1c/e6/96/1ce6969354247b68eb86ef25b4eb5b81.jpg",
      alt: "Furniture 4",
    },
    {
      src: "https://i.pinimg.com/236x/1c/e6/96/1ce6969354247b68eb86ef25b4eb5b81.jpg",
      alt: "Furniture 5",
    },
  ];

  return (
    <section className="p-10 bg-gray-900 text-gray-100">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-yellow-500 text-center mb-8">
        Our Work
      </h2>
      <p className="text-center text-gray-300 mb-10">
        Discover some of our finest creations that showcase our expertise in
        carpentry and interior design.
      </p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-full h-64 object-cover rounded-lg transform hover:scale-105 transition duration-300 shadow-lg"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;