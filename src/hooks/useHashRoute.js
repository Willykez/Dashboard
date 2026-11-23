import { useEffect, useState, useCallback } from "react";

function readRoute() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  return hash || "dashboard";
}

// Tiny dependency-free router: the current screen is whatever is after `#/`
// in the URL, so the app works on static hosting with no server config.
export function useHashRoute() {
  const [route, setRoute] = useState(readRoute());

  useEffect(() => {
    const onHashChange = () => setRoute(readRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = useCallback((next) => {
    window.location.hash = `/${next}`;
  }, []);

  return [route, navigate];
}
