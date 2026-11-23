import { useEffect, useState } from "react";

// Animates a number from 0 to `target` over `duration` ms, starting only
// once `start` becomes true (so it can be tied to scroll-into-view).
export function useCountUp(target, start, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return undefined;

    let raf;
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.round(target * eased));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);

  return value;
}
