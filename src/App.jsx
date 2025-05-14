import { useEffect } from 'react';
import React from 'react';
import CommonPath from './components/CommonPath';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.card, .skill-item, .education-card, .contact-info-item').forEach((el, index) => {
      el.style.setProperty('--card-index', index);
      el.style.setProperty('--skill-index', index);
      el.style.setProperty('--contact-index', index);
      observer.observe(el);
    });

    document.querySelectorAll('.footer-section').forEach((el, index) => {
      el.style.setProperty('--footer-index', index);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <CommonPath />
    </div>
  );
}

export default App;
