// Navbar.js
import  { useState } from 'react';
import { Link } from 'react-router-dom';
import {  FaRegLightbulb, FaSun, FaMoon } from 'react-icons/fa';
import { FiHome } from "react-icons/fi";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    // Implement your dark mode logic here
    setDarkMode(!darkMode);
  };

  return (
    <nav className=" p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="text-black mr-4">
          <FiHome size={24} />
        </Link>
      </div>

      <div className="flex items-center justify-around gap-5">
        <Link to="/" className="text-black font-semibold ">
          Home
        </Link>
        <Link to="/posts" className="text-black ">
          Posts
        </Link>
        <Link to="/about" className="text-black">
          About
        </Link>
        <button
          className="text-black"
          onClick={toggleDarkMode}
          aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
        {/* <button className="text-black" onClick={toggleDarkMode}>
          <FaRegLightbulb size={20} />
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
