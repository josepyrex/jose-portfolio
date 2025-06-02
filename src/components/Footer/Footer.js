// src/components/Footer/Footer.js
import React, { useState, useEffect, useRef } from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  const [textElements, setTextElements] = useState({
    contact: "Let\'s Chat",
    email: "piereks@gmail.com",
    links: "Links",
    resume: "Resume",
    readcv: "Read.cv",
    github: "github",
    accolades: "Accolades",
    message: "This website was built using React & Node.js. Thanks for visiting <3",
    name: "piereks.com"
  });
  
  const [animatingElements, setAnimatingElements] = useState({});
  const footerRef = useRef(null);
  
  const scrambleText = (key, originalText) => {
    if (animatingElements[key]) return;
    
    setAnimatingElements(prev => ({ ...prev, [key]: true }));
    
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,./<>?';
    let iterations = 0;
    const maxIterations = 15;
    
    const interval = setInterval(() => {
      if (iterations < maxIterations) {
        // Create scrambled text with more symbols at the beginning, gradually revealing real text
        let scrambled = '';
        for (let i = 0; i < originalText.length; i++) {
          const progress = iterations / maxIterations;
          const characterRevealThreshold = i / originalText.length;
          
          if (characterRevealThreshold < progress) {
            scrambled += originalText[i];
          } else {
            scrambled += chars[Math.floor(Math.random() * chars.length)];
          }
        }
        
        setTextElements(prev => ({ ...prev, [key]: scrambled }));
        iterations++;
      } else {
        setTextElements(prev => ({ ...prev, [key]: originalText }));
        clearInterval(interval);
        setTimeout(() => {
          setAnimatingElements(prev => ({ ...prev, [key]: false }));
        }, 2000);
      }
    }, 70);
  };
  
  useEffect(() => {
    // Initial animations with staggered timing
    const originalTexts = {
      contact: "Let\'s Chat",
      email: "piereks@gmail.com",
      links: "Links",
      resume: "Resume",
      readcv: "Read.cv",
      github: "github",
      accolades: "Accolades",
      message: "This website was built using React & Node.js. Thanks for visiting <3",
      name: "piereks.com"
    };
    
    // Stagger the animations
    setTimeout(() => scrambleText('contact', originalTexts.contact), 300);
    setTimeout(() => scrambleText('email', originalTexts.email), 500);
    setTimeout(() => scrambleText('links', originalTexts.links), 700);
    setTimeout(() => scrambleText('resume', originalTexts.resume), 900);
    setTimeout(() => scrambleText('readcv', originalTexts.readcv), 1100);
    setTimeout(() => scrambleText('github', originalTexts.github), 1300);
    setTimeout(() => scrambleText('accolades', originalTexts.accolades), 1500);
    setTimeout(() => scrambleText('message', originalTexts.message), 1700);
    setTimeout(() => scrambleText('name', originalTexts.name), 1900);
    
    // Add scroll trigger for animations
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Re-trigger animations when scrolled into view
          Object.keys(originalTexts).forEach((key, index) => {
            setTimeout(() => {
              if (!animatingElements[key]) {
                scrambleText(key, originalTexts[key]);
              }
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );
    
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }
    
    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <section className="footer-section" id="footer">
    <footer className="footer" ref={footerRef}>
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-contact">
            <h3 
              onClick={() => scrambleText('contact', 'Let\'s Chat')}
              className={animatingElements.contact ? 'animating' : ''}
            >{textElements.contact}</h3>
            
            <a 
              href="mailto:piereks@gmail.com" 
              className="footer-email"
              onClick={(e) => {
                e.preventDefault();
                scrambleText('email', 'piereks@gmail.com');
                setTimeout(() => {
                  window.location.href = "mailto:piereks@gmail.com";
                }, 1500);
              }}
            >{textElements.email}</a>
          </div>
          
          <div className="footer-links">
            <h3 
              onClick={() => scrambleText('links', 'Links')}
              className={animatingElements.links ? 'animating' : ''}
            >{textElements.links}</h3>
            
            <ul>
              <li>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    scrambleText('resume', 'Resume');
                    setTimeout(() => {
                      window.open('/resume.pdf', '_blank');
                    }, 1500);
                  }}
                >
                  <span className="link-circle teal"></span>
                  <span className="link-text">{textElements.resume}</span>
                  <span className="arrow">↗</span>
                </a>
              </li>
              <li>
                <a 
                  href="/cv.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    scrambleText('readcv', 'Read.cv');
                    setTimeout(() => {
                      window.open('/cv.pdf', '_blank');
                    }, 1500);
                  }}
                >
                  <span className="link-circle yellow"></span>
                  <span className="link-text">{textElements.readcv}</span>
                  <span className="arrow">↗</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/in/josepiereks" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    scrambleText('github', 'github');
                    setTimeout(() => {
                      window.open('https://github.com/josepyrex', '_blank');
                    }, 1500);
                  }}
                >
                  <span className="link-circle purple"></span>
                  <span className="link-text">{textElements.github}</span>
                  <span className="arrow">↗</span>
                </a>
              </li>
              <li>
                <a 
                  href="#accolades"
                  onClick={(e) => {
                    e.preventDefault();
                    scrambleText('accolades', 'Accolades');
                    setTimeout(() => {
                      document.getElementById('accolades').scrollIntoView({ behavior: 'smooth' });
                    }, 1500);
                  }}
                >
                  <span className="link-circle red"></span>
                  <span className="link-text">{textElements.accolades}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div 
          className="footer-animation" 
          onClick={() => scrambleText('message', 'This website was built using React & Node.js. Thanks for visiting <3')}
        >
          <p className="animation-text">{textElements.message}</p>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-logo">
            <h2 
              onClick={() => scrambleText('name', 'piereks.com')}
              className={animatingElements.name ? 'animating' : ''}
            >{textElements.name}</h2>
          </div>
          <div className="footer-copyright">
            <p>©{currentYear}</p>
          </div>
        </div>
      </div>
      
      <div className="color-bar">
        <div className="bar-segment teal"></div>
        <div className="bar-segment yellow"></div>
        <div className="bar-segment red"></div>
        <div className="bar-segment purple"></div>
      </div>
    </footer>
    </section>
  );
}

export default Footer;