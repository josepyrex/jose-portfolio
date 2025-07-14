// src/components/Projects/Projects.js
import React from 'react';
import { Link } from 'react-router-dom'; // You'll need to install react-router-dom
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: "01",
      category: "CASE STUDY",
      year: "2025",
      title: "ebookgen.app",
      image: '/images/ebookgen/logo.png',
      description: "Teaching AI to write books so you don't have to, one prompt at a time.",
      slug: "ebookgen"
    },
    {
      id: "02",
      category: "CASE STUDY",
      year: "2023",
      title: "Superfanz",
      image: '/images/Superfanz/superfanzLogoBlackBorderTM.png',
      description: "Startup collectable toy company that turned a simple LED fan into a luxury collectible that adults actually wanted to own.",
      slug: "superfanz"
    },
    {
      id: "03",
      category: "Case Study",
      year: "2024",
      title: "emeswim",
      image: "/images/emeswim/emeswim.png",
      description: "From a concept to a featured swimwear brand at Miami Swim Week, all within a year.",
      slug: "emeswim"
    },
    {
      id: "04",
      category: "Moosic Discovery",
      year: "2021",
      title: "Moosic Discovery",
      image: "/images/moosic/newMoosicLogoWithCow.png",
      description: "The landscape of the digital designer is a jungle of panels and dropdown menus. Let's return home to the desk.",
      slug: "moosic"
    },
    // {
    //   id: "05",
    //   category: "UNDER CONSTRUCTION",
    //   year: "-",
    //   title: "dulcet labs / livenue",
    //   image: "/images/dulcet/Dulcet Logo dark.png",
    //   description: "NYC musician-venue marketplace, social based musician app.",
    //   slug: "dulcet"
    // }
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
                    <h3 className="main-project-title">{project.title}</h3>
                    <p className=" main-project-description">{project.description}</p>
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