export function Avatar({ initials, size = 64, className = "" }) {
  return (
    <div
      className={`avatar ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.38 }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
