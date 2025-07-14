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
          <a href="#" onClick={(e) => scrollToSection(e, 'home')} className="tab-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H3L12 3L21 12H19M5 12V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="tab-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="tab-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.27 6.96L12 12.01L20.73 6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          {/* <a href="#fun" onClick={(e) => scrollToSection(e, 'fun')} className="tab-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 13C10.4295 13.5741 10.9774 14.0492 11.6066 14.3929C12.2357 14.7367 12.9315 14.9411 13.6467 14.9923C14.3618 15.0435 15.0796 14.9404 15.7513 14.6898C16.4231 14.4392 17.0331 14.0471 17.54 13.54L21.12 9.95999C21.9457 9.12738 22.4141 8.0063 22.4141 6.83999C22.4141 5.67367 21.9457 4.55259 21.12 3.71999C20.2874 2.89427 19.1663 2.42578 18 2.42578C16.8337 2.42578 15.7126 2.89427 14.88 3.71999L14 4.59999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 11C13.5705 10.4259 13.0226 9.95082 12.3934 9.60706C11.7642 9.2633 11.0684 9.05886 10.3533 9.00769C9.63815 8.95652 8.92037 9.05961 8.24861 9.31017C7.57685 9.56073 6.96684 9.9529 6.45996 10.46L2.87996 14.04C2.05435 14.8726 1.58586 15.9937 1.58586 17.16C1.58586 18.3263 2.05435 19.4474 2.87996 20.28C3.71256 21.1056 4.83365 21.574 5.99996 21.574C7.16627 21.574 8.28736 21.1056 9.11996 20.28L9.99996 19.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a> */}
          <a href="#resume" onClick={handleResumeClick} className="tab-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </nav>
      )}
    </>
  );
}

export default Header;