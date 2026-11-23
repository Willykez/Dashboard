import { useEffect, useState, useCallback } from "react";

const STORAGE_KEY = "profile-dashboard-theme";

function getInitialTheme() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch (e) {
    // localStorage unavailable (private mode, etc.) — fall through.
  }
  const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)").matches;
  return prefersLight ? "light" : "dark";
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  return [theme, toggleTheme];
}
