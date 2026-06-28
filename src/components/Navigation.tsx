import { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown, Menu, X, Settings } from 'lucide-react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'memory', label: 'In Memory' },
  { id: 'objectives', label: 'Objectives' },
  { id: 'vision', label: 'Vision' },
  { id: 'mission', label: 'Mission' },
  { id: 'history', label: 'History' },
  { id: 'legacy', label: 'Legacy' },
  { id: 'graduates', label: 'Graduates' },
  { id: 'curriculum', label: 'Curriculum' },
  { id: 'specialization', label: 'Specialization' },
  { id: 'academic-strength', label: 'Academic' },
  { id: 'research-focus', label: 'Research' },
  { id: 'sabah', label: 'SABAH' },
  { id: 'sabah-activities', label: 'SABAH Act.' },
  { id: 'al-burhan', label: 'Alumni' },
  { id: 'alumni-contributions', label: 'Contrib.' },
  { id: 'library', label: 'Library' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'outreach', label: 'Outreach' },
  { id: 'statistics', label: 'Stats' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'global-records', label: 'Records' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'sabah-publications', label: 'SABAH Pubs' },
  { id: 'fiqh-publications', label: 'FIQH Pubs' },
  { id: 'cherished-moments-1', label: 'Moments' },
  { id: 'cherished-moments-2', label: 'Moments 2' },
  { id: 'financial', label: 'Financial' },
  { id: 'thank-you', label: 'Thank You' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation({ onOpenAdmin }: { onOpenAdmin?: () => void }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const currentIndex = sections.findIndex((s) => s.id === activeSection);

  const goUp = () => {
    if (currentIndex > 0) scrollTo(sections[currentIndex - 1].id);
  };
  const goDown = () => {
    if (currentIndex < sections.length - 1) scrollTo(sections[currentIndex + 1].id);
  };

  return (
    <>
      {/* Admin Button */}
      {onOpenAdmin && (
        <button
          onClick={onOpenAdmin}
          className="fixed bottom-6 right-6 z-50 p-3 bg-college-green text-white rounded-full shadow-lg hover:bg-college-green-dark transition-colors"
          title="Admin Panel"
        >
          <Settings size={20} />
        </button>
      )}

      {/* Dot Navigation - Right Side */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-center gap-1.5 max-h-[70vh] overflow-y-auto py-4">
        <button
          onClick={goUp}
          className="p-1 rounded-full bg-college-green/20 hover:bg-college-green/40 text-college-green transition-colors mb-2"
        >
          <ChevronUp size={14} />
        </button>
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="group relative flex items-center"
            title={label}
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                activeSection === id
                  ? 'w-2.5 h-2.5 bg-college-green shadow-lg shadow-college-green/30'
                  : 'w-1.5 h-1.5 bg-college-green/30 hover:bg-college-green/60'
              }`}
            />
            <span className="absolute right-5 bg-college-green text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {label}
            </span>
          </button>
        ))}
        <button
          onClick={goDown}
          className="p-1 rounded-full bg-college-green/20 hover:bg-college-green/40 text-college-green transition-colors mt-2"
        >
          <ChevronDown size={14} />
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-4 right-4 z-50 lg:hidden p-2 bg-college-green text-white rounded-lg shadow-lg"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-college-green-dark/95 flex items-center justify-center lg:hidden">
          <nav className="flex flex-col items-center gap-3 max-h-[80vh] overflow-y-auto py-8 px-4">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`text-base font-medium transition-colors ${
                  activeSection === id ? 'text-college-gold-light' : 'text-white/80 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
            {onOpenAdmin && (
              <button
                onClick={() => { onOpenAdmin(); setMenuOpen(false); }}
                className="text-base font-medium text-white/80 hover:text-white mt-4 flex items-center gap-2"
              >
                <Settings size={18} /> Admin Panel
              </button>
            )}
          </nav>
        </div>
      )}

      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-college-cream">
        <div
          className="h-full bg-gradient-to-r from-college-green to-college-gold transition-all duration-500"
          style={{ width: `${((currentIndex + 1) / sections.length) * 100}%` }}
        />
      </div>
    </>
  );
}
