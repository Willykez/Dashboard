import { useRef, useLayoutEffect, useState } from "react";
import { Icon } from "./icons.jsx";
import { nav } from "../data/profile.js";

export function BottomNav({ route, onNavigate }) {
  const containerRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const activeEl = container.querySelector(".is-active");
    if (activeEl) {
      setIndicator({ left: activeEl.offsetLeft, width: activeEl.offsetWidth });
    }
  }, [route]);

  return (
    <nav className="bottom-nav" aria-label="Main navigation" ref={containerRef}>
      <span
        className="bottom-nav-indicator"
        style={{ transform: `translateX(${indicator.left}px)`, width: indicator.width }}
        aria-hidden="true"
      />
      {nav.map((item) => {
        const active = route === item.id;
        return (
          <button
            key={item.id}
            type="button"
            className={`bottom-nav-link ${active ? "is-active" : ""}`}
            onClick={() => onNavigate(item.id)}
          >
            <Icon name={item.icon} size={19} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
