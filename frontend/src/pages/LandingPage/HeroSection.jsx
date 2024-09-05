import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-blue-600 text-white h-screen flex flex-col justify-center items-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">Invest & Save for a Brighter Future</h1>
        <p className="text-lg md:text-2xl">
          Secure your financial future with personalized investment and savings plans.
        </p>
        <div className="space-x-4">
          <Link to="/register">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg">
              Get Started
            </button>
          </Link>
          <Link to="/signin">
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg text-lg">
              Sign In
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-8">
        <img src="/src/assets/image.png" alt="Hero Image" className="w-full max-w-4xl" />
      </div>
    </section>
  );
};

export default HeroSection;
