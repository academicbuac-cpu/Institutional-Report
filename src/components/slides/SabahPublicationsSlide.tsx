import { useInView } from '../../hooks/useInView';
import { useData } from '../../context/DataContext';

export default function SabahPublicationsSlide() {
  const { ref, isInView } = useInView(0.2);
  const { data } = useData();
  const pubs = data.sabahPublications;
  return (
    <section id="sabah-publications" ref={ref} className="min-h-screen flex items-center justify-center bg-college-cream py-16 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12"><div className="flex items-center gap-3"><div className="w-1.5 h-10 bg-college-gold rounded" /><h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-college-green transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{ fontFamily: 'var(--font-playfair)' }}>Publications of Students' Union (SABAH)</h2></div></div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {pubs.map((pub, idx) => (
            <div key={idx} className={`rounded-lg overflow-hidden shadow-lg transition-all duration-700 hover:scale-105 hover:shadow-xl ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: `${400 + idx * 100}ms` }}>
              {pub.image ? (
                <div className="aspect-[3/4] relative"><img src={pub.image} alt={pub.title} className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" /><div className="absolute bottom-0 left-0 right-0 p-3"><div className="text-xs font-bold text-white/90 mb-0.5">{pub.title}</div>{pub.subtitle && <div className="text-[10px] text-white/70">{pub.subtitle}</div>}</div></div>
              ) : (
                <div className={`aspect-[3/4] bg-gradient-to-br ${pub.color} p-3 flex flex-col justify-end`}><div className="text-xs font-bold text-white/90 mb-0.5">{pub.title}</div>{pub.subtitle && <div className="text-[10px] text-white/70">{pub.subtitle}</div>}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
