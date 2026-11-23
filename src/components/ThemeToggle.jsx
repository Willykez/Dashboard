import { Icon } from "./icons.jsx";

export function ThemeToggle({ theme, onToggle, className = "" }) {
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      className={`theme-toggle ${className}`}
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span className={`theme-toggle-track ${isDark ? "is-dark" : "is-light"}`}>
        <span className="theme-toggle-thumb">
          <Icon name={isDark ? "moon" : "sun"} size={13} />
        </span>
      </span>
    </button>
  );
}
