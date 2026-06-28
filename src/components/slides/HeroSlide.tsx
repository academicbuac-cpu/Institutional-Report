import { useInView } from '../../hooks/useInView';
import { useData } from '../../context/DataContext';
import { ChevronDown } from 'lucide-react';

export default function HeroSlide() {
  const { ref, isInView } = useInView(0.3);
  const { data } = useData();
  const d = data.hero;
  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {d.backgroundImage ? (
          <img src={d.backgroundImage} alt="College Building" className="w-full h-full object-cover" />
        ) : (
          <img src="/images/hero-building.jpg" alt="College Building" className="w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative z-10 text-center px-4">
        <div className={`bg-college-green/80 backdrop-blur-sm px-8 md:px-16 py-10 md:py-16 rounded-lg max-w-4xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h2 className={`text-white text-xl md:text-2xl lg:text-3xl font-medium mb-3 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ fontFamily: 'var(--font-playfair)' }}>{d.subtitle}</h2>
          <h1 className={`text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ fontFamily: 'var(--font-playfair)' }}>{d.title}</h1>
          <div className={`w-24 h-1 bg-college-gold-light mx-auto mb-6 transition-all duration-700 delay-600 ${isInView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
          <p className={`text-white/90 text-lg md:text-xl lg:text-2xl font-light transition-all duration-700 delay-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>{d.tagline}</p>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/70 text-sm font-light tracking-wider uppercase">Scroll Down</span>
        <ChevronDown className="text-white/70" size={24} />
      </div>
    </section>
  );
}
