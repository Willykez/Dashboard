import { useReveal } from "../hooks/useReveal.js";

// Fades + slides a block into place the first time it scrolls into view.
// `delay` (ms) staggers siblings when mapped over a list.
export function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const [ref, visible] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...rest.style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
