// Enhanced src/components/About/About.js with color accents

import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">Jose Piereks is a <span className="accent">developer</span> & <span className="accent">designer</span> creating innovative solutions.</h2>
        </div>
        
        <div className="divider"></div>
        
        <div className="news-ticker-container">
          <div className="news-ticker-label">NEWS</div>
          <div className="news-ticker">
            <div className="fade-left"></div>
            <div className="news-ticker-content">
              <p>Currently seeking new opportunities to collaborate on exciting projects. — Building interactive web applications with React and modern JavaScript. — Exploring new design systems and UI frameworks. — Learning advanced animation techniques. — Currently seeking new opportunities to collaborate on exciting projects.</p>
            </div>
            <div className="fade-right"></div>
          </div>
        </div>
        
        <div className="divider"></div>
        
        {/* WHAT I DO and EXPERIENCE on the same line */}
        <div className="main-content-row">
          <div className="content-col">
            <h3 className="section-label">WHAT I DO</h3>
            <div className="section-content">
              <p className="highlight-item">Web Development</p>
              <p>UI/UX Design</p>
              <p className="highlight-item">Responsive Interfaces</p>
              <p>Interactive Applications</p>
            </div>
          </div>
          
          <div className="content-col">
            <h3 className="section-label">EXPERIENCE</h3>
            <div className="section-content experience-content">
              <div className="experience-item">
                <span className="experience-company highlight-item">Company A</span>
                <span className="experience-year">2022</span>
              </div>
              <div className="experience-item">
                <span className="experience-company">Company B</span>
                <span className="experience-year">2021</span>
              </div>
              <div className="experience-item">
                <span className="experience-company highlight-item">Company C</span>
                <span className="experience-year">2020-21</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="divider"></div>
        
        {/* OTHER THINGS I'M DOING section */}
        <div className="content-row">
          <h3 className="section-label">OTHER THINGS I'M DOING</h3>
          <div className="section-content">
            <div className="other-grid">
              <div className="other-item card">
                <h4>Learning new technologies</h4>
                <p>Exploring the latest frameworks and tools</p>
              </div>
              <div className="other-item card featured">
                <h4>Building side projects</h4>
                <p>Creating innovative solutions in my spare time</p>
              </div>
              <div className="other-item card">
                <h4>Contributing to open source</h4>
                <p>Giving back to the community through code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;