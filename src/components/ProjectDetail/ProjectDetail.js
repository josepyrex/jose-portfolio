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
      ambition: 'How might we transform a revolutionary toy into a luxury collectible that resonates with adult collectors and art enthusiasts?',
      solution: 'Product Strategy & Brand Positioning',
      role: 'Project Manager & Web Developer',
      tools: 'Webflow, Notion',
      credits: 'Freddy Tutiven, Mariajose Cerebros',
      description: 'Superfanz began as a basic LED fan toy targeting children. Through strategic product repositioning, premium material upgrades, and innovative artist collaborations, we transformed it into a luxury collectible brand targeting adult art collectors. This pivot resulted in a 300% price increase from $25 to $100+ and established a sustainable limited-edition drop model.',
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
      solution: 'Redesigned the entire digital experience using Apple\'s design principles: clean layouts, premium images, and storytelling that positioned Superfanz as a unique brand.'
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
      solution: 'Launched an artist collaboration program sending blank Superfanz figures to designers who would then hand-paint custom designs. We then would produce limited runs of these artist editions, leveraging their fanbase for authentic marketing while creating scarcity-driven demand among collectors.'
    },
    {
      id: 4,
      title: 'Design, marketing, and engineering teams were working in silos, creating inconsistent product messaging and duplicated efforts.',
      // designSections: [
      //   {
      //     label: 'Traditional Marketing Approach',
      //     images: [
      //       {
      //         src: '/images/Superfanz/fandySports.png',
      //         alt: 'Basic product advertising approach',
      //         caption: 'Pre-production model with no collaborations or complex'
      //       }
      //     ]
      //   },
      //   {
      //     label: 'Artist Collaboration Strategy',
      //     images: [
      //       {
      //         src: '/images/Superfanz/fandyArtists.jpg',
      //         alt: 'Artist collaboration program showcase',
      //         caption: 'Limited edition artist-primed Superfanz collectible'
      //       }
      //     ]
      //   }
      // ],
      solution: 'Implemented integrated project management system using Trello boards with cross-team visibility. Established weekly all-hands meetings and created shared design system with component library accessible to all teams.'
    }
  ]
  },
    'emeswim': {
      title: 'Helping a friend\'s vision come true',
      company: 'eme swim',
      heroImage: '/images/emeswim/miami.png',
      projectStatus: "",
      liveLink: 'https://emeswim.com',
      ambition: "How might we create swimwear that embodies both Miami's vibrant energy and ethical manufacturing practices?",
      solution: 'Website Design, Strategic Marketing',
      role: 'Co-Founder & Operations Director',
      tools: 'Shopify Liquid, Meta Ads',
      credits: 'Lindsey Emery',
      description: "What started as a friend's design vision became a journey of discovering authentic brand voice and community building. From navigating Chinese factories to finding our home in Colombian craftsmanship, to creating a brand from scratch, this project taught me that genuine connection beats polished marketing every time.",
      challenges: [
        {
          id: 1,
          title: 'As we grew, the ethical implications of our Chinese manufacturing became harder to ignore. Our values and our supply chain were pulling in different directions.',
          oldDesign: '/images/project2-old-design.jpg',
          proposedDesign: '/images/project2-new-design.jpg',
          solution: 'Embarked on a journey to find manufacturing partners who shared our values. Researched 5+ ethical manufacturers across Latin America, conducted virtual factory tours, and found our perfect match in Colombia.'
        },
        {
          id: 2,
          title: "Creating a brand from nothing, originally called \"Davie Swim,\" the name felt disconnected from the founder's story and lacked the emotional resonance needed to build genuine connection.",
          oldDesign: '/images/project2-old-design.jpg',
          proposedDesign: '/images/project2-new-design.jpg',
          solution: 'Transformed the entire brand identity into "Emeswim," weaving the founder\'s personal narrative and last name into the brand. Completely overhauled the website to tell the origin story, why these swimsuits matter, what drives the creation process, and the authentic passion behind each piece.'
        },
        {
          id: 3,
          title: "Growing a customer base felt like shouting into the void and without established credibility or visibility, potential customers had no reason to trust or notice us.",
          designSections: [
            {
              label: 'Makeshift Photos',
              images: [
                {
                  src: '/images/emeswim/beach.jpg',
                  caption: ''
                },
                {
                  src: '/images/emeswim/711.jpeg',
                  alt: 'Product page',
                  caption: '7/11 promotion'
                }
              ]
            },
            {
              label: 'Miami Swim Week',
              images: [
                {
                  src: '/images/emeswim/msw1.jpeg',
                  alt: '',
                  caption: ''
                },
                 {
                  src: '/images/emeswim/msw2.jpeg',
                  alt: '',
                  caption: ''
                },
                 {
                  src: '/images/emeswim/msw3.jpeg',
                  alt: '',
                  caption: ''
                }
              ]
            }
          ],
          solution: 'Turned constraints into creativity by recruiting volunteer models who believed in the vision. Shot authentic lifestyle photos that captured real people in real moments, launched targeted ad campaigns, and cold-DMed influencers with intent and stories rather than generic pitches. Through this initiative, we built enough buzz to grow our following from 0 to 1000+ in a few months and receive an invitation to Miami Swim Week The Shows showing natural storytelling is far superior than a marketing budget'
        }
      ]
    },
    'moosic': {
      title: 'Building Community Through Music',
      company: 'Moosic Discovery',
      heroImage: '/images/moosic/julia.png',
      projectStatus: '',
      liveLink: 'https://moosicdiscovery.com',
      ambition: 'How might we create a space where emerging artists find their audience and music lovers discover their next obsession?',
      solution: 'Community-Driven Music Discovery Platform',
      role: 'Founder & Community Architect',
      tools: 'Wordpress, HTML, CSS, JS, MailChimp, Trello, Discord',
      credits: 'All of my writers and editors',
      description: 'Music discovery felt broken and algorithms were creating echo chambers while incredible artists remained invisible. I built Moosic Discovery as a human-curated platform that connected emerging talent with passionate listeners. What started as a personal project became a website with 10K monthly visitors discovering their new favorite artists, and all during a global pandemic.',
      challenges: [
        {
          id: 1,
          title: 'Needed to assemble a passionate team of 10 music lovers with zero budget and the clock ticking on our launch timeline.',
          designSections: [
            {
              label: 'Original LinkedIn Posting',
              images: [
                {
                  src: '/images/moosic/linkedin.png',
                  caption: ''
                },
              ]
            }
          ],
          solution: 'Turned LinkedIn into a talent discovery platform. Created a compelling mission-driven post that attracted 80+ applicants who believed in the vision. Conducted 20 interviews to find people who shared the passion, not just the skills.'
        },
        {
          id: 2,
          title: 'Coordinating 10 remote team members felt like conducting an orchestra where everyone was in different time zones and playing different songs.',
          oldDesign: '/images/project3-old-design.jpg',
          proposedDesign: '/images/project3-new-design.jpg',
          solution: 'Created structure that worked with people\'s lives, not against them. Bi-weekly all-hands became our heartbeat, Discord channels kept the daily energy flowing, and individual check-ins ensured nobody felt lost in the mix. Assigned editors to different groups of writers, allowing me to focus on the website and brand.'
        },
        {
          id: 3,
          title: 'Launching with zero marketing budget meant we needed to create genuine buzz, not just noise.',
          designSections: [
            {
              label: 'Piece written on moosic',
              images: [
                {
                  src: '/images/moosic/blog.png',
                  caption: ''
                },
              ]
            },
            {
              label: 'Collaboration with Fashion Magazine perime in Boston',
              images: [
                {
                  src: '/images/moosic/promo.png',
                  caption: ''
                },
              ]
            }
          ],
          solution: 'Built partnerships with other magazines who believed in supporting emerging artists. Created content that artists wanted to share because it genuinely elevated their work, turning our featured musicians into our marketing team. Sold stickers to support server costs and welcomed community submissions to find new talent.'
        }
      ]
    },
    'ebookgen': {
      title: 'Teaching Machines to Create',
      company: 'AI-Powered PDF Generator',
      projectStatus: '',
      heroImage: '/images/ebookgen/homepage.png',
      liveLink: 'https://ebookgen.app',
      ambition: 'How might we democratize book creation by letting anyone transform their ideas into professionally formatted ebooks?',
      solution: 'AI-Powered Content Generation & PDF maker.',
      role: 'Solo Developer & Product Designer',
      tools: 'Python, React, Render, npm, Stripe, AWS',
      credits: 'ChatGPT, Claude',
      description: 'The gap between having an idea and creating something tangible felt too wide. I built an AI-powered tool that turns simple prompts into complete ebooks with covers, chapters, formatting, everything. Wanted to create a project that I felt proud of yet would be useful to others.',
      challenges: [
        {
          id: 1,
          title: 'AI-generated content looked like it was assembled by a robot and the inconsistent formatting made every PDF feel amateur and disconnected.',
          designSections: [
            {
              label: 'Example of a generated Ebook',
              images: [
                {
                  src: '/images/ebookgen/cover.png',
                  caption: 'Cover w/ image generated by DALL-E'
                },
                {
                  src: '/images/ebookgen/table.png',
                  caption: 'Table of contents'
                },
              ]
            },
            {
              label: '',
              images: [
                {
                  src: '/images/ebookgen/pageex.png',
                  caption: 'example of a page'
                },
                {
                  src: '/images/ebookgen/coverpreview.png',
                  caption: 'if generating a preview, cover changes'
                },
              ]
            }
          ],
          solution: 'Created a design system the program would undestand. Templating that automatically structures content, organizing algorithms that create logical flow, and quality checks that ensure every PDF looks intentionally crafted.'
        },
        {
          id: 2,
          title: 'Connecting Python backend logic with Stripe payment processing and managing deployment servers required orchestrating technologies I\'d never touched before.',
          oldDesign: '/images/project4-old-design.jpg',
          proposedDesign: '/images/project4-new-design.jpg',
          solution: 'Approached each technical challenge systematically, leveraging AI tools not just for code generation but as learning companions. Built the payment flow step by step, tested extensively in sandbox environments, and deployed incrementally to catch issues early. Through this I was able to implemented full-stack functionality with secure payment processing and reliable deployment, demonstrating that methodical learning can overcome experience gaps'
        },
        {
          id: 3,
          title: 'Creating something functional was only half the battle but getting people to discover, try, and find genuine value in the tool required understanding user psychology and market dynamics I hadn\'t considered.',
          oldDesign: '/images/project4-old-design.jpg',
          proposedDesign: '/images/project4-new-design.jpg',
          solution: 'Focused on solving real problems rather than showcasing technology. Gathered feedback from potential users early and often, refined the user experience based on actual behavior patterns, and positioned the tool as a creative enabler rather than a technical showcase. Through this I was able to attract engaged users who found genuine utility in the platform, validating that user-centered design matters more than technical complexity.'
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
              <h1 className="detail-project-title">{project.title}</h1>
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

              {project.tools && (
                <div className="meta-section">
                  <h3 className="meta-title">Tools</h3>
                  <p>{project.tools}</p>
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
          
          <div className="detail-project-description">
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
        <div className="solution-indicator">
                <span className="solution-dot"></span>
                <span className="solution-label">Solution</span>
              </div>
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