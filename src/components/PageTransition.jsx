// Re-mounting a keyed child restarts its CSS animation, giving a smooth
// fade+slide transition every time the route changes.
export function PageTransition({ routeKey, children }) {
  return (
    <div key={routeKey} className="page-transition">
      {children}
    </div>
  );
}
