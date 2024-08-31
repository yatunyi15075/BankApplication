import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-xl font-bold mb-2">Join Us in Making a Difference</h3>
        <p className="mb-6">Secure your financial future with our trusted banking solutions.</p>
        <div className="space-x-4">
          <Link to="/register">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg">
              Register Now
            </button>
          </Link>
          <Link to="/signin">
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg text-lg">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
