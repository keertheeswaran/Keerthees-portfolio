import { useState, useEffect } from 'react';
import React from 'react';
import { FaHeart, FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({darkMode,setDarkMode}) => {
  const [expanded, setExpanded] = useState(false);


  // Check for user's preferred color scheme or saved preference on component mount
  useEffect(() => {
    // Check if user has a saved preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // If no saved preference, check system preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial state based on saved preference or system preference
    const initialDarkMode = savedDarkMode || prefersDark;
    setDarkMode(initialDarkMode);
    
    // Apply dark mode if needed
    if (initialDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', newDarkMode.toString());
    
    // Apply or remove dark class from html element for Tailwind
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 shadow-md p-2 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#hero" className="text-xl font-bold">
            <span className="text-blue-600">Port</span><span className={darkMode ? 'text-white' : 'text-gray-800'}>follio</span>
          </a>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {expanded ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center">
            <a href="#hero" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 px-4 py-2 font-medium">Home</a>
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 px-4 py-2 font-medium">About</a>
            <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 px-4 py-2 font-medium">Experience</a>
            <a href="#education" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 px-4 py-2 font-medium">Education</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 px-4 py-2 font-medium">Contact</a>
          
            <button 
              className={`ml-8 p-2 rounded-full ${darkMode ? "dark-sun" : "dark-moon"} hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 focus:outline-none`}
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {darkMode ? 
                <FaSun className="text-yellow-400 h-5 w-5" /> : 
                <FaMoon className="text-blue-600 h-5 w-5" />
              }
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`${expanded ? 'block' : 'hidden'} md:hidden py-2`}>
          <div className="flex flex-col space-y-4 pb-3">
            <a href="#hero" onClick={() => setExpanded(false)} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 px-3 py-3 font-medium">Home</a>
            <a href="#about" onClick={() => setExpanded(false)} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 px-3 py-3 font-medium">About</a>
            <a href="#experience" onClick={() => setExpanded(false)} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 px-3 py-3 font-medium">Experience</a>
            <a href="#education" onClick={() => setExpanded(false)} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 px-3 py-3 font-medium">Education</a>
            <a href="#contact" onClick={() => setExpanded(false)} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 px-3 py-3 font-medium">Contact</a>
            
            <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
              <button 
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 focus:outline-none"
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
              >
                {darkMode ? 
                  <FaSun className="text-yellow-400 h-5 w-5" /> : 
                  <FaMoon className="text-blue-600 h-5 w-5" />
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;