import { useInView } from '../../hooks/useInView';
import { useData } from '../../context/DataContext';

export default function LeadershipSlide() {
  const { ref, isInView } = useInView(0.2);
  const { data } = useData();
  const leaders = data.leadership;
  return (
    <section id="leadership" ref={ref} className="min-h-screen flex items-center justify-center bg-college-cream-light py-16 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-16"><h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-college-green mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{ fontFamily: 'var(--font-playfair)' }}>Our Leadership</h2><div className={`h-1 bg-college-gold transition-all duration-1000 delay-300 ${isInView ? 'w-full' : 'w-0'}`} /></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, idx) => (
            <div key={idx} className={`bg-white rounded-xl p-8 shadow-sm border-t-4 border-college-gold text-center transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: `${400 + idx * 200}ms` }}>
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-college-green/10 to-college-green/5 flex items-center justify-center mb-6 shadow-inner overflow-hidden">
                {leader.image ? <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" /> : <span className="text-3xl font-bold text-college-green/40" style={{ fontFamily: 'var(--font-playfair)' }}>{leader.initial}</span>}
              </div>
              <h3 className="text-xl font-bold text-college-green mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>{leader.role}</h3>
              <p className="text-gray-500 text-sm font-medium tracking-wide uppercase">{leader.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
