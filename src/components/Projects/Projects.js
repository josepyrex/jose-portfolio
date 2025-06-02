// src/components/Projects/Projects.js
import React from 'react';
import { Link } from 'react-router-dom'; // You'll need to install react-router-dom
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: "01",
      category: "INTERNSHIP",
      year: "2022",
      title: "Test",
      image: '/images/instagram-logo.png',
      description: "Celebrating Creators and their big milestones.",
      slug: "superfanz"
    },
    {
      id: "02",
      category: "INTERNSHIP",
      year: "2021",
      title: "Test",
      image: "/images/image.png",
      description: "Giving Lyft drivers more control on the road.",
      slug: "lyft"
    },
    {
      id: "03",
      category: "CASE STUDY",
      year: "2023",
      title: "Test",
      image: "/images/image.png",
      description: "The landscape of the digital designer is a jungle of panels and dropdown menus. Let's return home to the desk.",
      slug: "figma-desk"
    },
    {
      id: "04",
      category: "CASE STUDY",
      year: "2020",
      title: "Test",
      image: "/images/image.png",
      description: "Nurturing relationships between donors and beneficiaries with the storytelling power of design.",
      slug: "duet"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-item" key={project.id}>
            <Link to={`/project/${project.slug}`} className="project-link">
              <div className="project-row">
                <div className="project-meta">
                  <div className="project-id">{project.id}</div>
                  <div className="project-category">{project.category}</div>
                  <div className="project-year">{project.year}</div>
                </div>
                
                <div className="project-content">
                  <div className="project-image-col">
                    <img 
                      src={project.image} 
                      alt={`${project.title} project`} 
                      className="project-image" 
                    />
                  </div>
                  
                  <div className="project-details-col">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                  </div>
                </div>
              </div>
            </Link>
            
            {project.id !== "04" && (
              <div className="bottom-line">
                <div className="divider-lines"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;