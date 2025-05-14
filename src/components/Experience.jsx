import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

const Experience = ({darkMode}) => {
  const experiences = [
    {
      company: "Company Name 1",
      position: "Senior Developer",
      period: "2021 - Present",
      location: "City, Country",
      description: [
        "Led development of key features resulting in 30% increase in user engagement",
        "Collaborated with cross-functional teams to implement new technologies",
        "Mentored junior developers and conducted code reviews"
      ],
      skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"]
    },
    {
      company: "Company Name 2",
      position: "Web Developer",
      period: "2018 - 2021",
      location: "City, Country",
      description: [
        "Developed responsive web applications using modern JavaScript frameworks",
        "Optimized application performance resulting in 40% faster load times",
        "Implemented CI/CD pipelines for streamlined deployment"
      ],
      skills: ["JavaScript", "React", "CSS", "Git", "Docker"]
    }
  ];

  return (
    <section id="experience" className={`py-24 ${darkMode ? "bg-gray-900" : "bg-gradient-to-br from-slate-50 to-slate-100"} from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden`}>
      {/* Background decorations */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-500/10 rounded-full animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className={`text-3xl md:text-4xl font-bold text-center ${darkMode ?  "text-white" : "text-slate-800"  } mb-16`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>
        
        <div className="max-w-5xl mx-auto space-y-16">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline connector */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[39px] md:left-[39px] top-[60px] bottom-[-80px] w-1 bg-gradient-to-b from-blue-500 to-blue-500/20 hidden md:block"></div>
              )}
              
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left side with icon */}
                <div className="md:w-20 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20 z-10">
                    <FaBriefcase className="text-white text-2xl" />
                  </div>
                </div>
                
                {/* Right side with content */}
                <div className="flex-1">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-blue-500/10 hover:-translate-y-2">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">{exp.position}</h3>
                        <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{exp.company}</h4>
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        <div className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-300 font-medium text-sm flex items-center">
                          <FaCalendarAlt className="mr-2" />
                          {exp.period}
                        </div>
                        <div className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-300 font-medium text-sm flex items-center">
                          <FaMapMarkerAlt className="mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-3">Responsibilities:</h5>
                      <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <FaCheckCircle className="text-blue-500 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" />
                            <span className="text-slate-600 dark:text-slate-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-3">Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span 
                            key={i} 
                            className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium transition-all duration-300 hover:from-blue-500 hover:to-indigo-500 hover:text-white transform hover:-translate-y-1"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;