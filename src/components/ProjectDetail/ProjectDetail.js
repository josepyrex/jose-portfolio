// src/components/ProjectDetail/ProjectDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ProjectHeader from '../ProjectHeader/ProjectHeader';
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
      ambition: 'How might we transform a revolutionary toy into a luxury collectible that resonates with adult collectors and art enthusiasts? What makes something feel valuable versus cheap?',
      solution: 'Product Strategy & Brand Positioning',
      role: 'Project Manager & Web Developer',
      tools: 'Webflow, Notion',
      credits: 'Freddy Tutiven, Mariajose Cerebros',
      description: 'SuperFanz was one of those projects that teaches you as much about what doesn\'t get built as what does. We had this LED fan toy that was too expensive to make to be marketed to kids, and when I joined demanding a $20 price tag, I had a hypothesis, what if could we transform it into something adults would actually collect? What followed was months of deep market research, a complete product redesign, and a new brand strategy development. I proved the concept could work, validated a 4x price increase through user testing, created a luxury design language that resonated with collectors, and came up with an artist collaboration framework that generated real interest. Sometimes the most valuable projects are the ones that show you exactly what\'s possible, even when external factors keep them from reaching production.',
      challenges: [
    {
      id: 1,
      title: 'I needed to prove that a cheap toy could be repositioned as a luxury collectible worth 4x the original price',
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
      solution: 'Conducted extensive user research with potential collectors to understand what drives purchase decisions in the collectibles market. Redesigned the entire product concept with premium materials inspired by high-end collectibles like Superplastic figures, USB-C charging, and customizable LED animations. Through user testing and focus groups, I validated that the redesigned concept could command $100+ pricing (a 300% increase) from the original $25 something toy.'
    },
    {
      id: 2,
      title: 'The existing brand and website communicated "children\'s toy" when we needed to convey "luxury art piece"',
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
      solution: 'Completely reimagined the brand identity and digital experience using Apple\'s design principles. Created premium mockups, refined messaging, and developed a content strategy that positioned SuperFanz as collectible art rather than toys. User testing showed dramatic improvements in brand perception and purchase intent, validating that the right presentation could completely transform how people saw the product.'
    },
    {
      id: 3,
      title: 'We needed to prove demand for a repositioned product in a market that didn\'t yet exist',
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
      solution: 'I developed and tested an artist collaboration strategy where designers would create custom painted SuperFanz pieces for limited production runs. Pre-launch interest surveys and social media testing showed strong engagement with the concept. While we didn\'t reach production, the validation process proved that authentic artist partnerships could create the scarcity-driven demand collectors seek.'
    },
    {
      id: 4,
      title: 'Cross-functional coordination between design, marketing, and engineering was creating bottlenecks and inconsistent vision',
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
      solution: 'I implemented integrated project management using Trello with full team visibility and established weekly alignment meetings. Created a shared design system and component library accessible to all teams. This process improvement increased team productivity by 60% and ensured everyone was building toward the same vision, even as the project evolved.'
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
      description: 'What started when a friend asked "want to help me turn these idea into a real business?" became a year-long journey of discovering what it actually takes to build a brand from nothing. From creating brand identity to making it to Miami Swim Week, this project taught me that genuine connection beats polished marketing every time. Sometimes the best education comes from saying yes to a friend\'s crazy idea.',
      challenges: [
        {
          id: 1,
          title: 'As we grew, the ethical and financial implications of our Chinese manufacturing became harder to ignore and our values and our supply chain were pulling in different directions',
          oldDesign: '/images/project2-old-design.jpg',
          proposedDesign: '/images/project2-new-design.jpg',
          solution: 'Embarked on a complete supply chain overhaul to find manufacturing partners who shared our values. Researched 5+ ethical manufacturers across Latin America, conducted virtual factory tours, and eventually found our perfect match in Colombia. The transition wasn\'t just about ethics or money (although the tariffs were definitely a plus) the quality improvement was dramatic, and the story became part of what customers loved about the brand.'
        },
        {
          id: 2,
          title: 'Creating a brand from nothing felt overwhelming. Originally called "Davie Swim," the name felt disconnected from the founder\'s story and lacked emotional connection',
          oldDesign: '/images/project2-old-design.jpg',
          proposedDesign: '/images/project2-new-design.jpg',
          solution: 'Completely reimagined the brand identity around "Emeswim," weaving the founder\'s personal story and last name into the brand. Rebuilt the website to tell the origin story, why these swimsuits matter, what drives the creation process, and the authentic passion behind each piece.',
        },
        {
          id: 3,
          title: "Growing a customer base felt like shouting into the void and without established credibility or visibility, potential customers had no reason to trust or notice us'.",
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
          solution: 'Turned constraints into creativity by recruiting volunteer models who believed in the vision. Shot authentic lifestyle photos that captured real people in real moments, launched targeted ad campaigns, and personally reached out to influencers with genuine stories rather than generic pitches. The breakthrough came from building community first, sales second. Through authentic storytelling and grassroots marketing, we grew from 0 to 1000+ followers and earned an invitation to Miami Swim Week. Sometimes connections is better than a budget.'
        }
      ]
    },
    'moosic': {
      title: 'Building Community Through Music',
      company: 'Moosic Discovery',
      heroImage: '/images/moosic/julia.png',
      projectStatus: '',
      liveLink: 'https://moosicdiscovery.com',
      ambition: 'With algorithmic music discovery the norm, the question was: what would happen if humans curated discovery again? Could we build something that actually introduced people to their next favorite band? Could we write about music without the pretentiousness? ',
      solution: 'Community-Driven Music Discovery Platform',
      role: 'Founder & Community Architect',
      tools: 'Wordpress, HTML, CSS, JS, MailChimp, Trello, Discord',
      credits: 'All of my writers and editors',
      description: 'Music discovery felt broken to me. Algorithms were creating echo chambers while incredible artists remained invisible to the people who\'d love them most. Moosic Discovery started as my pandemic project to fix that, a human-curated platform where emerging talent could actually find their audience. What began as a personal passion became a website with 10K monthly visitors and a crash course in community building. Turns out when you give passionate people a platform and some structure, amazing things happen.',
      challenges: [
        {
          id: 1,
          title: 'Needed to assemble a passionate team of music writers with zero budget and a ticking clock on our launch timeline',
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
          solution: 'Turned LinkedIn into my talent discovery platform. Created a mission-driven post that attracted 80+ applicants who believed in the vision, not just the paycheck. Conducted 20 interviews to find people who shared the passion, not just the skills. What I learned? When you\'re building something meaningful, the right people will find you and you just need to be clear about what you\'re building and why it matters.'
        },
        {
          id: 2,
          title: 'Coordinating 10 remote volunteers across different time zones felt like conducting an orchestra where everyone was playing different songs',
          oldDesign: '/images/project3-old-design.jpg',
          proposedDesign: '/images/project3-new-design.jpg',
          solution: 'Created structure that worked with people\'s lives, not against them. Bi-weekly all-hands became our heartbeat for big picture alignment, Discord channels kept daily energy flowing, and individual check-ins ensured nobody felt lost. Assigned editors to different groups of writers, which let me focus on the website and brand while ensuring quality stayed high. The secret was treating everyone like the passionate writers they were, not like free labor.'
        },
        {
          id: 3,
          title: 'Launching with zero marketing budget meant we needed to create some buzz, not just noise',
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
          solution: 'Built partnerships with other magazines who believed in supporting emerging artists. Created content that artists actually wanted to share because it genuinely elevated their work which effectively turned our featured musicians into our marketing team. Sold stickers to support server costs and opened up community submissions to find new talent. I learned that authentic enthusiasm spreads faster than any paid campaign could.'
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
      description: 'I\'ve always been fascinated by the gap between having a great idea and actually creating something with it. EbookGen was my attempt to close that gap, at least for books. Using OpenAI\'s API and some creative prompt engineering, I built a tool that takes your rough concept and hands you back a complete ebook, cover and all. It taught me as much about user experience design as it did about AI implementation.',
      challenges: [
        {
          id: 1,
          title: 'AI-generated content often feels robotic and disconnected, plus inconsistent formatting made every PDF look amateurish',
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
          solution: 'Built a design system that the AI could understand and follow. Created templates that automatically structured content, developed algorithms that ensure logical flow between chapters, and implemented error handling. The key was treating AI like a really fast intern and just give it clear instructions and good templates, and it can produce a pretty good PDF.'
        },
        {
          id: 2,
          title: 'Connecting Python backend logic with Stripe payments and managing deployment felt like learning three jobs at once',
          oldDesign: '/images/project4-old-design.jpg',
          proposedDesign: '/images/project4-new-design.jpg',
          solution: 'Approached each technical challenge methodically, using AI tools not just for code generation but as learning companions. Built the payment flow step by step, tested everything extensively in sandbox environments, and deployed incrementally to catch issues early. The a-ha moment was realizing that maybe I didn\'t need to understand every line of code, I needed to understand the user experience and work backwards from there.'
        },
        {
          id: 3,
          title: 'Building something functional was only half the battle it\s getting people to discover and actually use the tool required understanding psychology, not just technology',
          oldDesign: '/images/project4-old-design.jpg',
          proposedDesign: '/images/project4-new-design.jpg',
          solution: 'Focused relentlessly on solving real problems rather than showcasing the tech. Gathered feedback from potential users early and often, refined the experience based on actual behavior patterns, and positioned the tool as a creative enabler rather than a technical thing. The users who stuck around weren\'t impressed by the AI, they just were happy that there was a tool to automate the work they were going to do anyways.'
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

  return (
    <div className="project-detail">
      
      <ProjectHeader projectTitle={project.title} />

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