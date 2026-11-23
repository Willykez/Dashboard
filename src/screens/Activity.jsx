import { Reveal } from "../components/Reveal.jsx";
import { activity } from "../data/profile.js";

export function Activity() {
  return (
    <div className="screen">
      <Reveal as="div" className="screen-head">
        <h1>Activity</h1>
        <p>A running log of what shipped and what I explored.</p>
      </Reveal>

      <ol className="timeline">
        {activity.map((item, i) => (
          <Reveal as="li" key={item.id} delay={i * 90} className="timeline-item">
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-content">
              <span className="timeline-tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="timeline-date">{item.date}</span>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
