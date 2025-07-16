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
                  <span className="resume-contact-value">jose@piereks.com</span>
                </div>
                <div className="resume-contact-item">
                  <span className="resume-contact-label">Phone</span>
                  <span className="resume-contact-value">(954) 804-6810</span>
                </div>
                <div className="resume-contact-item">
                  <span className="resume-contact-label">Location</span>
                  <span className="resume-contact-value">Brooklyn, NY</span>
                </div>
                <div className="resume-contact-item">
                  <span className="resume-contact-label">Portfolio</span>
                  <span className="resume-contact-value">piereks.com</span>
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
                   Maintained 99/100 satisfaction ratings while generating $1M+ in yearly sales by treating every customer interaction like a conversation, not a transaction.
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
                  Co-founded an swimwear brand that went from idea to Miami Swim Week in under a year. Managed everything from Shopify operations to bilingual customer service and international manufacturing.
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
                  Led the transformation concept of a toy company into a luxury collectible brand. Built the company website and handled UX design while keeping design, marketing, and engineering teams aligned.
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
                  Built a music discovery platform and lead a team 20+ volunteers grew to 10K monthly visitors by focusing on human-curated recommendations.
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
            <span>Last updated: January 2025</span>
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