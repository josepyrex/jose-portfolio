// src/components/Resume/Resume.js
import React, { useState, useEffect } from 'react';
import './Resume.css';

function Resume({ isOpen, onClose }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      setAnimationKey(prev => prev + 1); // Force color bar animation restart
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Jose_Francisco_Perez_Martinez_Resume.pdf';
    link.click();
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <div 
      className={`resume-overlay ${isOpen ? 'resume-overlay-open' : ''}`}
      onClick={handleBackdropClick}
    >
      <div className={`resume-modal ${isOpen ? 'resume-modal-open' : ''}`}>
        {/* Header */}
        <div className="resume-header">
          <div className="resume-header-left">
            <h2 className="resume-title">Jose Francisco Perez Martinez</h2>
            <p className="resume-subtitle">Product Manager & Community Builder</p>
          </div>
          <button className="resume-close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="resume-content">
          {/* Contact Section */}
          <div className="resume-section">
            <div className="resume-section-header">
              <div className="resume-dot resume-dot-teal"></div>
              <h3>Contact</h3>
            </div>
            <div className="resume-section-content">
              <div className="resume-contact-grid">
                <div className="resume-contact-item">
                  <span className="resume-contact-label">Email</span>
                  <a href="mailto:jose@piereks.com" className="resume-contact-value">jose@piereks.com</a>
                </div>
                <div className="resume-contact-item">
                  <span className="resume-contact-label">Phone</span>
                  <a href="tel:9548046810" className="resume-contact-value">(954)804-6810</a>
                </div>
                <div className="resume-contact-item">
                  <span className="resume-contact-label">Location</span>
                  <span className="resume-contact-value">Brooklyn, NY</span>
                </div>
                <div className="resume-contact-item">
                  <span className="resume-contact-label">LinkedIn</span>
                  <a href="https://linkedin.com/in/josepyrex"className="resume-contact-value">/in/josepyrex</a>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="resume-section">
            <div className="resume-section-header">
              <div className="resume-dot resume-dot-yellow"></div>
              <h3>Experience</h3>
            </div>
            <div className="resume-section-content">
              <div className="resume-experience-item">
                <div className="resume-experience-header">
                  <div>
                    <h4 className="resume-job-title">Specialist & Technical Consultant</h4>
                    <p className="resume-company">Apple Inc.</p>
                  </div>
                  <span className="resume-date">Jun 2024 - Present</span>
                </div>
                <p className="resume-description">
                  Deliver comprehensive technical support with 99/100 satisfaction rating. Generated $1M in yearly sales through consultative customer interactions and technical demonstrations.
                </p>
              </div>

              <div className="resume-experience-item">
                <div className="resume-experience-header">
                  <div>
                    <h4 className="resume-job-title">Co-Founder & Operations Director</h4>
                    <p className="resume-company">eme swim</p>
                  </div>
                  <span className="resume-date">Mar 2024 - Present</span>
                </div>
                <p className="resume-description">
                  Co-founded international swimwear e-commerce business featured at Miami Swim Week. Coordinated manufacturing transition from China to Colombia, improving quality standards and ethical sourcing.
                </p>
              </div>

              <div className="resume-experience-item">
                <div className="resume-experience-header">
                  <div>
                    <h4 className="resume-job-title">Product Manager</h4>
                    <p className="resume-company">SuperFanz</p>
                  </div>
                  <span className="resume-date">May 2022 - Jun 2024</span>
                </div>
                <p className="resume-description">
                  Built company website and handled UX design while coordinating between design, marketing, and engineering teams. Implemented collaboration tools that improved team productivity by 60%.
                </p>
              </div>

              <div className="resume-experience-item">
                <div className="resume-experience-header">
                  <div>
                    <h4 className="resume-job-title">Founder & Community Manager</h4>
                    <p className="resume-company">Moosic Discovery</p>
                  </div>
                  <span className="resume-date">Jan 2020 - May 2023</span>
                </div>
                <p className="resume-description">
                  Built music discovery website and recruited team through LinkedIn job posting that received 80+ applications. Launched platform that reached 10K visitors in first month.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="resume-section">
            <div className="resume-section-header">
              <div className="resume-dot resume-dot-purple"></div>
              <h3>Skills</h3>
            </div>
            <div className="resume-section-content">
              <div className="resume-skills-grid">
                <div className="resume-skill-category">
                  <h5>Languages</h5>
                  <ul>
                    <li>English (Fluent)</li>
                    <li>Spanish (Fluent)</li>
                  </ul>
                </div>
                <div className="resume-skill-category">
                  <h5>AI & Automation</h5>
                  <ul>
                    <li>OpenAI GPT/DALL-E APIs</li>
                    <li>Claude Code</li>
                    <li>Prompt Engineering</li>
                  </ul>
                </div>
                <div className="resume-skill-category">
                  <h5>Programming & Dev</h5>
                  <ul>
                    <li>HTML/CSS, JavaScript</li>
                    <li>Next.js, WordPress</li>
                    <li>Webflow, Shopify Liquid</li>
                  </ul>
                </div>
                <div className="resume-skill-category">
                  <h5>Business Tools</h5>
                  <ul>
                    <li>HubSpot, Google Analytics</li>
                    <li>Notion, Trello, Stripe</li>
                    <li>MailChimp, CRM Management</li>
                  </ul>
                </div>
                <div className="resume-skill-category">
                  <h5>Design</h5>
                  <ul>
                    <li>Figma, Adobe Photoshop</li>
                    <li>UX/UI Design</li>
                    <li>Framer Motion</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="resume-section">
            <div className="resume-section-header">
              <div className="resume-dot resume-dot-red"></div>
              <h3>Education</h3>
            </div>
            <div className="resume-section-content">
              <div className="resume-experience-item">
                <div className="resume-experience-header">
                  <div>
                    <h4 className="resume-job-title">BA Communication Arts & Business</h4>
                    <p className="resume-company">Florida International University</p>
                  </div>
                  <span className="resume-date">2018 - 2022</span>
                </div>
              </div>
              <div className="resume-experience-item">
                <div className="resume-experience-header">
                  <div>
                    <h4 className="resume-job-title">Visiting Student</h4>
                    <p className="resume-company">University of Massachusetts - Amherst</p>
                  </div>
                  <span className="resume-date">2019 - 2020</span>
                </div>
                <p className="resume-description">
                  National Student Exchange Program
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="resume-footer">
          <div className="resume-footer-left">
            <span>Last updated: July 2025</span>
          </div>
          <div className="resume-footer-right">
            <button className="resume-download-btn" onClick={handleDownload}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1V11M8 11L4 7M8 11L12 7M1 15H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Download PDF
            </button>
          </div>
        </div>

        {/* Animated Color Bar */}
        <div className="resume-color-bar" key={animationKey}>
          <div className="resume-bar-segment resume-bar-teal"></div>
          <div className="resume-bar-segment resume-bar-yellow"></div>
          <div className="resume-bar-segment resume-bar-red"></div>
          <div className="resume-bar-segment resume-bar-purple"></div>
        </div>
      </div>
    </div>
  );
}

export default Resume;