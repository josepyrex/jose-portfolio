// src/components/ProjectDetail/ProjectDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer'; // Import the main Footer component
import './ProjectDetail.css';

function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Add this to prevent scroll handling issues
    const handleScroll = () => {
      // This is just to ensure the component remains mounted during scroll
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [lightboxImage, setLightboxImage] = useState(null);

  const getBannerComponent = (project) => {
    if (project.liveLink) {
      // Live project banner
      return (
        <div className="live-banner">
          <div className="banner-content">
            <div className="banner-indicator">
              <span className="live-dot"></span>
              <span>LIVE</span>
            </div>
            <div className="banner-text">
              This project is live at <a href={project.liveLink} target="_blank" rel="noopener noreferrer">{new URL(project.liveLink).hostname}</a>
              <svg className="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      );
    }
    
    // Handle different project statuses
    switch (project.projectStatus) {
      case 'unfunded':
        return (
          <div className="unfunded-banner">
            <div className="banner-content">
              <div className="banner-indicator">
                <span className="unfunded-dot"></span>
                <span>UNFUNDED</span>
              </div>
              <div className="banner-text">
                Strategic work and product vision — seeking funding or the right opportunity
                {project.conceptLink && (
                  <>
                    — <a href={project.conceptLink} target="_blank" rel="noopener noreferrer">View concept</a>
                    <svg className="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </div>
            </div>
          </div>
        );
        
      case 'prototype':
        return (
          <div className="prototype-banner">
            <div className="banner-content">
              <div className="banner-indicator">
                <span className="prototype-dot"></span>
                <span>PROTOTYPE</span>
              </div>
              <div className="banner-text">
                Working prototype demonstrating core functionality and user experience
                {project.conceptLink && (
                  <>
                    — <a href={project.conceptLink} target="_blank" rel="noopener noreferrer">View prototype</a>
                    <svg className="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </div>
            </div>
          </div>
        );
        
      case 'concept':
      default:
        return (
          <div className="concept-banner">
            <div className="banner-content">
              <div className="banner-indicator">
                <span className="concept-dot"></span>
                <span>CONCEPT</span>
              </div>
              <div className="banner-text">
                Strategic design and product thinking showcased through comprehensive case study
                {project.conceptLink && (
                  <>
                    — <a href={project.conceptLink} target="_blank" rel="noopener noreferrer">View concept</a>
                    <svg className="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </div>
            </div>
          </div>
        );
    }
  };
  
  // Sample project data - replace with your actual projects
  const projectsData = {
    'superfanz': {
      title: 'Creating a Brand',
      company: 'SuperFanz',
      heroImage: '/images/Superfanz/superSkematics.png',
      projectStatus: 'unfunded',
      conceptLink: 'https://thesuperfanz.com',
      ambition: 'How might we transform a simple toy into a luxury collectible that resonates with adult collectors and art enthusiasts?',
      solution: 'Product Strategy & Brand Positioning',
      role: 'Project Manager & Web Developer',
      credits: 'Freddy Tutiven, Mariajose Cerebros',
      description: 'Superfanz began as a basic LED fan toy targeting children. Through strategic product repositioning, premium material upgrades, and innovative artist collaborations, I transformed it into a luxury collectible brand targeting adult art collectors. This pivot resulted in a 300% price increase from $25 to $100+ and established a sustainable limited-edition drop model.',
      challenges: [
    {
      id: 1,
      title: 'The product looked cheap and toy-like, failing to attract our target demographic of adult collectors',
      designSections: [
        {
          label: 'Old Design',
          images: [
            {
              src: '/images/Superfanz/oldFandy.png',
              alt: 'Original cheap plastic toy design',
              caption: 'Basic LED fan toy with cheap materials and battery compartment'
            }
          ]
        },
        {
          label: 'Proposed Design',
          images: [
            {
              src: '/images/Superfanz/newFandy.png',
              alt: 'Premium superhero collectible design',
              caption: 'Luxury collectible with premium materials and USB-C charging'
            }
          ]
        }
      ],
      solution: 'Completely reimagined the product with premium materials, rechargeable USB-C battery, customizable LED animations, and sleek design language inspired by luxury collectibles like Superplastic figures. This transformation justified a 4x price increase to $100+.'
    },
    {
      id: 2,
      title: 'The website and branding felt childish and failed to communicate luxury or emotional connection',
      designSections: [
        {
          label: 'Old Website',
          images: [
            {
              src: '/images/Superfanz/oldsiteHome.png',
              alt: 'Original childish website homepage',
              caption: 'Toy-focused design with bright colors'
            },
            {
              src: '/images/Superfanz/oldsiteProduct.png',
              alt: 'Product page',
              caption: 'The product page pre-redesign'
            }
          ]
        },
        {
          label: 'Redesigned Website',
          images: [
            {
              src: '/images/Superfanz/newsiteHome.png',
              alt: 'Apple-inspired premium website redesign',
              caption: 'Clean, minimalist design with emphasis on the brand'
            },
            {
              src: '/images/Superfanz/newsiteHome2.png',
              alt: 'Apple-inspired premium website redesign',
              caption: 'Last message on scroll down on the home webpage, with fluid animations.'
            },
            {
              src: '/images/Superfanz/newsiteProduct.png',
              caption: 'The new re-designed product page, efforless and clean with personal description.'
            }
          ]
        }
      ],
      solution: 'Redesigned the entire digital experience using Apple\'s design principles - clean layouts, premium photography, and storytelling that positioned each Superfanz as a unique character. Created emotional narratives around collecting and self-expression rather than just features.'
    },
    {
      id: 3,
      title: 'How do we create buzz and demand for a completely repositioned product with no existing collector audience?',
      designSections: [
        {
          label: 'Traditional Marketing Approach',
          images: [
            {
              src: '/images/Superfanz/fandySports.png',
              alt: 'Basic product advertising approach',
              caption: 'Pre-production model with no collaborations or complex'
            }
          ]
        },
        {
          label: 'Artist Collaboration Strategy',
          images: [
            {
              src: '/images/Superfanz/fandyArtists.jpg',
              alt: 'Artist collaboration program showcase',
              caption: 'Limited edition artist-primed Superfanz collectible'
            }
          ]
        }
      ],
      solution: 'Launched an artist collaboration program sending blank Superfanz to designers who hand-painted custom designs. We then produced limited runs of these artist editions, leveraging their fanbase for authentic marketing while creating scarcity-driven demand among collectors.'
    }
  ]
  },
    'lyft': {
      title: 'Ride-Sharing Redesign',
      company: 'Lyft',
      heroImage: '/images/project2-hero.jpg',
      liveLink: 'https://lyft.com',
      ambition: 'How might we create a more seamless experience for riders and drivers?',
      solution: 'UI/UX',
      role: 'UI Designer',
      credits: 'Lyft Design Team',
      description: 'Working with Lyft to reimagine the ride-sharing experience with a focus on driver autonomy and rider clarity.',
      challenges: [
        {
          id: 1,
          title: 'Drivers needed more control over their scheduling and route selection',
          oldDesign: '/images/project2-old-design.jpg',
          proposedDesign: '/images/project2-new-design.jpg',
          solution: 'Created an intuitive scheduling system that allows drivers to plan their routes and optimize their time'
        }
      ]
    },
    'figma-desk': {
      title: 'Digital Workspace',
      company: 'Figma',
      heroImage: '/images/project3-hero.jpg',
      liveLink: 'https://figma.com',
      ambition: 'How might we simplify the digital design workspace for better collaboration?',
      solution: 'UI/UX',
      role: 'Product Designer',
      credits: 'Figma Design Team',
      description: 'Streamlining the Figma interface to improve workflow and collaboration between designers and stakeholders.',
      challenges: [
        {
          id: 1,
          title: 'Design collaboration was becoming complex with too many panels and menus',
          oldDesign: '/images/project3-old-design.jpg',
          proposedDesign: '/images/project3-new-design.jpg',
          solution: 'Simplified the interface with contextual controls that appear only when needed'
        }
      ]
    },
    'duet': {
      title: 'Connecting Donors and Beneficiaries',
      company: 'Duet',
      heroImage: '/images/project4-hero.jpg',
      liveLink: 'https://duet.org',
      ambition: 'How might we create meaningful connections between donors and those they help?',
      solution: 'UI/UX',
      role: 'Design Lead',
      credits: 'Duet Foundation Team',
      description: 'Designing a platform that brings transparency and personal connection to charitable giving.',
      challenges: [
        {
          id: 1,
          title: 'Donors felt disconnected from the impact of their contributions',
          oldDesign: '/images/project4-old-design.jpg',
          proposedDesign: '/images/project4-new-design.jpg',
          solution: 'Created a storytelling framework that shows real-time updates and impact stories'
        }
      ]
    }
  };
  
  // Try to find the project data
  const project = projectsData[slug] || {
    title: "Project Not Found",
    company: "",
    heroImage: "/images/placeholder.jpg",
    description: "This project could not be found. Please return to the projects page."
  };

  // Handle back button click
  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="project-detail">
      <button className="back-button" onClick={handleBack}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Back to Projects</span>
      </button>
      
      <div className="project-hero">
        <img src={project.heroImage} alt={project.title} className="project-hero-image" />
      </div>
      
      {/* Use the getBannerComponent function here */}
      {getBannerComponent(project)}
    
      
      {/* Project Info */}
      <div className="project-content-container">
        <div className="project-content">
          <div className="project-intro">
            <div className="project-title-section">
              <h1 className="project-title">{project.title}</h1>
              <h2 className="project-company">{project.company}</h2>
            </div>
            
            <div className="project-meta">
              {project.ambition && (
                <div className="meta-section">
                  <h3 className="meta-title">Ambition</h3>
                  <p>{project.ambition}</p>
                </div>
              )}
              
              {project.solution && (
                <div className="meta-section">
                  <h3 className="meta-title">Solution</h3>
                  <p>{project.solution}</p>
                </div>
              )}
              
              {project.role && (
                <div className="meta-section">
                  <h3 className="meta-title">Role</h3>
                  <p>{project.role}</p>
                </div>
              )}
              
              {project.credits && (
                <div className="meta-section">
                  <h3 className="meta-title">Credits</h3>
                  <p>{project.credits}</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="project-description">
            <p>{project.description}</p>
          </div>
          
          {/* Challenges */}
          {project.challenges && project.challenges.map((challenge) => (
          <div className="project-challenge" key={challenge.id}>
            <div className="challenge-header">
              <div className="challenge-indicator">
                <span className="challenge-dot"></span>
                <span className="challenge-label">Challenge {challenge.id}</span>
              </div>
              <h2 className="challenge-title">{challenge.title}</h2>
            </div>
              
              
             {/* Render multiple design sections */}
            {challenge.designSections && challenge.designSections.map((section, sectionIndex) => (
              <div className="design-section" key={sectionIndex}>
                <h3 className="design-label">{section.label}</h3>
                
                {/* Image grid for multiple images */}
                <div className={`design-images ${section.images.length > 2 ? 'grid-three' : section.images.length === 2 ? 'grid-two' : 'single'}`}>
                  {section.images.map((image, imageIndex) => (
                    <div className="design-image-item" key={imageIndex}>
                      <div className="design-image-container">
                        <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="design-image" 
                        onClick={() => setLightboxImage(image)}
                        style={{ cursor: 'pointer' }}
                      />
                      </div>
                      {image.caption && (
                        <p className="image-caption">{image.caption}</p>
                      )}
                    </div>
                  ))}
                </div>
                {lightboxImage && (
                <div className="lightbox" onClick={() => setLightboxImage(null)}>
                  <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                    <img src={lightboxImage.src} alt={lightboxImage.alt} />
                    <button className="lightbox-close" onClick={() => setLightboxImage(null)}>×</button>
                    {lightboxImage.caption && <p className="lightbox-caption">{lightboxImage.caption}</p>}
                  </div>
                </div>
              )}
              </div>
    ))}
    
    {/* Solution text */}
    {challenge.solution && (
      <div className="solution-section">
        <p className="design-solution">{challenge.solution}</p>
      </div>
    )}
  </div>
))}
        </div>
      </div>
      
      {/* Thank You Section */}
      <div className="thank-you-section">
        <p>Thank you for reading!</p>
      </div>
      
      {/* Use the main Footer component */}
      <Footer />
    </div>
  );
}

export default ProjectDetail;