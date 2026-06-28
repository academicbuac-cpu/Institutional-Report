import { useInView } from '../../hooks/useInView';
import { useData } from '../../context/DataContext';

export default function CherishedMomentsSlide() {
  const { ref, isInView } = useInView(0.2);
  const { data } = useData();
  const moments = data.cherishedMoments1;
  return (
    <section id="cherished-moments-1" ref={ref} className="min-h-screen flex items-center justify-center bg-college-cream-light py-16 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12"><h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-college-green mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{ fontFamily: 'var(--font-playfair)' }}>Cherished Moments</h2><div className={`h-1 bg-college-gold transition-all duration-1000 delay-300 ${isInView ? 'w-full' : 'w-0'}`} /></div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {moments.map((m, idx) => (
            <div key={idx} className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-700 hover:scale-105 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: `${400 + idx * 100}ms` }}>
              {m.image ? (<div className="aspect-[4/3] relative"><img src={m.image} alt={m.title} className="w-full h-full object-cover" /><div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3"><div className="text-white text-sm font-bold">{m.title}</div></div></div>) : (<div className={`aspect-[4/3] bg-gradient-to-br ${m.color} p-4 flex flex-col justify-end text-white`}><div className="text-sm font-bold">{m.title}</div></div>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
