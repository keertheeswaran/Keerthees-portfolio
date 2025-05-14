import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import React from 'react';

const Hero = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Create animated background bubbles
    const createBubbles = () => {
      const newBubbles = [];
      const colors = ['#2563EB20', '#4F46E520', '#818CF820'];
      
      for (let i = 0; i < 15; i++) {
        newBubbles.push({
          id: i,
          size: Math.random() * 100 + 50,
          x: Math.random() * 100,
          y: Math.random() * 100,
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 5,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      
      setBubbles(newBubbles);
    };
    
    createBubbles();
  }, []);

  return (
    <section id="hero" className="bg-gradient-to-r from-slate-900 to-slate-800 min-h-screen flex items-center justify-center text-white relative overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute rounded-full"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              background: bubble.color,
              animation: `float ${bubble.duration}s ease-in-out ${bubble.delay}s infinite alternate`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, I am <span className="text-blue-600">Keertheeswaran</span>
          </motion.h1>
          
          <motion.p
            className="text-xl leading-relaxed mb-8 text-slate-200 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I am a frontend web developer. I can provide clean code and pixel perfect design. I also make
            website more & more interactive with web animations.
          </motion.p>
          
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="#" className="text-white hover:text-blue-400 transition-colors duration-300 text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors duration-300 text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors duration-300 text-2xl">
              <FaPinterest />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;