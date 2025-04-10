// Updated Header.js with new typography
import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="19" stroke="white" strokeWidth="2"/>
          <path d="M15 20H25M20 15V25" stroke="white" strokeWidth="2"/>
        </svg>
      </div>
      
      <div className="header-right">
        <div className="theme-toggle">
          <span className="moon">🌙</span>
          <label className="switch">
            <input type="checkbox" className="toggle-input" />
            <span className="slider"></span>
          </label>
        </div>
        
        <nav className="nav desktop-nav">
          <ul className="nav-list">
            <li className="nav-item"><a href="#about">about</a></li>
            <li className="nav-item"><a href="#experience">experience</a></li>
            <li className="nav-item"><a href="#projects">projects</a></li>
            <li className="nav-item"><a href="#fun">fun</a></li>
            <li className="nav-item"><a href="#resume">resume</a></li>
          </ul>
        </nav>

        <div className="mobile-menu-button" onClick={toggleMobileMenu}>
          <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-list">
          <li className="mobile-nav-item"><a href="#about" onClick={toggleMobileMenu}>about</a></li>
          <li className="mobile-nav-item"><a href="#experience" onClick={toggleMobileMenu}>experience</a></li>
          <li className="mobile-nav-item"><a href="#projects" onClick={toggleMobileMenu}>projects</a></li>
          <li className="mobile-nav-item"><a href="#fun" onClick={toggleMobileMenu}>fun</a></li>
          <li className="mobile-nav-item"><a href="#resume" onClick={toggleMobileMenu}>resume</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;