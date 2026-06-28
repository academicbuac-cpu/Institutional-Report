import { useInView } from '../../hooks/useInView';
import { useData } from '../../context/DataContext';

export default function ThankYouSlide() {
  const { ref, isInView } = useInView(0.3);
  const { data } = useData();
  const d = data.thankYou;
  return (
    <section id="thank-you" ref={ref} className="min-h-screen flex items-center justify-center bg-college-green relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage:'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 36px), repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 36px)' }} /></div>
      <div className="relative z-10 text-center px-4">
        <h1 className={`text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ fontFamily: 'var(--font-playfair)' }}>{d.heading}</h1>
        <div className={`w-24 h-1 bg-college-gold-light mx-auto mb-8 transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
        <p className={`text-college-gold-light text-lg md:text-xl font-light transition-all duration-1000 delay-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>{d.subtitle}</p>
        <p className={`text-white/50 text-sm mt-4 transition-all duration-1000 delay-900 ${isInView ? 'opacity-100' : 'opacity-0'}`}>{d.tagline}</p>
      </div>
    </section>
  );
}
