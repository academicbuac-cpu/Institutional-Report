import { useInView } from '../../hooks/useInView';
import { useData } from '../../context/DataContext';
import { HandCoins, Briefcase, Users } from 'lucide-react';
const icons = [HandCoins, Briefcase, Users];

export default function AlumniContributionsSlide() {
  const { ref, isInView } = useInView(0.2);
  const { data } = useData();
  const d = data.alumniContributions;
  return (
    <section id="alumni-contributions" ref={ref} className="min-h-screen flex items-center justify-center bg-college-cream py-16 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-16"><h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-college-green mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{ fontFamily: 'var(--font-playfair)' }}>{d.heading}</h2><div className={`h-1 bg-college-gold transition-all duration-1000 delay-300 ${isInView ? 'w-full' : 'w-0'}`} /></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {d.items.map((item, idx) => { const Icon = icons[idx % icons.length]; return (
            <div key={idx} className={`bg-white rounded-xl p-8 shadow-sm border-t-4 border-college-gold hover:shadow-lg hover:-translate-y-1 transition-all duration-700 text-center group ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: `${400 + idx * 200}ms` }}>
              <div className="w-16 h-16 bg-college-green/10 rounded-2xl overflow-hidden flex items-center justify-center mx-auto mb-6 group-hover:bg-college-green group-hover:text-white transition-colors">{item.image ? <img src={item.image} alt={item.title} className="w-full h-full object-cover" /> : <Icon className="text-college-green group-hover:text-white transition-colors" size={32} />}</div>
              <h3 className="text-xl font-bold text-college-green mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ); })}
        </div>
      </div>
    </section>
  );
}
