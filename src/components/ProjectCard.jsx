export default function ProjectCard({ project }) {
    return (
      <div className="card">
        <img src={project.image} alt={project.title} />
        <h2>{project.title}</h2>
        <p>{project.shortDescription}</p>
        <p><strong>Tech:</strong> {project.technologies.join(', ')}</p>
        <div className="links">
          {project.github && <a href={project.github} target="_blank">GitHub</a>}
          {project.demo && <a href={project.demo} target="_blank">Live</a>}
        </div>
      </div>
    )
  }
  