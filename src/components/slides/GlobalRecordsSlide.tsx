import { useInView } from '../../hooks/useInView';
import { useData } from '../../context/DataContext';

export default function GlobalRecordsSlide() {
  const { ref, isInView } = useInView(0.2);
  const { data } = useData();
  const d = data.globalRecords;
  return (
    <section id="global-records" ref={ref} className="min-h-screen flex items-center justify-center bg-college-cream py-16 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12"><div className="flex items-center gap-3"><div className="w-1.5 h-10 bg-college-gold rounded" /><h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-college-green transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{ fontFamily: 'var(--font-playfair)' }}>{d.heading}</h2></div></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`flex gap-4 transition-all duration-1000 delay-400 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            {d.recordCards.map((card, idx) => (
              <div key={idx} className={`flex-1 bg-gradient-to-br ${card.color} rounded-lg p-4 text-white shadow-xl aspect-[3/4] flex flex-col justify-end overflow-hidden relative`}>
                {card.image && <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover" />}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="relative z-10"><div className="text-xs opacity-80 mb-1">{card.title}</div><div className="text-sm font-bold">{card.person}</div><div className="text-xs mt-1">{card.subtitle}</div></div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-8">
            <div className={`text-center transition-all duration-700 delay-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}><div className="text-7xl md:text-8xl font-bold text-college-green mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>{d.indian.count}</div><div className="text-gray-600 font-medium">{d.indian.label}</div></div>
            <div className="w-px h-24 bg-college-gold/40" />
            <div className={`text-center transition-all duration-700 delay-800 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}><div className="text-7xl md:text-8xl font-bold text-amber-700 mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>{d.asian.count}</div><div className="text-gray-600 font-medium">{d.asian.label}</div></div>
          </div>
        </div>
        <p className={`text-center text-gray-500 mt-12 max-w-2xl mx-auto italic text-lg transition-all duration-700 delay-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`} style={{ fontFamily: 'var(--font-amiri)' }}>"{d.description}"</p>
      </div>
    </section>
  );
}
