import { useInView } from '../../hooks/useInView';
import { useData } from '../../context/DataContext';
import { BookOpen, Gift, Building2 } from 'lucide-react';
const icons = [BookOpen, Gift, Building2];

export default function LibrarySlide() {
  const { ref, isInView } = useInView(0.2);
  const { data } = useData();
  const d = data.library;
  return (
    <section id="library" ref={ref} className="min-h-screen flex items-center justify-center bg-college-cream-light py-16 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-400 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {d.libraryImage ? (
                <img src={d.libraryImage} alt="Library" className="w-full h-[400px] md:h-[500px] object-cover" />
              ) : (
                <div className="w-full h-[400px] md:h-[500px] bg-gradient-to-br from-amber-900/80 to-stone-800/80 flex items-center justify-center"><div className="text-center text-white px-8"><div className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>BUSTHAN LIBRARY</div><div className="text-lg text-white/80 mb-4">AK Abdulla Haji Memorial</div><div className="text-base text-white/60">Cum Event Hall</div></div></div>
              )}
            </div>
          </div>
          <div>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-college-green mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{ fontFamily: 'var(--font-playfair)' }}>{d.heading}</h2>
            <div className={`h-1 bg-college-gold mb-10 transition-all duration-1000 delay-300 ${isInView ? 'w-full' : 'w-0'}`} />
            <div className="space-y-8">
              {d.items.map((item, idx) => { const Icon = icons[idx % icons.length]; return (
                <div key={idx} className={`flex items-start gap-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: `${500 + idx * 200}ms` }}>
                  <div className="w-10 h-10 bg-college-green/10 rounded-lg flex-shrink-0 flex items-center justify-center mt-1 overflow-hidden">{item.image ? <img src={item.image} alt={item.title} className="w-full h-full object-cover" /> : <Icon className="text-college-green" size={20} />}</div>
                  <div><h3 className="text-lg font-bold text-college-green-dark mb-1">{item.title}</h3><p className="text-gray-600 leading-relaxed">{item.description}</p></div>
                </div>
              ); })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
