export function Rod() {
  return (
    <svg width="200" height="250">
      <line x1="60" y1="20" x2="140" y2="20" className="rod" />
      <line x1="140" y1="20" x2="140" y2="50" className="rod" />
      <line x1="60" y1="20" x2="60" y2="230" className="rod" />
      <line x1="20" y1="230" x2="100" y2="230" className="rod" />
    </svg>
  );
}

export function Head() {
  return <circle cx="140" cy="70" r="20" className="head" />;
}

export function Body() {
  return <line x1="140" y1="90" x2="140" y2="150" className="body" />;
}

export function Arm1() {
  return <line x1="140" y1="120" x2="120" y2="100" className="arm" />;
}

export function Arm2() {
  return <line x1="140" y1="120" x2="160" y2="100" className="arm" />;
}

export function Leg1() {
  return <line x1="140" y1="150" x2="120" y2="180" className="leg" />;
}

export function Leg2() {
  return <line x1="140" y1="150" x2="160" y2="180" className="leg" />;
}
