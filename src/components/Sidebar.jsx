import { Avatar } from "./Avatar.jsx";
import { Icon } from "./icons.jsx";
import { ThemeToggle } from "./ThemeToggle.jsx";
import { profile, nav } from "../data/profile.js";

export function Sidebar({ route, onNavigate, theme, onToggleTheme }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <Avatar initials={profile.avatarInitials} size={44} />
        <div className="sidebar-brand-text">
          <strong>{profile.name}</strong>
          <span>{profile.title}</span>
        </div>
      </div>

      <nav className="sidebar-nav" aria-label="Main navigation">
        {nav.map((item) => {
          const active = route === item.id;
          return (
            <button
              key={item.id}
              type="button"
              className={`sidebar-link ${active ? "is-active" : ""}`}
              onClick={() => onNavigate(item.id)}
            >
              <Icon name={item.icon} size={18} />
              <span>{item.label}</span>
              {active && <span className="sidebar-link-dot" aria-hidden="true" />}
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        <span className="sidebar-status">
          <span className="status-dot" aria-hidden="true" />
          {profile.status}
        </span>
      </div>
    </aside>
  );
}
