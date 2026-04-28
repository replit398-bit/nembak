import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generated: Heart[] = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: 10 + Math.random() * 22,
      duration: 8 + Math.random() * 10,
      delay: Math.random() * 8,
      opacity: 0.12 + Math.random() * 0.25,
    }));
    setHearts(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute animate-float-up select-none"
          style={{
            left: `${h.x}%`,
            bottom: '-60px',
            fontSize: `${h.size}px`,
            opacity: h.opacity,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            animationTimingFunction: 'ease-in-out',
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}
