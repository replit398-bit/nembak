import { useEffect, useRef, useState } from 'react';

export default function LetterSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative z-10 py-24 px-6">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/* Paper card */}
        <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl shadow-rose-100 px-10 py-12 border border-rose-100">
          {/* Corner decorations */}
          <span className="absolute top-5 left-6 text-rose-200 text-xl select-none">♥</span>
          <span className="absolute top-5 right-6 text-rose-200 text-xl select-none">♥</span>
          <span className="absolute bottom-5 left-6 text-rose-200 text-xl select-none">♥</span>
          <span className="absolute bottom-5 right-6 text-rose-200 text-xl select-none">♥</span>

          <div className="text-center mb-8">
            <p className="text-rose-300 tracking-[0.3em] text-xs uppercase font-semibold mb-2">
              sepucuk surat
            </p>
            <h2 className="text-3xl font-bold text-rose-700 font-serif">Dari Hatiku</h2>
          </div>

          <div className="space-y-5 text-rose-600/90 text-[15px] leading-[1.9] font-serif">
            <p>Hei, kamu...</p>
            <p>
              Mungkin ini terdengar tidak biasa, tapi aku merasa ada sesuatu yang harus aku
              sampaikan — sesuatu yang terlalu besar untuk aku pendam sendiri.
            </p>
            <p>
              Aku tidak tahu kapan persisnya ini dimulai. Mungkin saat aku pertama kali melihat
              kamu tertawa lepas, atau saat kamu berbicara tentang hal-hal yang kamu sukai dengan
              mata yang berbinar. Yang aku tahu, sejak saat itu, pikiranku selalu kembali padamu.
            </p>
            <p>
              Kamu bukan sekadar seseorang yang aku kagumi dari jauh. Kamu adalah orang yang aku
              ingin kenal lebih dalam — tentang mimpi-mimpimu, tentang hal yang membuatmu
              tertawa, tentang hal yang kadang menyedihkanmu.
            </p>
            <p>
              Aku tidak menjanjikan hal yang sempurna. Tapi aku berjanji untuk hadir, untuk
              mendengarkan, dan untuk selalu berusaha menjadi yang terbaik untukmu.
            </p>
            <p>
              Jadi izinkan aku bertanya — dengan segenap kejujuran yang aku punya...
            </p>
          </div>

          <div className="mt-8 text-right font-serif italic text-rose-400 text-sm">
            — Seseorang yang menyukaimu
          </div>
        </div>
      </div>
    </section>
  );
}
