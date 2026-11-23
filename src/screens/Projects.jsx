import { useMemo, useState } from "react";
import { Reveal } from "../components/Reveal.jsx";
import { ProjectCard } from "../components/ProjectCard.jsx";
import { Modal } from "../components/Modal.jsx";
import { Icon } from "../components/icons.jsx";
import { projects } from "../data/profile.js";

const FILTERS = ["All", ...Array.from(new Set(projects.map((p) => p.tag)))];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [openProject, setOpenProject] = useState(null);

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.tag === filter)),
    [filter]
  );

  return (
    <div className="screen">
      <Reveal as="div" className="screen-head">
        <h1>Projects</h1>
        <p>A selection of what I've been building lately.</p>
      </Reveal>

      <div className="filter-tabs" role="tablist" aria-label="Filter projects">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={filter === f}
            className={`filter-tab ${filter === f ? "is-active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="project-grid project-grid-wide">
        {filtered.map((p, i) => (
          <ProjectCard key={p.id} project={p} delay={i * 80} onOpen={setOpenProject} />
        ))}
      </div>

      {openProject && (
        <Modal onClose={() => setOpenProject(null)} labelledBy="project-title">
          <div className="project-detail">
            <span className="project-card-tag">{openProject.tag}</span>
            <h2 id="project-title">{openProject.name}</h2>
            <p>{openProject.details}</p>
            <ul className="project-highlights">
              {openProject.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <a
              className="btn btn-primary"
              href={openProject.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open project <Icon name="external" size={15} />
            </a>
          </div>
        </Modal>
      )}
    </div>
  );
}
