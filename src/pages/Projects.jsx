import { useState, useEffect } from 'react';
import axios from 'axios';

import noImage from '../assets/no-image.png';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('https://assignment1-1eq7.onrender.com/admin/projects/api')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the projects:", error);
      });
  }, []);

  return (
    <section className="container mt-5">
      <h1 className="text-center mb-4">Projects</h1>
      <div className="row">
        {projects.map(project => (
          <div key={project._id} className="col-md-4 mb-4">
            <div className="card d-flex flex-column h-100">
              <div className="text-center">
                <img 
                  src={project.image || noImage} 
                  className="img-fluid" 
                  alt={project.title} 
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <ul className="list-inline">
                  {project.technologies.map((tech, index) => (
                    <li key={index} className="list-inline-item badge bg-dark">{tech}</li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <a href={project.liveDemoLink} className="btn btn-warning mt-3" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href={project.githubLink} className="btn btn-dark mt-3 ms-2" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
