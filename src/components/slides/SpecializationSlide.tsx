import { useInView } from '../../hooks/useInView';
import { useData } from '../../context/DataContext';

export default function SpecializationSlide() {
  const { ref, isInView } = useInView(0.2);
  const { data } = useData();
  const d = data.specialization;
  return (
    <section id="specialization" ref={ref} className="min-h-screen flex items-center justify-center bg-college-cream py-16 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12 md:mb-16">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-college-green mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{ fontFamily: 'var(--font-playfair)' }}>{d.heading}</h2>
          <div className={`h-1 bg-college-gold transition-all duration-1000 delay-300 ${isInView ? 'w-full' : 'w-0'}`} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`flex justify-center transition-all duration-1000 delay-400 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl ring-8 ring-college-green/10">
              <img src={d.image || '/images/manuscripts.jpg'} alt="Manuscripts" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className={`transition-all duration-700 delay-600 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <h3 className="text-3xl md:text-4xl font-bold text-college-green-dark mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>{d.subheading}</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">{d.description}</p>
            <div className="space-y-4">
              {d.topics.map((topic, idx) => (
                <div key={idx} className={`flex items-center gap-3 transition-all duration-500 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`} style={{ transitionDelay: `${800 + idx * 100}ms` }}>
                  <div className="w-2 h-2 rounded-full bg-college-green flex-shrink-0" /><span className="text-gray-700">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
