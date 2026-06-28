import { useInView } from '../../hooks/useInView';
import { useData } from '../../context/DataContext';

export default function VisionSlide() {
  const { ref, isInView } = useInView(0.3);
  const { data } = useData();
  const d = data.vision;
  return (
    <section id="vision" ref={ref} className="min-h-screen flex items-center justify-center bg-college-cream py-16 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 md:w-72 h-full opacity-10"><img src="/images/islamic-pattern.jpg" alt="" className="w-full h-full object-cover" style={{ maskImage:'linear-gradient(to left, rgba(0,0,0,0.6) 0%, transparent 100%)', WebkitMaskImage:'linear-gradient(to left, rgba(0,0,0,0.6) 0%, transparent 100%)' }} /></div>
      <div className="absolute top-0 left-0 w-48 md:w-72 h-full opacity-10"><img src="/images/islamic-pattern.jpg" alt="" className="w-full h-full object-cover" style={{ maskImage:'linear-gradient(to right, rgba(0,0,0,0.6) 0%, transparent 100%)', WebkitMaskImage:'linear-gradient(to right, rgba(0,0,0,0.6) 0%, transparent 100%)' }} /></div>
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="mb-12">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-college-green mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{ fontFamily: 'var(--font-playfair)' }}>{d.heading}</h2>
          <div className={`h-1 bg-college-gold transition-all duration-1000 delay-300 ${isInView ? 'w-full' : 'w-0'}`} />
        </div>
        <div className={`transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
          <div className="relative">
            <span className="text-8xl md:text-9xl text-college-gold/30 absolute -top-8 -left-4 leading-none" style={{ fontFamily: 'var(--font-playfair)' }}>"</span>
            <blockquote className="text-xl md:text-2xl lg:text-3xl text-college-green-dark leading-relaxed pl-8 pt-8 italic max-w-3xl" style={{ fontFamily: 'var(--font-amiri)' }}>{d.quote}</blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
