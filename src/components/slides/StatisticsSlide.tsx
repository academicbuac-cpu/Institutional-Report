import { useInView } from '../../hooks/useInView';
import { useData } from '../../context/DataContext';

export default function StatisticsSlide() {
  const { ref, isInView } = useInView(0.2);
  const { data } = useData();
  const d = data.statistics;
  return (
    <section id="statistics" ref={ref} className="min-h-screen flex items-center justify-center bg-college-cream py-16 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-16"><h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-college-green mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{ fontFamily: 'var(--font-playfair)' }}>{d.heading}</h2><div className={`h-1 bg-college-gold transition-all duration-1000 delay-300 ${isInView ? 'w-full' : 'w-0'}`} /></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {d.stats.map((stat, idx) => (
            <div key={idx} className={`bg-white rounded-xl p-12 shadow-sm border-t-4 border-college-gold text-center transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: `${400 + idx * 200}ms` }}>
              <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-college-green mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>{stat.value}</div>
              <div className="text-gray-500 text-lg font-medium tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className={`mt-16 text-center transition-all duration-700 delay-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}><p className="text-gray-500 text-lg max-w-2xl mx-auto italic" style={{ fontFamily: 'var(--font-amiri)' }}>"{d.quote}"</p></div>
      </div>
    </section>
  );
}
