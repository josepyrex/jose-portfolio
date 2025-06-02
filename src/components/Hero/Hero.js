// Updated Hero.js with darker background and restored dynamic background
import React, { useState, useEffect } from 'react';
import './Hero.css';
import DynamicBackground from '../DynamicBackground/DynamicBackground';

function Hero() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    const typeLines = async () => {
      const line1 = 'hello! i\'m jose' ;
      const line2 = 'software engineer & designer';
      const line3 = 'building the future of';
      const line4 = 'artist-venue connections';
      
      // Type line 1
      for (let i = 0; i <= line1.length; i++) {
        setText1(line1.substring(0, i));
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      // Type line 2
      for (let i = 0; i <= line2.length; i++) {
        setText2(line2.substring(0, i));
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      // Type line 3 and 4 simultaneously
      const longerLength = Math.max(line3.length, line4.length);
      for (let i = 0; i <= longerLength; i++) {
        if (i <= line3.length) {
          setText3(line3.substring(0, i));
        }
        if (i <= line4.length) {
          setText4(line4.substring(0, i));
        }
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      
      setIsTyping(false);
    };
    
    typeLines();
    
    // Reset animation if needed
    return () => {
      setText1('');
      setText2('');
      setText3('');
      setText4('');
      setIsTyping(true);
    };
  }, []);

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="hero">
      <DynamicBackground />
      <div className="text-container">
        <div className="typewriter-wrapper">
          <span className="typewriter-line text-white">{text1}</span>
          {isTyping && text2 === '' && <span className="cursor"></span>}
        </div>
        
        <div className="typewriter-wrapper">
          <span className="typewriter-line text-gray">{text2}</span>
          {isTyping && text2 !== '' && text3 === '' && <span className="cursor"></span>}
        </div>
        
        <div className="typewriter-wrapper">
          <span className="typewriter-line text-teal">{text3}</span>
          {isTyping && text3 !== '' && text4 === '' && <span className="cursor"></span>}
        </div>
        
        <div className="typewriter-wrapper">
          <span className="typewriter-line text-teal">{text4}</span>
          {isTyping && text4 !== '' && <span className="cursor"></span>}
          {!isTyping && <span className="cursor"></span>}
        </div>
      </div>
      
      <div className="scroll-indicator" onClick={scrollDown}>
        <div className="scroll-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Hero;