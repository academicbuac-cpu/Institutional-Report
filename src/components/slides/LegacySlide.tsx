import { useInView } from '../../hooks/useInView';
import { useData } from '../../context/DataContext';
import { Award, BookOpen, Shield, TrendingUp } from 'lucide-react';
const icons = [Award, BookOpen, Shield, TrendingUp];

export default function LegacySlide() {
  const { ref, isInView } = useInView(0.2);
  const { data } = useData();
  const d = data.legacy;
  return (
    <section id="legacy" ref={ref} className="min-h-screen flex items-center justify-center bg-college-cream-light py-16 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-college-green mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{ fontFamily: 'var(--font-playfair)' }}>{d.heading}</h2>
            <div className={`h-1 bg-college-gold mb-10 transition-all duration-1000 delay-300 ${isInView ? 'w-full' : 'w-0'}`} />
            <div className="space-y-6">
              {d.items.map((item, idx) => { const Icon = icons[idx % icons.length]; return (
                <div key={idx} className={`flex items-start gap-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: `${500 + idx * 150}ms` }}>
                  <div className="w-10 h-10 bg-college-green/10 rounded-lg flex-shrink-0 flex items-center justify-center mt-1 overflow-hidden">{item.image ? <img src={item.image} alt={item.title} className="w-full h-full object-cover" /> : <Icon className="text-college-green" size={20} />}</div>
                  <div><h3 className="text-lg font-bold text-college-green-dark mb-1">{item.title}</h3><p className="text-gray-600 leading-relaxed">{item.description}</p></div>
                </div>
              ); })}
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={d.campusImage || '/images/campus-building.jpg'} alt="Campus" className="w-full h-[400px] md:h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-college-green-dark/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
