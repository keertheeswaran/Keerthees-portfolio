import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaDownload } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';
import profile from "../assets/img/profile.jpg"
const About = ({darkMode}) => {
  const skills = [
    { name: 'React', icon: <FaReact className="text-[#61DAFB]" />, category: 'Frontend' },
    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" />, category: 'Backend' },
    { name: 'HTML', icon: <FaHtml5 className="text-[#E34F26]" />, category: 'Frontend' },
    { name: 'CSS', icon: <FaCss3Alt className="text-[#1572B6]" />, category: 'Frontend' },
    { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" />, category: 'Language' },
    { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" />, category: 'Language' },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-[#06B6D4]" />, category: 'Frontend' },
    { name: 'SQL', icon: <FaDatabase className="text-[#4479A1]" />, category: 'Database' },
  ];

  return (
    <section id="about" className={`py-24 ${darkMode ? "bg-gray-900" : "bg-gradient-to-br from-slate-50 to-slate-100"} dark:from-slate-900 dark:to-slate-800 relative overflow-hidden`}>
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
          About Me
        </motion.h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image Section */}
            <motion.div 
              className="lg:w-2/5 relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="w-full h-full absolute -left-4 -top-4 border-2 border-blue-500 rounded-2xl"></div>
                <div className="w-full h-full absolute -right-4 -bottom-4 border-2 border-indigo-500 rounded-2xl"></div>
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={profile}
                    alt="Keertheeswaran" 
                    className="w-full object-cover rounded-2xl transform transition-all duration-500 hover:scale-105"
                  />
                </div>
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg z-10"  >
                  <span className="text-xl font-bold">2+</span>
                  <span className="text-xs ml-1">Years<br/>Exp.</span>
                </div>
              </div>
            </motion.div>
            
            {/* Content Section */}
            <motion.div 
              className="lg:w-3/5"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                Frontend Developer & UI/UX Enthusiast
              </h3>
              
              <p className={`${darkMode ? "text-white" : "text-slate-800"} text-lg leading-relaxed mb-6`}>
                Hello! I'm Keertheeswaran, a passionate frontend developer with expertise in creating responsive, 
                user-friendly web applications. With a strong foundation in modern JavaScript frameworks and a keen eye for design, 
                I transform ideas into seamless digital experiences.
              </p>
              
              <p className={`${darkMode ? "text-white" : "text-slate-800"} text-lg leading-relaxed mb-8`}>
                My journey in web development began 5 years ago, and since then, I've worked on various projects 
                ranging from e-commerce platforms to complex enterprise applications. I'm constantly learning and 
                adapting to new technologies to deliver cutting-edge solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className={` ${darkMode ? "text-white" : "text-slate-800"}`}>
                    <strong className={` ${darkMode ? "text-white" : "text-slate-900"}`}>Name:</strong> Keertheeswaran
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className={` ${darkMode ? "text-white" : "text-slate-800"}`}>
                    <strong className={` ${darkMode ? "text-white" : "text-slate-900"}`}>Email:</strong> keertheeswaran@example.com
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className={` ${darkMode ? "text-white" : "text-slate-800"}`}>
                    <strong className={` ${darkMode ? "text-white" : "text-slate-900"}`}>From:</strong> Coimbatore, India
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className={` ${darkMode ? "text-white" : "text-slate-800"}`}>
                    <strong className={` ${darkMode ? "text-white" : "text-slate-900"}`}>Freelance:</strong> Available
                  </span>
                </div>
              </div>
              
              <motion.button 
                onClick={() => window.open('/path/to/resume.pdf', '_blank')}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-blue-100 font-semibold rounded-lg shadow-lg transition-all duration-300 hover:text-white hover:shadow-blue-500/50 hover:-translate-y-1" 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
              > 
                <FaDownload className="mr-2" /> 
                Download Resume 
              </motion.button> 
            </motion.div>
          </div>
          
          {/* Skills Section */}
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className={`text-2xl font-bold text-center ${darkMode ? "text-white" : "text-slate-800"} mb-12`}>
              My Skills
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-500/10 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-100 dark:group-hover:bg-gray-600 transition-all duration-300 text-3xl">
                      {skill.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-1">{skill.name}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{skill.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;