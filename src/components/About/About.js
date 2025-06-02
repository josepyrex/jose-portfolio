// Enhanced src/components/About/About.js with color accents

import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">Jose Piereks is a <span className="accent">software engineer</span> & <span className="accent">designer</span> transforming how artists and venues connect.</h2>
        </div>
        
        <div className="divider"></div>
        
        <div className="news-ticker-container">
          <div className="news-ticker-label">NEWS</div>
          <div className="news-ticker">
            <div className="fade-left"></div>
            <div className="news-ticker-content">
              <p>Currently developing Livenue, a revolutionary platform for artist-venue collaboration. — From event coordination to software engineering, bridging the gap between creativity and technology. — Building solutions that empower emerging artists and venue owners across NYC.</p>
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
              <p className="highlight-item">Full-Stack Development</p>
              <p className="highlight-item">Product Management</p>
              <p>UI/UX Design</p>
              <p className="highlight-item">Event Management</p>
            </div>
          </div>
          
          <div className="content-col">
            <h3 className="section-label">EXPERIENCE</h3>
            <div className="section-content experience-content">
              <div className="experience-item">
                <span className="experience-company highlight-item">Apple Inc.</span>
                <span className="experience-year">2024</span>
              </div>
              <div className="experience-item">
                <span className="experience-company">SuperFanz</span>
                <span className="experience-year">2023-24</span>
              </div>
              <div className="experience-item">
                <span className="experience-company highlight-item">Moosic Discovery</span>
                <span className="experience-year">2020-23</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="divider"></div>
        
        {/* OTHER THINGS I'M DOING section */}
        <div className="content-row">
          <h3 className="section-label">CURRENT FOCUS</h3>
          <div className="section-content">
            <div className="other-grid">
              <div className="other-item card">
                <h4>LiveNue (Stealth Mode) 🤫</h4>
                <p>Developing a revolutionary platform that transforms how artists discover, book, and collaborate with venues</p>
              </div>
              <div className="other-item card featured">
                <h4>Software Engineering Transition</h4>
                <p>Leveraging 4+ years of event coordination experience to build tech solutions for the music industry</p>
              </div>
              <div className="other-item card">
                <h4>Industry Innovation</h4>
                <p>Bridging the gap between creative talent and venue management through thoughtful technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;