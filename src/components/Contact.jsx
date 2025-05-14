import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaPaperPlane } from 'react-icons/fa';
import React from 'react';

const Contact = ({darkMode}) => {
  return (
    <section id="contact" className={`py-24 ${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-slate-50 to-slate-100 text-slate-800"} relative overflow-hidden`}>
      {/* Background decorations */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-500/10 rounded-full animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className={`text-3xl md:text-4xl font-bold text-center ${darkMode ? "text-white" : "text-slate-800"} mb-16`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
            <div className="flex flex-col md:flex-row">
              {/* Contact Info Panel */}
              <motion.div 
                className="bg-gradient-to-br from-indigo-600 to-blue-500 text-white p-10 md:w-2/5 relative"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                
                <h3 className="text-2xl font-bold mb-2 relative z-10">Contact Information</h3>
                <p className="text-blue-100 mb-10 relative z-10">Let's connect and discuss your project</p>
                
                <div className="space-y-8 relative z-10">
                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                      <FaPhone className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white/80">Phone</h4>
                      <p className="text-white text-lg font-medium">+91 8072278787</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                      <FaEnvelope className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white/80">Email</h4>
                      <p className="text-white text-lg font-medium">keertheeswaran@example.com</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                      <FaMapMarkerAlt className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white/80">Location</h4>
                      <p className="text-white text-lg font-medium">Coimbatore, Tamil Nadu, India</p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="flex space-x-4 mt-16 relative z-10">
                  <motion.a 
                    href="https://linkedin.com/in/your-profile" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg"
                    whileHover={{ y: -8, scale: 1.1 }}
                  >
                    <FaLinkedin size={20} />
                  </motion.a>
                  <motion.a 
                    href="https://github.com/your-username" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg"
                    whileHover={{ y: -8, scale: 1.1 }}
                  >
                    <FaGithub size={20} />
                  </motion.a>
                  <motion.a 
                    href="mailto:keertheeswaran@example.com"
                    className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg"
                    whileHover={{ y: -8, scale: 1.1 }}
                  >
                    <FaEnvelope size={20} />
                  </motion.a>
                  <motion.a 
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg"
                    whileHover={{ y: -8, scale: 1.1 }}
                  >
                    <FaWhatsapp size={20} />
                  </motion.a>
                </div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div 
                className="p-10 md:w-3/5 bg-white dark:bg-gray-800"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Send Me a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <input 
                        type="text" 
                        id="nameInput" 
                        className="w-full bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-black transition-all duration-300 group-hover:border-blue-300" 
                        placeholder="Your Name" 
                      />
                    </div>
                    <div className="relative group">
                      <input 
                        type="email" 
                        id="emailInput" 
                        className="w-full bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-black  transition-all duration-300 group-hover:border-blue-300" 
                        placeholder="Your Email" 
                      />
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <input 
                      type="text" 
                      id="subjectInput" 
                      className="w-full bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-black  transition-all duration-300 group-hover:border-blue-300" 
                      placeholder="Subject" 
                    />
                  </div>
                  
                  <div className="relative group">
                    <textarea 
                      id="messageInput" 
                      className="w-full bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-black  h-40 transition-all duration-300 group-hover:border-blue-300" 
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  
                  <motion.button 
                    type="submit" 
                    className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-lg shadow-xl hover:shadow-blue-500/20 flex items-center justify-center gap-2 w-full md:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaPaperPlane />
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;