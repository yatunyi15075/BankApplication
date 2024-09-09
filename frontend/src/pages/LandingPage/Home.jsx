import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import AboutSection from './AboutSection';
import Footer from './Footer';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <FeaturesSection  />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Home;
