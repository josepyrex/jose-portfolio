// Enhanced src/components/About/About.js with color accents

import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">Jose Francisco Perez Martinez is a <span className="accent">bilingual product manager</span> <span className="accent"></span> specializing in AI-powered solutions, community growth, and transforming ideas into products.</h2>
        </div>
        
        <div className="divider"></div>
        
        <div className="news-ticker-container">
          <div className="news-ticker-label">NEWS</div>
          <div className="news-ticker">
            <div className="fade-left"></div>
            <div className="news-ticker-content">
              <p>Currently building Livenue, a musician-venue booking platform for NYC. — Bridging the gap between creativity and technology. — Building things that matter to artists, one conversation at a time. —</p>
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
              <p className="highlight-item">Product Strategy & Community Growth</p>
              <p className="highlight-item">AI Implementation & Development</p>
              <p>Brand Building & Marketing</p>
              <p className="highlight-item">Technical Problem Solving</p>
            </div>
          </div>
          
          <div className="content-col">
            <h3 className="section-label">EXPERIENCE</h3>
            <div className="section-content experience-content">
              <div className="experience-item">
                <span className="experience-company">Apple Retail</span>
                <span className="experience-year">2024-</span>
              </div>
              <div className="experience-item">
                <span className="experience-company highlight-item">SuperFanz</span>
                <span className="experience-year">2023-</span>
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
                <h4>Livenue Platform</h4>
                <p>Building something I wish existed when I was coordinating events, a way for musicians and venues to actually find each other without the usual headaches. Currently focusing on the MVP and research.</p>
              </div>
              <div className="other-item card featured">
                <h4>AI That Works For You</h4>
                <p>Successfully shipped <a href="https://ebookgen.app">ebookgen.app</a>. A Python script that turns user input into actual PDFs using ChatGPT API, proving ability to implement complex technical solutions.</p>
              </div>
              <div className="other-item card">
                <h4>Learning by Building</h4>
                <p>Using AI as my coding mentor to bridge the gap between product vision and technical execution. Turns out the best way to understand new tech is to build something real with it.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;