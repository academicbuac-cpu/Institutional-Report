import { useInView } from '../../hooks/useInView';
import { useData } from '../../context/DataContext';

export default function HistorySlide() {
  const { ref, isInView } = useInView(0.2);
  const { data } = useData();
  const d = data.history;
  return (
    <section id="history" ref={ref} className="min-h-screen flex items-center justify-center bg-college-cream py-16 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-16 md:mb-24">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-college-green mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{ fontFamily: 'var(--font-playfair)' }}>{d.heading}</h2>
          <div className={`h-1 bg-college-gold transition-all duration-1000 delay-300 ${isInView ? 'w-full' : 'w-0'}`} />
        </div>
        <div className="relative">
          <div className="absolute left-4 md:left-0 top-4 md:top-6 w-1 md:w-full h-[calc(100%-2rem)] md:h-1 bg-college-green/20"><div className={`bg-college-gold h-full md:h-full transition-all duration-2000 ${isInView ? 'md:w-full w-full' : 'md:w-0 w-0'}`} style={{ transitionDelay: '400ms' }} /></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
            {d.milestones.map((m, idx) => (
              <div key={idx} className={`relative pl-12 md:pl-0 md:text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${500 + idx * 300}ms` }}>
                <div className="absolute left-1.5 md:left-1/2 md:-translate-x-1/2 top-0 md:top-3 w-6 h-6 rounded-full bg-college-green border-4 border-college-cream shadow-lg z-10" />
                <div className="md:pt-16">
                  <h3 className="text-xl md:text-2xl font-bold text-college-green mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>{m.year}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
