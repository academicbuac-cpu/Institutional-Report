import { useInView } from '../../hooks/useInView';
import { useData } from '../../context/DataContext';
import { MapPin, Phone, Mail, Globe, Heart } from 'lucide-react';
const iconMap = [MapPin, Phone, Mail, Globe];

export default function ContactSlide() {
  const { ref, isInView } = useInView(0.2);
  const { data } = useData();
  const d = data.contact;
  return (
    <section id="contact" ref={ref} className="min-h-screen flex items-center justify-center bg-college-green relative overflow-hidden py-16 px-4">
      <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage:'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 36px)' }} /></div>
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ fontFamily: 'var(--font-playfair)' }}>{d.heading}</h2>
          <div className={`h-1 bg-college-gold-light mx-auto transition-all duration-1000 delay-300 ${isInView ? 'w-32' : 'w-0'}`} />
          <p className={`text-white/80 mt-6 text-lg max-w-2xl mx-auto transition-all duration-700 delay-400 ${isInView ? 'opacity-100' : 'opacity-0'}`}>{d.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {d.items.map((contact, idx) => { const Icon = iconMap[idx % iconMap.length]; return (
            <div key={idx} className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: `${500 + idx * 150}ms` }}>
              <div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 bg-college-gold-light/20 rounded-lg flex items-center justify-center"><Icon className="text-college-gold-light" size={20} /></div><h3 className="text-white font-bold text-lg">{contact.title}</h3></div>
              {contact.lines.map((line, li) => (<p key={li} className="text-white/70 text-sm leading-relaxed">{line}</p>))}
            </div>
          ); })}
        </div>
        <div className={`text-center border-t border-white/10 pt-8 transition-all duration-700 delay-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}><p className="text-white/50 text-sm flex items-center justify-center gap-2">Made with <Heart size={14} className="text-red-400" /> for Busthanul Uloom Arabic College</p></div>
      </div>
    </section>
  );
}
