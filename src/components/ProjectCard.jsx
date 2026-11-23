import { Icon } from "./icons.jsx";
import { Reveal } from "./Reveal.jsx";

export function ProjectCard({ project, delay = 0, onOpen }) {
  return (
    <Reveal
      as="button"
      className="project-card"
      delay={delay}
      onClick={() => onOpen(project)}
    >
      <div className="project-card-top">
        <span className="project-card-tag">{project.tag}</span>
        <span className="project-card-year">{project.year}</span>
      </div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="project-card-foot">
        <span className="project-card-status">
          <span className="status-dot" aria-hidden="true" />
          {project.status}
        </span>
        <span className="project-card-link">
          Details <Icon name="arrowRight" size={14} />
        </span>
      </div>
    </Reveal>
  );
}
