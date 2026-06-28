import { useInView } from '../../hooks/useInView';
import { useData } from '../../context/DataContext';
import { Link, Globe, TrendingUp } from 'lucide-react';
const icons = [Link, Globe, TrendingUp];

export default function AlBurhanSlide() {
  const { ref, isInView } = useInView(0.2);
  const { data } = useData();
  const d = data.alBurhan;
  return (
    <section id="al-burhan" ref={ref} className="min-h-screen flex items-center justify-center bg-college-cream-light py-16 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12"><h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-college-green mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{ fontFamily: 'var(--font-playfair)' }}>{d.heading}</h2><div className={`h-1 bg-college-gold transition-all duration-1000 delay-300 ${isInView ? 'w-full' : 'w-0'}`} /></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`flex justify-center transition-all duration-1000 delay-400 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl bg-white flex items-center justify-center">
              {d.image ? <img src={d.image} alt={d.heading} className="w-full h-full object-cover" /> : <div className="text-center px-6"><svg className="w-40 h-40 mx-auto mb-4" viewBox="0 0 120 120" fill="none"><circle cx="60" cy="60" r="50" fill="#1B5E20" fillOpacity="0.05"/><path d="M60 10 L65 45 L100 50 L70 70 L80 105 L60 85 L40 105 L50 70 L20 50 L55 45 Z" fill="#1B5E20" fillOpacity="0.15"/><circle cx="60" cy="60" r="15" fill="#9E8B3C" fillOpacity="0.4"/></svg><div className="text-2xl font-bold text-college-green" style={{ fontFamily: 'var(--font-playfair)' }}>AL Burhan</div><div className="text-xs text-gray-400 mt-1">Alumni Association of Busthanul Uloom</div></div>}
            </div>
          </div>
          <div className="space-y-8">
            {d.items.map((item, idx) => { const Icon = icons[idx % icons.length]; return (
              <div key={idx} className={`flex items-start gap-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: `${500 + idx * 200}ms` }}>
                <div className="w-10 h-10 bg-college-green/10 rounded-lg flex-shrink-0 flex items-center justify-center mt-1"><Icon className="text-college-green" size={20} /></div>
                <div><h3 className="text-xl font-bold text-college-green-dark mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>{item.title}</h3><p className="text-gray-600 leading-relaxed">{item.description}</p></div>
              </div>
            ); })}
          </div>
        </div>
      </div>
    </section>
  );
}
