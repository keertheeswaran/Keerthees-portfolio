import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden pt-20 pb-8">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-indigo-500/5 rounded-full -ml-16 -mb-16"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-16 after:bg-blue-500 after:rounded-full">
              Keertheeswaran
            </h3>
            <p className="text-slate-300 leading-relaxed">
              A passionate frontend developer focused on creating beautiful, responsive websites with modern technologies.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="https://linkedin.com/in/keertheeswaran" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1">
                <FaLinkedin />
              </a>
              <a href="https://github.com/keertheeswaran" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1">
                <FaGithub />
              </a>
              <a href="https://twitter.com/keertheeswaran" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-400 transition-all duration-300 hover:-translate-y-1">
                <FaTwitter />
              </a>
              <a href="https://instagram.com/keertheeswaran" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 transition-all duration-300 hover:-translate-y-1">
                <FaInstagram />
              </a>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-16 after:bg-blue-500 after:rounded-full">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Experience', 'Education', 'Contact'].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="text-blue-400 mr-2">→</span> {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-16 after:bg-blue-500 after:rounded-full">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-slate-300">
                <FaEnvelope className="text-blue-400 mr-3" />
                keertheeswaran@example.com
              </li>
              <li className="flex items-center text-slate-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 8072278787
              </li>
              <li className="flex items-center text-slate-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Coimbatore, Tamil Nadu, India
              </li>
            </ul>
          </motion.div>
          
          {/* Newsletter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-16 after:bg-blue-500 after:rounded-full">
              Stay Updated
            </h3>
            <p className="text-slate-300">
              Subscribe to my newsletter for the latest updates and articles.
            </p>
            <div className="mt-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white/10 border border-slate-700 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Footer Bottom */}
        <div className="pt-8 border-t border-slate-700/50 text-center">
          <p className="text-slate-400 flex items-center justify-center flex-wrap gap-1">
            © {currentYear} Keertheeswaran. All rights reserved. Made with 
            <FaHeart className="text-red-500 mx-1 animate-pulse" /> 
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;