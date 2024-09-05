import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <img src="/src/assets/image.png" alt="Investing" className="w-full mb-4 rounded-lg" />
            <h3 className="text-xl font-bold mb-2">Personalized Investments</h3>
            <p>Grow your wealth with tailored investment plans that meet your financial goals.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <img src="/src/assets/image.png" alt="Saving" className="w-full mb-4 rounded-lg" />
            <h3 className="text-xl font-bold mb-2">Smart Savings</h3>
            <p>Save for your future with high-interest savings accounts that ensure your money works for you.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <img src="/src/assets/image.png" alt="Group Saving" className="w-full mb-4 rounded-lg" />
            <h3 className="text-xl font-bold mb-2">Group Savings Plans</h3>
            <p>Join group savings schemes and benefit from collective investments for greater returns.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
