import { useCountUp } from "../hooks/useCountUp.js";
import { useReveal } from "../hooks/useReveal.js";

export function StatCard({ label, value, suffix = "", delay = 0 }) {
  const [ref, visible] = useReveal();
  const count = useCountUp(value, visible);

  return (
    <div
      ref={ref}
      className={`stat-card reveal ${visible ? "reveal-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="stat-card-value">
        {count}
        {suffix}
      </div>
      <div className="stat-card-label">{label}</div>
    </div>
  );
}
