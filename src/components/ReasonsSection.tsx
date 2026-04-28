import { useEffect, useRef, useState } from 'react';

const reasons = [
  {
    icon: '✦',
    title: 'Senyummu',
    desc: 'Setiap kali kamu tersenyum, rasanya seluruh dunia jadi lebih cerah. Aku bisa menatap senyummu selamanya.',
  },
  {
    icon: '✦',
    title: 'Caramu Bicara',
    desc: 'Cara kamu bercerita tentang hal-hal kecil membuatku selalu ingin mendengarkan lebih lama.',
  },
  {
    icon: '✦',
    title: 'Ketulusanmu',
    desc: 'Kamu begitu tulus dan jujur. Itu hal yang langka, dan itu salah satu hal yang paling aku kagumi darimu.',
  },
  {
    icon: '✦',
    title: 'Kekuatanmu',
    desc: 'Kamu kuat tanpa harus terlihat keras. Ada keberanian dalam dirimu yang diam-diam membuatku kagum.',
  },
  {
    icon: '✦',
    title: 'Perhatianmu',
    desc: 'Detail-detail kecil yang kamu ingat dan perhatianmu yang tulus kepada orang lain membuatku jatuh hati.',
  },
  {
    icon: '✦',
    title: 'Hatimu',
    desc: 'Hatimu begitu baik. Dan aku tidak pernah bertemu seseorang yang membuat hatiku berdetak seperti ini.',
  },
];

function ReasonCard({ reason, index }: { reason: typeof reasons[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group bg-white/70 backdrop-blur-sm rounded-2xl p-7 shadow-sm hover:shadow-md border border-rose-100 hover:border-rose-200 transition-all duration-500 cursor-default ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="text-rose-300 text-2xl mb-3 group-hover:text-rose-400 transition-colors duration-300">
        {reason.icon}
      </div>
      <h3 className="text-rose-700 font-bold text-lg font-serif mb-2">{reason.title}</h3>
      <p className="text-rose-500/80 text-sm leading-relaxed">{reason.desc}</p>
    </div>
  );
}

export default function ReasonsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="alasan" className="relative z-10 py-24 px-6 max-w-5xl mx-auto">
      <div
        ref={ref}
        className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      >
        <p className="text-rose-300 tracking-[0.3em] text-xs uppercase font-semibold mb-3">
          mengapa kamu
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-rose-700 font-serif">
          Alasan Aku Menyukaimu
        </h2>
        <div className="mt-4 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-rose-200" />
          <span className="text-rose-300 text-lg">♥</span>
          <div className="h-px w-16 bg-rose-200" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {reasons.map((r, i) => (
          <ReasonCard key={i} reason={r} index={i} />
        ))}
      </div>
    </section>
  );
}
