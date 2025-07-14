// Updated src/components/Footer/Footer.js
import React, { useState, useEffect, useRef } from 'react';
import './Footer.css';

function Footer({ isResumeOpen, setIsResumeOpen }) { // Add props
  const currentYear = new Date().getFullYear();
  const [textElements, setTextElements] = useState({
    contact: "Let's Chat",
    email: "jose@piereks.com",
    links: "Links",
    resume: "Resume",
    music: "My Playlist ;)",
    github: "Github",
    instagram: "Instagram",
    message: "This website was built using React & Node.js. Thanks for visiting <3",
    name: "piereks.com"
  });
  
  const [animatingElements, setAnimatingElements] = useState({});
  const footerRef = useRef(null);
  
  const scrambleText = (key, originalText) => {
  if (animatingElements[key]) return;
  
  // Temporarily disable scroll restoration on mobile during animation
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    document.body.style.overflow = 'hidden';
  }
  
  setAnimatingElements(prev => ({ ...prev, [key]: true }));
  
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,./<>?';
  let iterations = 0;
  const maxIterations = isMobile ? 10 : 15; // Shorter animation on mobile
  
  const interval = setInterval(() => {
    if (iterations < maxIterations) {
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
      
      // Re-enable scroll
      if (isMobile) {
        document.body.style.overflow = 'unset';
      }
      
      setTimeout(() => {
        setAnimatingElements(prev => ({ ...prev, [key]: false }));
      }, 2000);
    }
  }, isMobile ? 50 : 70); // Faster animation on mobile
};
  
  // Handle resume click - Updated to open popup
  const handleResumeClick = (e) => {
    e.preventDefault();
    scrambleText('resume', 'Resume');
    setTimeout(() => {
      setIsResumeOpen(true); // Open popup instead of PDF
    }, 1500);
  };
  
  useEffect(() => {
    // Initial animations with staggered timing
    const originalTexts = {
      contact: "Let's Chat",
      email: "jose@piereks.com",
      links: "Links",
      resume: "Resume",
      music: "My Playlist ;)",
      github: "Github",
      instagram: "Instagram",
      message: "This website was built using React & Node.js. Thanks for visiting <3",
      name: "piereks.com"
    };
    
    // Stagger the animations
    setTimeout(() => scrambleText('contact', originalTexts.contact), 300);
    setTimeout(() => scrambleText('email', originalTexts.email), 500);
    setTimeout(() => scrambleText('links', originalTexts.links), 700);
    setTimeout(() => scrambleText('resume', originalTexts.resume), 900);
    setTimeout(() => scrambleText('music', originalTexts.music), 1100);
    setTimeout(() => scrambleText('Github', originalTexts.github), 1300);
    setTimeout(() => scrambleText('instagram', originalTexts.instagram), 1500);
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
              href="mailto:jose@piereks.com" 
              className="footer-email"
              onClick={(e) => {
                e.preventDefault();
                scrambleText('email', 'jose@piereks.com');
                setTimeout(() => {
                  window.location.href = "mailto:jose@piereks.com";
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
                  href="#resume" 
                  onClick={handleResumeClick} // Updated to use new handler
                >
                  <span className="link-circle teal"></span>
                  <span className="link-text">{textElements.resume}</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://open.spotify.com/playlist/3YGnyTVFnA9YnjFltHmtFD?si=b631bed2abe9494a" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    scrambleText('music', 'My Playlist ;)');
                    setTimeout(() => {
                      window.open('https://open.spotify.com/playlist/3YGnyTVFnA9YnjFltHmtFD?si=b631bed2abe9494a', '_blank');
                    }, 1500);
                  }}
                >
                  <span className="link-circle yellow"></span>
                  <span className="link-text">{textElements.music}</span>
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
                  href="https://instagram.com/josepyrex"
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    scrambleText('instagram', 'Instagram');
                    setTimeout(() => {
                      window.open('https://instagram.com/josepyrex', '_blank');
                    }, 1500);
                  }}
                >
                  <span className="link-circle red"></span>
                  <span className="link-text">{textElements.instagram}</span>
                  <span className="arrow">↗</span>
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