import React, { useEffect, useRef } from 'react';
import './DynamicBackground.css';

function DynamicBackground() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({
    x: 0,
    y: 0,
    radius: 120,
    active: false
  });
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let timeoutId; // Store the timeout ID in the scope of this effect
    
    // Create a particle
    const createParticle = () => {
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 1.5 + 0.5,
        originRadius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        originOpacity: Math.random() * 0.3 + 0.1,
        xVelocity: (Math.random() - 0.5) * 0.1,
        yVelocity: (Math.random() - 0.5) * 0.1
      };
    };
    
    // Initialize particles
    const initParticles = () => {
      const particleCount = Math.ceil((window.innerWidth * window.innerHeight) / 4000); // Dynamic particle count based on screen size
      particlesRef.current = [];
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(createParticle());
      }
    };
    
    // Set canvas size with device pixel ratio handling
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 2;
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      ctx.scale(dpr, dpr);
      
      // Completely reinitialize particles on resize
      initParticles();
    };
    
    // Mouse movement handler
    const handleMouseMove = (e) => {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current.x = e.clientX - rect.left;
        mouseRef.current.y = e.clientY - rect.top;
        mouseRef.current.active = true;
      
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          mouseRef.current.active = false;
        }, 2000);
      };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        // Move particles
        particle.x += particle.xVelocity;
        particle.y += particle.yVelocity;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = window.innerWidth;
        if (particle.x > window.innerWidth) particle.x = 0;
        if (particle.y < 0) particle.y = window.innerHeight;
        if (particle.y > window.innerHeight) particle.y = 0;
        
        // Default particle color
        let r = 255;
        let g = 255;
        let b = 255;
        let particleOpacity = particle.opacity * 0.7;
        let particleRadius = particle.radius;
        
        // Mouse interaction
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouseRef.current.radius) {
            // Calculate influence
            const influence = 1 - (distance / mouseRef.current.radius);
            
            // Push particles
            const angle = Math.atan2(dy, dx);
            particle.x -= Math.cos(angle) * influence * 0.7;
            particle.y -= Math.sin(angle) * influence * 0.7;
            
            // Color shift based on position
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
            
            // Increase size and opacity
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
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Initialize
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
        cancelAnimationFrame(animationRef.current);
        window.removeEventListener('resize', setCanvasSize);
        window.removeEventListener('mousemove', handleMouseMove);
        clearTimeout(timeoutId); // Clear the timeout using the local variable
      };
    }, []);

  return <canvas ref={canvasRef} className="dynamic-background"></canvas>;
}

export default DynamicBackground;