import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../../assets/hero.png';

const HeroSection = () => {
  return (
    <section className="bg-blue-600 text-white w-full h-screen flex flex-col md:flex-row justify-between items-center pt-20 md:pt-0 px-8 md:px-16">
      {/* Left Side - Text */}
      <div className="flex flex-col justify-center items-start space-y-4 md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold">
          Invest & Save for a Brighter Future
        </h1>
        <p className="text-lg md:text-2xl">
          Secure your financial future with personalized investment and savings plans.
        </p>
        <div className="space-x-4 mt-4">
          <Link to="/register">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg transition duration-300">
              Get Started
            </button>
          </Link>
          <Link to="/signin">
            <button 
            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600
             text-white px-6 py-3 rounded-lg text-lg transition duration-300">
              Sign In
            </button>
          </Link>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-end">
        <img src={hero} alt="Hero Image" className="w-full max-w-lg rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default HeroSection;
