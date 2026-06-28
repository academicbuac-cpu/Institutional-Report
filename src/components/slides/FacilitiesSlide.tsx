import { useInView } from '../../hooks/useInView';
import { useData } from '../../context/DataContext';
import { Building, Newspaper } from 'lucide-react';

export default function FacilitiesSlide() {
  const { ref, isInView } = useInView(0.2);
  const { data } = useData();
  const d = data.facilitiesPublications;
  return (
    <section id="facilities" ref={ref} className="min-h-screen flex items-center justify-center bg-college-cream py-16 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12"><h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-college-green mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{ fontFamily: 'var(--font-playfair)' }}>{d.heading}</h2><div className={`h-1 bg-college-gold transition-all duration-1000 delay-300 ${isInView ? 'w-full' : 'w-0'}`} /></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className={`bg-white rounded-xl p-8 shadow-sm border-l-4 border-college-green transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="flex items-center gap-4 mb-6"><div className="w-12 h-12 bg-college-green/10 rounded-lg flex items-center justify-center"><Building className="text-college-green" size={28} /></div><h3 className="text-2xl font-bold text-college-green" style={{ fontFamily: 'var(--font-playfair)' }}>Campus Facilities</h3></div>
            <ul className="space-y-3 pl-4">{d.facilities.map((item, idx) => (<li key={idx} className="flex items-start gap-3 text-gray-600 text-lg"><span className="w-2 h-2 rounded-full bg-college-green mt-2 flex-shrink-0" />{item}</li>))}</ul>
          </div>
          <div className={`bg-white rounded-xl p-8 shadow-sm border-l-4 border-college-gold transition-all duration-700 delay-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="flex items-center gap-4 mb-6"><div className="w-12 h-12 bg-college-gold/10 rounded-lg flex items-center justify-center"><Newspaper className="text-college-gold" size={28} /></div><h3 className="text-2xl font-bold text-college-green" style={{ fontFamily: 'var(--font-playfair)' }}>Publications</h3></div>
            <ul className="space-y-3 pl-4">{d.publications.map((item, idx) => (<li key={idx} className="flex items-start gap-3 text-gray-600 text-lg"><span className="w-2 h-2 rounded-full bg-college-gold mt-2 flex-shrink-0" /><span><strong className="text-college-green-dark">{item.name}:</strong> {item.desc}</span></li>))}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
