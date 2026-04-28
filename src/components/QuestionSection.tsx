import { useEffect, useRef, useState } from 'react';

interface Props {
  onYes: () => void;
}

export default function QuestionSection({ onYes }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const noLabels = [
    'Jangan dong...',
    'Yakin nih?',
    'Pikir lagi ya~',
    'Masa sih...?',
    'Ayo dong...',
    'Please...',
    'Aduh...',
    'OK fine... tapi yakin?',
  ];

  const handleNoHover = () => {
    const maxX = 300;
    const maxY = 200;
    setNoPos({
      x: (Math.random() - 0.5) * maxX,
      y: (Math.random() - 0.5) * maxY,
    });
    setNoCount((c) => c + 1);
  };

  const noLabel = noLabels[Math.min(noCount, noLabels.length - 1)];
  const yesScale = 1 + Math.min(noCount * 0.15, 1.2);

  return (
    <section ref={ref} className="relative z-10 py-32 px-6">
      <div
        className={`max-w-xl mx-auto text-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <p className="text-rose-300 tracking-[0.3em] text-xs uppercase font-semibold mb-4">
          pertanyaan untukmu
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-rose-700 font-serif leading-tight mb-4">
          Maukah kamu menjadi
          <br />
          <span className="text-rose-500">pacarku?</span>
        </h2>
        <p className="text-rose-400/80 text-sm font-serif italic mb-14">
          Pikirkan baik-baik ya... ♥
        </p>

        <div className="flex items-center justify-center gap-8 relative">
          {/* YES button */}
          <button
            onClick={onYes}
            className="bg-rose-500 hover:bg-rose-600 active:scale-95 text-white font-bold px-10 py-4 rounded-full shadow-lg shadow-rose-200 transition-all duration-300 select-none"
            style={{
              transform: `scale(${yesScale})`,
              fontSize: `${Math.min(16 + noCount * 1.5, 26)}px`,
            }}
          >
            Iya, mau! ♥
          </button>

          {/* NO button */}
          <button
            onMouseEnter={handleNoHover}
            onFocus={handleNoHover}
            className="text-rose-300 border border-rose-200 hover:border-rose-300 font-medium px-8 py-4 rounded-full transition-all duration-300 select-none text-sm cursor-pointer"
            style={{
              transform: `translate(${noPos.x}px, ${noPos.y}px)`,
              transitionProperty: 'transform, color, border-color',
            }}
          >
            {noLabel}
          </button>
        </div>
      </div>

      {/* Bottom padding */}
      <div className="h-20" />
    </section>
  );
}
