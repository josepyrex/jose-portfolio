// Updated src/components/Header/Header.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';

function Header({ isResumeOpen, setIsResumeOpen }) {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/project/');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Desktop scroll detection (no minimizing)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Desktop behavior - only backdrop blur change
      if (window.innerWidth > 768) {
        setIsScrolled(currentScrollY > 10);
        return;
      }
      
      // Mobile behavior - minimize when scrolling down
      if (currentScrollY > 60) {
        setIsScrolled(true);
        if (currentScrollY > lastScrollY && currentScrollY > 120) {
          setIsMinimized(true); // Shrink when scrolling down
        }
      } else {
        setIsScrolled(false);
        setIsMinimized(false);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Handle mobile nav tap to expand
  const handleMobileNavTap = () => {
    if (window.innerWidth <= 768 && isMinimized) {
      setIsMinimized(false);
      // Auto-minimize after 3 seconds
      setTimeout(() => setIsMinimized(true), 3000);
    }
  };

  // Smooth scrolling function
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Handle resume click
  const handleResumeClick = (e) => {
    e.preventDefault();
    setIsResumeOpen(true);
  };

  return (
    <>
      {/* Desktop Header */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <span className="logo-text">piereks</span>
        </div>
        
        <nav className="nav desktop-nav">
          <ul className="nav-list">
            <li className="nav-item"><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>about</a></li>
            <li className="nav-item"><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>projects</a></li>
            {/* <li className="nav-item"><a href="#fun" onClick={(e) => scrollToSection(e, 'fun')}>fun</a></li> */}
            <li className="nav-item"><a href="#resume" onClick={handleResumeClick}>resume</a></li>
          </ul>
        </nav>
      </header>
      
      {/* Mobile Tab Bar Navigation - Only show when NOT on project pages */}
      {!isProjectPage && (
        <nav 
          className={`mobile-tab-nav ${isMinimized ? 'minimized' : ''}`}
          onClick={handleMobileNavTap}
        >
          <a href="#home" onClick={(e) => scrollToSection(e, 'hero')} className="tab-item">
            {/* CRT screen with a sine trace */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="4" width="18" height="13" rx="1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 10.5C7.3 7.5 8.7 7.5 10 10.5C11.3 13.5 12.7 13.5 14 10.5C15.3 7.5 16.7 7.5 18 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 21H15M12 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="tab-item">
            {/* Operator ID: geometric person */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="7.5" r="3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 21V20C5 16.134 8.13401 14 12 14C15.866 14 19 16.134 19 20V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="tab-item">
            {/* Test-pattern module grid */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="6.5" height="6.5" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="13.5" y="4" width="6.5" height="6.5" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="4" y="13.5" width="6.5" height="6.5" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          {/* <a href="#fun" onClick={(e) => scrollToSection(e, 'fun')} className="tab-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 13C10.4295 13.5741 10.9774 14.0492 11.6066 14.3929C12.2357 14.7367 12.9315 14.9411 13.6467 14.9923C14.3618 15.0435 15.0796 14.9404 15.7513 14.6898C16.4231 14.4392 17.0331 14.0471 17.54 13.54L21.12 9.95999C21.9457 9.12738 22.4141 8.0063 22.4141 6.83999C22.4141 5.67367 21.9457 4.55259 21.12 3.71999C20.2874 2.89427 19.1663 2.42578 18 2.42578C16.8337 2.42578 15.7126 2.89427 14.88 3.71999L14 4.59999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 11C13.5705 10.4259 13.0226 9.95082 12.3934 9.60706C11.7642 9.2633 11.0684 9.05886 10.3533 9.00769C9.63815 8.95652 8.92037 9.05961 8.24861 9.31017C7.57685 9.56073 6.96684 9.9529 6.45996 10.46L2.87996 14.04C2.05435 14.8726 1.58586 15.9937 1.58586 17.16C1.58586 18.3263 2.05435 19.4474 2.87996 20.28C3.71256 21.1056 4.83365 21.574 5.99996 21.574C7.16627 21.574 8.28736 21.1056 9.11996 20.28L9.99996 19.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a> */}
          <a href="#resume" onClick={handleResumeClick} className="tab-item">
            {/* Document with a pulse trace */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 15H9.5L11 12L13 17L14.5 15H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </nav>
      )}
    </>
  );
}

export default Header;