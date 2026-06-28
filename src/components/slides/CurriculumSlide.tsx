import { useInView } from '../../hooks/useInView';
import { useData } from '../../context/DataContext';

export default function CurriculumSlide() {
  const { ref, isInView } = useInView(0.2);
  const { data } = useData();
  const d = data.curriculum;
  return (
    <section id="curriculum" ref={ref} className="min-h-screen flex items-center justify-center bg-college-cream-light py-16 px-4">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-12 md:mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-college-green mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{ fontFamily: 'var(--font-playfair)' }}>{d.heading}</h2>
          <div className={`h-1 bg-college-gold transition-all duration-1000 delay-300 ${isInView ? 'w-full' : 'w-0'}`} />
        </div>
        <div className={`overflow-hidden rounded-xl shadow-lg transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="grid grid-cols-3 bg-college-green text-white"><div className="p-4 md:p-6 font-bold text-lg">Level</div><div className="p-4 md:p-6 font-bold text-lg">Duration</div><div className="p-4 md:p-6 font-bold text-lg">Focus</div></div>
          {d.rows.map((row, idx) => (
            <div key={idx} className={`grid grid-cols-3 border-b border-gray-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-college-green/5 transition-all duration-500 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: `${600 + idx * 150}ms` }}>
              <div className="p-4 md:p-6"><span className="font-bold text-college-green-dark text-sm md:text-base">{row.level}</span></div>
              <div className="p-4 md:p-6 text-gray-600 text-sm md:text-base">{row.duration}</div>
              <div className="p-4 md:p-6 text-gray-600 text-sm md:text-base">{row.focus}</div>
            </div>
          ))}
        </div>
        <div className={`mt-8 bg-white rounded-xl p-6 md:p-8 shadow-sm border-l-4 border-college-gold transition-all duration-700 delay-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gray-600 leading-relaxed"><span className="font-bold text-college-green">Note:</span> {d.note}</p>
        </div>
      </div>
    </section>
  );
}
