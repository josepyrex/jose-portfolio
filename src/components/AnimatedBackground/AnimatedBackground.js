import React, { useEffect } from 'react';
import './AnimatedBackground.css';

function AnimatedBackground() {
  useEffect(() => {
    // Create floating elements
    const container = document.querySelector('.animated-background');
    
    for (let i = 0; i < 15; i++) {
      const element = document.createElement('div');
      element.classList.add('floating-element');
      
      // Random position, size, opacity and animation duration
      const size = Math.random() * 100 + 50; // 50-150px
      const opacity = Math.random() * 0.07 + 0.01; // 0.01-0.08 opacity
      const animDuration = Math.random() * 20 + 20; // 20-40s
      const startPosition = Math.random() * 100; // 0-100%
      
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      element.style.opacity = opacity;
      element.style.animationDuration = `${animDuration}s`;
      element.style.left = `${startPosition}%`;
      element.style.animationDelay = `-${Math.random() * 40}s`; // Random start time
      
      container.appendChild(element);
    }
    
    // Cleanup function
    return () => {
      const elements = document.querySelectorAll('.floating-element');
      elements.forEach(element => element.remove());
    };
  }, []);

  return <div className="animated-background"></div>;
}

export default AnimatedBackground;