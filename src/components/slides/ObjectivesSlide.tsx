import { useInView } from '../../hooks/useInView';
import { useData } from '../../context/DataContext';
import { GraduationCap, Globe, Scale, Building2 } from 'lucide-react';

const icons = [GraduationCap, Globe, Scale, Building2];

export default function ObjectivesSlide() {
  const { ref, isInView } = useInView(0.2);
  const { data } = useData();
  const d = data.objectives;
  return (
    <section id="objectives" ref={ref} className="min-h-screen flex items-center justify-center bg-college-cream-light py-16 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-college-green mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{ fontFamily: 'var(--font-playfair)' }}>{d.heading}</h2>
          <div className={`h-1 bg-college-gold transition-all duration-1000 delay-300 ${isInView ? 'w-full' : 'w-0'}`} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {d.items.map((obj, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div key={idx} className={`bg-white rounded-xl p-8 shadow-sm border-l-4 border-college-green hover:shadow-lg transition-all duration-700 group ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: `${400 + idx * 150}ms` }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-college-green/10 rounded-lg overflow-hidden flex items-center justify-center group-hover:bg-college-green/20 transition-colors">
                    {obj.image ? <img src={obj.image} alt={obj.title} className="w-full h-full object-cover" /> : <Icon className="text-college-green" size={28} />}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-college-green" style={{ fontFamily: 'var(--font-playfair)' }}>{obj.title}</h3>
                </div>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed pl-16">{obj.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
