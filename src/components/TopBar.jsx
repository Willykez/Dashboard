import { Avatar } from "./Avatar.jsx";
import { ThemeToggle } from "./ThemeToggle.jsx";
import { profile } from "../data/profile.js";

export function TopBar({ theme, onToggleTheme }) {
  return (
    <header className="top-bar">
      <div className="top-bar-id">
        <Avatar initials={profile.avatarInitials} size={32} />
        <strong>{profile.name}</strong>
      </div>
      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
    </header>
  );
}
