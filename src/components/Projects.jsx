import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const projects = [
  { id: 1, image: 'images/project-1.jpg', title: 'dream home', description: 'construction, design' },
  { id: 2, image: 'images/project-2.jpg', title: 'dream home', description: 'construction, design' },
  { id: 3, image: 'images/project-3.jpg', title: 'dream home', description: 'construction, design' },
  { id: 4, image: 'images/project-4.jpg', title: 'dream home', description: 'construction, design' },
  { id: 5, image: 'images/project-5.jpg', title: 'dream home', description: 'construction, design' },
  { id: 6, image: 'images/project-6.jpg', title: 'dream home', description: 'construction, design' },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h1 className="heading">our projects</h1>

      <div className="box-container">
        {projects.map((project) => (
          <a href={project.image} className="box" key={project.id}>
            <div className="image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="content">
              <div className="info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              {/* <FontAwesomeIcon icon={faPlus} className="icon" /> */}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
