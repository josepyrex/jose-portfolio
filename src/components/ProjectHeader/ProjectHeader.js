// src/components/ProjectHeader/ProjectHeader.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectHeader.css';

function ProjectHeader({ projectTitle }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  
  // Detect scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate('/');
  };

  return (
    <header className={`project-header ${isScrolled ? 'project-header-scrolled' : ''}`}>
      <div className="project-header-container">
        {/* Left side - Back button */}
        <button className="project-back-btn" onClick={handleBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="back-text">Back</span>
        </button>

        {/* Center - Logo/Brand */}
        <div className="project-header-brand">
          <span className="project-logo-text">piereks</span>
          {projectTitle && (
            <>
              <span className="project-divider">/</span>
              <span className="project-title-text">{projectTitle}</span>
            </>
          )}
        </div>

        {/* Right side - Home link */}
        <button className="project-home-btn" onClick={goHome}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H3L12 3L21 12H19M5 12V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="home-text">Home</span>
        </button>
      </div>

      {/* Mobile version */}
      <div className="project-header-mobile">
        <button className="mobile-back-btn" onClick={handleBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="mobile-brand">
          <span className="mobile-logo-text">piereks</span>
        </div>

        <button className="mobile-home-btn" onClick={goHome}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H3L12 3L21 12H19M5 12V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default ProjectHeader;