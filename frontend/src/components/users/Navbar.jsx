import React, { useState } from 'react';
import { FaBell, FaSearch } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md dark:bg-gray-800">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Dashboard</h1>
        <span className="text-gray-500">›</span>
        <h2 className="text-lg font-medium text-gray-600 dark:text-gray-300">Home</h2>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
          />
          <FaSearch className="absolute left-3 top-2.5 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="date"
          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
        />
        <FaBell className="text-gray-500 dark:text-gray-400 cursor-pointer" />
        <button onClick={toggleDarkMode} className="text-gray-500 dark:text-gray-400">
          {darkMode ? <BsSun /> : <BsMoon />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
