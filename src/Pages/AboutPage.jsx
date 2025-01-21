import React from 'react';

const AboutPage = () => {
  return (
    <section className="h-screen p-10 m-0 bg-black text-gray-200 shadow-lg">
      <div className="container mx-auto p-4">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-yellow-500 mb-8 text-center">About Our Carpentry</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div>
            <img
              src="https://rac.ae/pics/interior-designing-services/carpentry-service/custom-made-office-room.jpg"
              alt="About Carpentry"
              className="w-full h-80 object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
            />
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-4xl font-bold text-yellow-500 mb-6">Who We Are</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              With over 20 years of experience, our expert carpenters have been creating custom woodwork and interior designs
              that transform homes and offices. From handcrafted furniture to innovative storage solutions, we bring your vision
              to life with unparalleled craftsmanship and attention to detail.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We take pride in using the highest quality materials and sustainable practices to ensure that every piece we craft
              stands the test of time. Let us help you create spaces that are as functional as they are beautiful.
            </p>

            {/* Call-to-Action Button */}
            <div className="mt-6">
              <a
                href="/contact"
                className="px-6 py-3 bg-yellow-500 text-black font-bold uppercase rounded-lg shadow-md transform hover:scale-105 transition duration-300 hover:bg-white focus:outline-none focus:ring focus:ring-yellow-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;