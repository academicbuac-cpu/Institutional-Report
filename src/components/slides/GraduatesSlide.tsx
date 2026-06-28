import { useInView } from '../../hooks/useInView';
import { useData } from '../../context/DataContext';
import { CheckCircle } from 'lucide-react';

export default function GraduatesSlide() {
  const { ref, isInView } = useInView(0.2);
  const { data } = useData();
  const d = data.graduates;
  return (
    <section id="graduates" ref={ref} className="min-h-screen flex items-center justify-center bg-college-cream py-16 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-college-green mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{ fontFamily: 'var(--font-playfair)' }}>{d.heading}</h2>
          <div className={`h-1 bg-college-gold transition-all duration-1000 delay-300 ${isInView ? 'w-full' : 'w-0'}`} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {d.achievements.map((item, idx) => (
              <div key={idx} className={`flex items-start gap-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: `${400 + idx * 200}ms` }}>
                <CheckCircle className="text-college-green flex-shrink-0 mt-1" size={24} /><p className="text-gray-700 text-lg leading-relaxed">{item}</p>
              </div>
            ))}
            <div className={`grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-college-green/10 transition-all duration-700 delay-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {d.stats.map((s, i) => (
                <div key={i} className="text-center"><div className="text-3xl md:text-4xl font-bold text-college-green" style={{ fontFamily: 'var(--font-playfair)' }}>{s.value}</div><div className="text-sm text-gray-500 mt-1">{s.label}</div></div>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl"><img src={d.image || '/images/scholars-walking.jpg'} alt="Students" className="w-full h-[350px] md:h-[450px] object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-college-green-dark/30 to-transparent" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
