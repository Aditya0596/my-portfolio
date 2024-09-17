// src/components/Projects.jsx
import React from 'react';
import projects from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="container my-5">
      <h2>My Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <div className="d-flex justify-content-between">
                  <a href={project.link} className="btn btn-primary" target='_blank'>View Project Code</a>
                  {project.liveLink && (
                    <a href={project.liveLink} className="btn btn-secondary" target='_blank'>See Live Project</a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </section>
  );
};

export default Projects;
