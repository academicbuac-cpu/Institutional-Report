import { useInView } from '../../hooks/useInView';
import { useData } from '../../context/DataContext';

export default function MemorySlide() {
  const { ref, isInView } = useInView(0.2);
  const { data } = useData();
  const d = data.memory;
  return (
    <section id="memory" ref={ref} className="min-h-screen flex items-center justify-center bg-college-cream py-16 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className={`text-center text-4xl md:text-5xl lg:text-6xl font-bold text-college-green mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ fontFamily: 'var(--font-playfair)' }}>{d.heading}</h2>
        <div className={`h-0.5 bg-college-gold/40 max-w-xs mx-auto mb-16 transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-end">
          {d.figures.map((figure, idx) => (
            <div key={idx} className={`flex flex-col items-center text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${figure.featured ? 'md:-mt-8' : ''}`} style={{ transitionDelay: `${300 + idx * 200}ms` }}>
              <div className={`relative ${figure.featured ? 'w-56 h-56 md:w-72 md:h-72' : 'w-44 h-44 md:w-52 md:h-52'} rounded-full overflow-hidden mb-6 shadow-2xl ring-4 ring-college-green/20`}>
                {figure.image ? (
                  <img src={figure.image} alt={figure.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                    <span className={`${figure.featured ? 'text-4xl' : 'text-3xl'} font-bold text-college-green/50`} style={{ fontFamily: 'var(--font-playfair)' }}>{figure.initial}</span>
                  </div>
                )}
              </div>
              <h3 className={`${figure.featured ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'} font-bold text-college-green-dark mb-2`} style={{ fontFamily: 'var(--font-playfair)' }}>{figure.name}</h3>
              <p className="text-college-green/60 text-sm md:text-base font-medium tracking-wide uppercase">{figure.role}</p>
            </div>
          ))}
        </div>
        <p className={`text-center text-college-green/50 mt-16 max-w-2xl mx-auto italic text-lg transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`} style={{ fontFamily: 'var(--font-amiri)', transitionDelay: '1000ms' }}>"{d.quote}"</p>
      </div>
    </section>
  );
}
