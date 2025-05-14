import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaMedal } from 'react-icons/fa';

const Education = ({darkMode}) => {
  const educationItems = [
    {
      degree: "MSc Information Technology",
      institution: "Bharathiar University",
      period: "2021 - 2023",
      location: "Coimbatore, India",
      description: "Specialized in web development and software engineering with a focus on modern JavaScript frameworks and responsive design principles.",
      achievements: [
        "Graduated with distinction",
        "Developed a full-stack web application for final project",
        "Participated in university hackathon"
      ]
    },
    {
      degree: "BSc Information Technology",
      institution: "Sri Sankara Bhagavathi Arts and Science College",
      period: "2018 - 2021",
      location: "Tisaiyanvillai, India",
      description: "Gained foundational knowledge in programming, database management, and web technologies.",
      achievements: [
        "Class representative for 2 years",
        "Organized technical symposium",
        "Received academic excellence award"
      ]
    }
  ];

  return (
    <section id="education" className={`py-24 ${darkMode ? "bg-gray-900" : "bg-gradient-to-br from-slate-50 to-slate-100"} dark:from-slate-900 dark:to-slate-800 text-slate-800 dark:text-white relative overflow-hidden`}>
      {/* Background decorations */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500/5 rounded-full"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-500/5 rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className={`text-3xl md:text-4xl font-bold text-center ${darkMode ?  "text-white" : "text-slate-800"  } mb-16`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Education Journey
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          {educationItems.map((item, index) => (
            <motion.div 
              key={index}
              className="mb-16 last:mb-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex flex-col md:flex-row gap-8 relative">
                {/* Timeline connector */}
                {index !== educationItems.length - 1 && (
                  <div className="absolute left-6 md:left-8 top-16 bottom-[-64px] w-1 bg-gradient-to-b from-blue-500 to-blue-500/20 rounded-full"></div>
                )}
                
                {/* Icon */}
                <div className="relative">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20 z-10">
                    <FaGraduationCap className="text-white text-2xl md:text-3xl" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 shadow-xl hover:shadow-blue-500/10 hover:translate-y-[-5px] dark:bg-gray-800/50 dark:border-gray-700/50">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                      <h3 className={`text-2xl font-bold  ${darkMode ?  "text-white" : "text-slate-800"  }`}>{item.degree}</h3>
                      <div className={`px-4 py-2 bg-blue-500/20 rounded-full   ${darkMode ?  "text-white" : "text-blue-600"  } font-medium text-sm flex items-center`}>
                        <FaCalendarAlt className="mr-2" />
                        {item.period}
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-6">
                      <div className={`text-xl font-semibold  text-blue-600`}>{item.institution}</div>
                      <div className="mx-2 text-blue-500/50">•</div>
                      <div className={`flex items-center ${darkMode ?  "text-white" : "text-blue-600" } text-sm`}>
                        <FaMapMarkerAlt className="mr-1" />
                        {item.location}
                      </div>
                    </div>
                    
                    <p className={` ${darkMode ?  "text-white" : "text-slate-700" } mb-6 leading-relaxed`}>
                      {item.description}
                    </p>
                    
                    {item.achievements && (
                      <div className="mt-4">
                        <h4 className={`text-lg font-semibold ${darkMode ? "text-white"  : "text-slate-800" } flex items-center mb-3`}>
                          <FaMedal className="mr-2 text-blue-400" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-blue-400 mr-2 mt-1">→</span>
                              <span className={` ${darkMode ? "text-white" :"text-slate-700"} `}>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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

export default Education;