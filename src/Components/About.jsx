import React from 'react';

const About = () => {
  return (
    <section className="p-8 bg-black text-gray-200 shadow-lg">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-yellow-500 mb-6 text-center md:text-left">
          Kosala's Carpentry
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg leading-relaxed mb-6 text-justify">
              Kosala's Carpentry is a family-owned and operated custom woodwork corporation located in Kitale, Trans-Nzoia. For many generations, superior craftsmanship has been a tradition in our family. Today, Julius Kosalah proudly offers some of the finest handcrafted woodwork. 
              <br /><br />
              For several years, Kosala's Carpentry has provided services to a wide variety of luxury residences, hotels, restaurants, and stores throughout the country. Our expert team specializes in custom furniture and interior designs tailored to your needs. Our goal is to bring your vision to life with quality craftsmanship and unique designs.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-yellow-500 mb-4">Get in Touch</h3>
            <ul className="space-y-4 text-lg">
              <li className="hover:text-yellow-500 transition-all duration-300">
                <strong>Email:</strong> 
                <a href="mailto:osalajulius@gmail.com" className="text-gray-200 hover:text-yellow-500 transition-all duration-300">
                  osalajulius@gmail.com
                </a>
              </li>
              <li className="hover:text-yellow-500 transition-all duration-300">
                <strong>Phone:</strong> 
                <a href="tel:+254-722-231897" className="text-gray-200 hover:text-yellow-500 transition-all duration-300">
                  +254-722-231897
                </a>
              </li>
              <li className="hover:text-yellow-500 transition-all duration-300">
                <strong>Address:</strong> Gogate Street, Kitale
              </li>
              <li className="hover:text-yellow-500 transition-all duration-300">
                <strong>Business Hours:</strong> Mon-Sat, 9 AM - 5 PM
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;