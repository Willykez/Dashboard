import { useState } from "react";
import { Avatar } from "../components/Avatar.jsx";
import { Reveal } from "../components/Reveal.jsx";
import { StatCard } from "../components/StatCard.jsx";
import { ProjectCard } from "../components/ProjectCard.jsx";
import { Modal } from "../components/Modal.jsx";
import { Icon } from "../components/icons.jsx";
import { profile, stats, projects, activity } from "../data/profile.js";

export function Dashboard({ onNavigate }) {
  const [openProject, setOpenProject] = useState(null);
  const featured = projects.slice(0, 3);
  const recent = activity.slice(0, 3);

  return (
    <div className="screen dashboard-screen">
      <Reveal as="section" className="hero-card">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-top">
          <Avatar initials={profile.avatarInitials} size={72} className="hero-avatar" />
          <div>
            <span className="hero-status">
              <span className="status-dot" aria-hidden="true" />
              {profile.status}
            </span>
            <h1>{profile.name}</h1>
            <p className="hero-title">{profile.title}</p>
          </div>
        </div>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <button type="button" className="btn btn-primary" onClick={() => onNavigate("projects")}>
            View projects <Icon name="arrowRight" size={16} />
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => onNavigate("contact")}>
            Get in touch
          </button>
        </div>
        <div className="hero-meta">
          <Icon name="pin" size={14} />
          {profile.location}
        </div>
      </Reveal>

      <section className="stats-grid" aria-label="Stats">
        {stats.map((s, i) => (
          <StatCard key={s.label} {...s} delay={i * 80} />
        ))}
      </section>

      <Reveal as="section" className="panel">
        <div className="panel-head">
          <h2>Featured projects</h2>
          <button type="button" className="link-btn" onClick={() => onNavigate("projects")}>
            See all <Icon name="arrowRight" size={14} />
          </button>
        </div>
        <div className="project-grid">
          {featured.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 100} onOpen={setOpenProject} />
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="panel">
        <div className="panel-head">
          <h2>Recent activity</h2>
          <button type="button" className="link-btn" onClick={() => onNavigate("activity")}>
            Full timeline <Icon name="arrowRight" size={14} />
          </button>
        </div>
        <ul className="mini-timeline">
          {recent.map((item) => (
            <li key={item.id}>
              <span className="mini-timeline-dot" aria-hidden="true" />
              <div>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
                <span className="mini-timeline-date">{item.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>

      {openProject && (
        <Modal onClose={() => setOpenProject(null)} labelledBy="dashboard-project-title">
          <ProjectDetail project={openProject} />
        </Modal>
      )}
    </div>
  );
}

function ProjectDetail({ project }) {
  return (
    <div className="project-detail">
      <span className="project-card-tag">{project.tag}</span>
      <h2 id="dashboard-project-title">{project.name}</h2>
      <p>{project.details}</p>
      <ul className="project-highlights">
        {project.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <a className="btn btn-primary" href={project.url} target="_blank" rel="noopener noreferrer">
        Open project <Icon name="external" size={15} />
      </a>
    </div>
  );
}
