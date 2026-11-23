import { useEffect, useRef, useState } from "react";

// Returns a ref to attach to an element, and whether it has scrolled into
// view yet. Used to trigger CSS enter-animations once per element.
export function useReveal(options) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, visible];
}
