import React from 'react';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Gallery from '../Components/Gallery';
import Services from '../Components/Services';
import Footer from '../Components/Footer';
import RandomImage from '../Components/RandomImage';
import ContactForm from '../Components/ContactForm';

const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <About />
      <RandomImage />
      <Gallery />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
