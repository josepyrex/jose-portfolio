// Update your DynamicBackground.js file

import React, { useEffect, useRef } from 'react';
import './DynamicBackground.css';

function DynamicBackground() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas size to match window
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    
    window.addEventListener('resize', setCanvasSize);
    setCanvasSize();
    
    // Create particles
    const particles = [];
    const particleCount = 220; // Fewer particles for a cleaner look
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5, // Very small dots (0.5-2px)
        originRadius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.1, // Very subtle opacity
        originOpacity: Math.random() * 0.3 + 0.1,
        // Extremely slow movement for subtlety
        xVelocity: (Math.random() - 0.5) * 0.1,
        yVelocity: (Math.random() - 0.5) * 0.1
      });
    }
    
    // Mouse interaction
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    let mouseRadius = 120; // Area of influence
    let mouseActive = false;
    
    // Track mouse position
    const updateMousePosition = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      mouseActive = true;
      
      // Reset mouse active after some time without movement
      clearTimeout(window.mouseTimeout);
      window.mouseTimeout = setTimeout(() => {
        mouseActive = false;
      }, 2000);
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    
    // Animation function
    const animate = () => {
      // Clear canvas completely each frame (no trailing)
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        // Move particles very slowly
        particle.x += particle.xVelocity;
        particle.y += particle.yVelocity;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = window.innerWidth;
        if (particle.x > window.innerWidth) particle.x = 0;
        if (particle.y < 0) particle.y = window.innerHeight;
        if (particle.y > window.innerHeight) particle.y = 0;
        
        // Default particle color - much more subtle
        let r = 255;
        let g = 255;
        let b = 255;
        let particleOpacity = particle.opacity;
        let particleRadius = particle.radius;
        
        // Handle mouse interaction
        if (mouseActive) {
          const dx = mouseX - particle.x;
          const dy = mouseY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouseRadius) {
            // Calculate influence (stronger when closer)
            const influence = 1 - (distance / mouseRadius);
            
            // Gently push particles away from mouse
            const angle = Math.atan2(dy, dx);
            particle.x -= Math.cos(angle) * influence * 0.7;
            particle.y -= Math.sin(angle) * influence * 0.7;
            
            // Color shift to teal or purple based on position
            const verticalPosition = particle.y / window.innerHeight;
            
            if (verticalPosition < 0.5) {
              // Upper half - purple
              r = 138 - (influence * 40);
              g = 133 - (influence * 30);
              b = 255;
            } else {
              // Lower half - teal
              r = 45;
              g = 212;
              b = 191;
            }
            
            // Increase size and opacity when near mouse
            particleRadius = particle.originRadius + (influence * 2);
            particleOpacity = particle.originOpacity + (influence * 0.4);
          }
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particleRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${particleOpacity})`;
        ctx.fill();
      });
      
      animationFrameId = window.requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', updateMousePosition);
      clearTimeout(window.mouseTimeout);
    };
  }, []);

  return <canvas ref={canvasRef} className="dynamic-background"></canvas>;
}

export default DynamicBackground;