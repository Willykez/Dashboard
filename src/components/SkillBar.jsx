import { useReveal } from "../hooks/useReveal.js";

export function SkillBar({ name, level, delay = 0 }) {
  const [ref, visible] = useReveal();

  return (
    <div ref={ref} className="skill-bar">
      <div className="skill-bar-head">
        <span>{name}</span>
        <span className="skill-bar-level">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{
            width: visible ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}
