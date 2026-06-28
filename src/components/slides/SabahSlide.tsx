import { useInView } from '../../hooks/useInView';
import { useData } from '../../context/DataContext';

export default function SabahSlide() {
  const { ref, isInView } = useInView(0.2);
  const { data } = useData();
  const d = data.sabah;
  return (
    <section id="sabah" ref={ref} className="min-h-screen flex items-center justify-center bg-college-cream-light py-16 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-college-green mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{ fontFamily: 'var(--font-playfair)' }}>{d.heading}</h2>
            <div className={`h-1 bg-college-gold mb-8 transition-all duration-1000 delay-300 ${isInView ? 'w-full max-w-md' : 'w-0'}`} />
            <h3 className={`text-xl md:text-2xl font-bold text-college-green-dark mb-6 transition-all duration-700 delay-400 ${isInView ? 'opacity-100' : 'opacity-0'}`}>{d.fullName}</h3>
            <p className={`text-gray-600 text-lg leading-relaxed transition-all duration-700 delay-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>{d.description}</p>
          </div>
          <div className={`flex justify-center transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
            <div className="relative w-80 h-80 md:w-96 md:h-96"><div className="absolute inset-0 rounded-full border-8 border-college-green/20 flex items-center justify-center bg-white shadow-2xl overflow-hidden">{d.image ? <img src={d.image} alt={d.fullName} className="w-full h-full object-cover" /> : <div className="text-center px-8"><div className="text-6xl font-bold text-college-green mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>S A B A H</div><div className="w-16 h-1 bg-college-gold mx-auto mb-4" /><p className="text-gray-500 text-sm italic">Students Association of<br/>Busthanul Uloom Arabic Herald</p><div className="mt-6 text-3xl font-bold text-college-green-dark" style={{ fontFamily: 'var(--font-amiri)' }}>صباح</div></div>}</div><div className="absolute -inset-4 rounded-full border-2 border-college-gold/20" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
