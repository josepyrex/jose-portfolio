import React, { useEffect, useRef } from 'react';
import './DynamicBackground.css';

// Oscilloscope-inspired background: graticule grid + reactive waveform traces
function DynamicBackground() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({
    x: -9999,
    y: -9999,
    active: false
  });
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let timeoutId;
    
    // Set canvas size with device pixel ratio handling
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 2;
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
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
    
    // Graticule: the square grid etched onto oscilloscope screens
    const drawGraticule = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const cell = w / 12;              // 12 horizontal divisions
      const cx = w / 2;
      const cy = h / 2;
      
      // Minor grid lines
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(45, 212, 191, 0.045)';
      ctx.beginPath();
      for (let x = cx % cell; x <= w; x += cell) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
      }
      for (let y = cy % cell; y <= h; y += cell) {
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
      }
      ctx.stroke();
      
      // Center axes, slightly brighter
      ctx.strokeStyle = 'rgba(45, 212, 191, 0.10)';
      ctx.beginPath();
      ctx.moveTo(cx, 0);
      ctx.lineTo(cx, h);
      ctx.moveTo(0, cy);
      ctx.lineTo(w, cy);
      ctx.stroke();
      
      // Tick marks along the center axes (5 per division, like a real scope)
      const tick = cell / 5;
      ctx.strokeStyle = 'rgba(45, 212, 191, 0.14)';
      ctx.beginPath();
      for (let x = cx % tick; x <= w; x += tick) {
        ctx.moveTo(x, cy - 3);
        ctx.lineTo(x, cy + 3);
      }
      for (let y = cy % tick; y <= h; y += tick) {
        ctx.moveTo(cx - 3, y);
        ctx.lineTo(cx + 3, y);
      }
      ctx.stroke();
    };
    
    // Waveform traces that amplify near the cursor, like touching a scope probe
    const drawWaveform = (time) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const baseY = h * 0.62;
      
      const traces = [
        { speed: 0.0006, amp: 26, freq: 0.008, opacity: 0.30, width: 1.5, bloom: 0.07, color: '45, 212, 191' },
        { speed: 0.0004, amp: 16, freq: 0.013, opacity: 0.12, width: 1, bloom: 0.04, color: '138, 133, 255' }
      ];
      
      traces.forEach(trace => {
        ctx.beginPath();
        for (let x = 0; x <= w; x += 4) {
          let amp = trace.amp;
          
          if (mouseRef.current.active) {
            const dist = Math.abs(x - mouseRef.current.x);
            if (dist < 220) {
              amp += (1 - dist / 220) * 45;
            }
          }
          
          const y = baseY
            + Math.sin(x * trace.freq + time * trace.speed) * amp
            + Math.sin(x * trace.freq * 2.7 + time * trace.speed * 1.6) * amp * 0.35;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        // Phosphor bloom: wide soft stroke under the sharp trace
        ctx.strokeStyle = `rgba(${trace.color}, ${trace.bloom})`;
        ctx.lineWidth = trace.width * 6;
        ctx.stroke();
        
        ctx.strokeStyle = `rgba(${trace.color}, ${trace.opacity})`;
        ctx.lineWidth = trace.width;
        ctx.stroke();
      });
    };
    
    // Animation loop
    const animate = (time = 0) => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      drawGraticule();
      drawWaveform(time);
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Respect reduced-motion preference: draw one static frame instead of animating
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    if (prefersReducedMotion) {
      drawGraticule();
      drawWaveform(0);
    } else {
      window.addEventListener('mousemove', handleMouseMove);
      animate();
    }
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return <canvas ref={canvasRef} className="dynamic-background"></canvas>;
}

export default DynamicBackground;
