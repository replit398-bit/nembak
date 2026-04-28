import { useEffect, useState } from 'react';

interface Confetti {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
  char: string;
}

const confettiColors = ['text-rose-400', 'text-pink-400', 'text-red-400', 'text-orange-300', 'text-yellow-300'];
const confettiChars = ['♥', '✦', '★', '✿', '♥', '♥'];

export default function CelebrationScreen() {
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const items: Confetti[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: 12 + Math.random() * 18,
      duration: 4 + Math.random() * 5,
      delay: Math.random() * 3,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      char: confettiChars[Math.floor(Math.random() * confettiChars.length)],
    }));
    setConfetti(items);
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-red-50 flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Confetti */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {confetti.map((c) => (
          <span
            key={c.id}
            className={`absolute animate-float-up select-none ${c.color}`}
            style={{
              left: `${c.x}%`,
              bottom: '-40px',
              fontSize: `${c.size}px`,
              animationDuration: `${c.duration}s`,
              animationDelay: `${c.delay}s`,
              animationIterationCount: 'infinite',
            }}
          >
            {c.char}
          </span>
        ))}
      </div>

      <div
        className={`relative z-10 text-center max-w-lg mx-auto transition-all duration-1000 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
      >
        {/* Big heart */}
        <div className="text-[100px] leading-none animate-heartbeat mb-6 select-none">♥</div>

        <h1 className="text-5xl md:text-6xl font-bold text-rose-700 font-serif leading-tight mb-4">
          Yeay!
        </h1>
        <p className="text-xl md:text-2xl text-rose-500 font-serif italic mb-8">
          Kamu membuat hari ini jadi hari terindah dalam hidupku.
        </p>

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-8 py-6 border border-rose-100 shadow-sm mb-10">
          <p className="text-rose-600/90 font-serif text-[15px] leading-relaxed">
            Aku berjanji akan selalu ada untukmu, menemanimu dalam setiap momen,
            dan mencintaimu dengan sepenuh hati. Terima kasih sudah mau menerimaku. ♥
          </p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-rose-200" />
          <span className="text-rose-300 text-base">♥ ♥ ♥</span>
          <div className="h-px w-12 bg-rose-200" />
        </div>

        <p className="text-rose-300/80 text-xs tracking-widest uppercase mt-6 font-semibold">
          Awal dari cerita kita
        </p>
      </div>
    </div>
  );
}
