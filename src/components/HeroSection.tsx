import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 py-20">
      {/* Decorative ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[520px] h-[520px] rounded-full border border-rose-200 opacity-40 animate-pulse-slow" />
        <div className="absolute w-[380px] h-[380px] rounded-full border border-pink-300 opacity-30 animate-pulse-slow2" />
      </div>

      <div
        className={`transition-all duration-1000 delay-300 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <p className="text-rose-400 tracking-[0.35em] text-xs uppercase font-semibold mb-6 font-serif">
          sebuah perasaan yang ingin aku sampaikan
        </p>

        <div className="relative mb-6">
          <span className="text-[80px] leading-none select-none animate-heartbeat inline-block">
            ♥
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-rose-700 font-serif leading-tight mb-4">
          Untuk Kamu
        </h1>
        <h2 className="text-xl md:text-2xl font-light text-rose-400 font-serif italic tracking-wide mb-10">
          yang selalu ada di pikiranku
        </h2>

        <a
          href="#alasan"
          className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 active:scale-95 text-white text-sm font-medium px-8 py-3.5 rounded-full shadow-lg shadow-rose-200 transition-all duration-200"
        >
          Baca Perasaanku
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 text-rose-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
