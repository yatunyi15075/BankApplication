import React from 'react';
import about from '../../assets/about.jpg';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Why Choose Us?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          At our bank, we believe in making your money work for you. 
          Whether you're an individual or part of a group, we provide 
          solutions that help you invest and save with confidence. 
          Join thousands who trust us to secure their financial future.
        </p>
        <img src={about} alt="About Us" className="mx-auto rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default AboutSection;
