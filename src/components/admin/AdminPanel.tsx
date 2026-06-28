import { useState, useRef } from 'react';
import { useData, SiteData } from '../../context/DataContext';
import { X, Save, RotateCcw, ChevronDown, ChevronRight, Image as ImageIcon, Plus, Trash2, Eraser } from 'lucide-react';

const sectionList = [
  { key: 'hero', label: '🏠 Hero / Title Slide' },
  { key: 'memory', label: '🕊️ In the Memory Of' },
  { key: 'objectives', label: '🎯 Objectives' },
  { key: 'vision', label: '👁️ Vision' },
  { key: 'mission', label: '🚀 Mission' },
  { key: 'history', label: '📜 History' },
  { key: 'legacy', label: '🏛️ Legacy' },
  { key: 'graduates', label: '🎓 Graduates' },
  { key: 'curriculum', label: '📚 Curriculum' },
  { key: 'specialization', label: '⚖️ Specialization' },
  { key: 'academicStrength', label: '📖 Academic Strength' },
  { key: 'researchFocus', label: '🔬 Research Focus' },
  { key: 'sabah', label: '🤝 SABAH' },
  { key: 'sabahActivities', label: '⚡ SABAH Activities' },
  { key: 'alBurhan', label: '🏅 Al-Burhan' },
  { key: 'alumniContributions', label: '💰 Alumni Contributions' },
  { key: 'library', label: '📚 Library' },
  { key: 'facilitiesPublications', label: '🏗️ Facilities & Publications' },
  { key: 'outreach', label: '📡 Outreach' },
  { key: 'statistics', label: '📊 Statistics' },
  { key: 'leadership', label: '👥 Leadership' },
  { key: 'globalRecords', label: '🏆 Global Records' },
  { key: 'achievements', label: '🎖️ Achievements' },
  { key: 'sabahPublications', label: '📰 SABAH Publications' },
  { key: 'fiqhPublications', label: '📕 FIQH Publications' },
  { key: 'cherishedMoments1', label: '📸 Cherished Moments 1' },
  { key: 'cherishedMoments2', label: '📸 Cherished Moments 2' },
  { key: 'financial', label: '💵 Financial Overview' },
  { key: 'thankYou', label: '🙏 Thank You' },
  { key: 'contact', label: '📞 Contact' },
];

export default function AdminPanel({ onClose }: { onClose: () => void }) {
  const { data, updateNested, resetData } = useData();
  const [activeSection, setActiveSection] = useState('hero');
  const [saved, setSaved] = useState(false);

  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };
  const handleReset = () => { if (confirm('Reset ALL data to defaults? This cannot be undone.')) { resetData(); handleSave(); } };

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 flex">
      {/* Sidebar */}
      <div className="w-64 bg-college-green-dark text-white flex flex-col flex-shrink-0 overflow-hidden">
        <div className="p-4 border-b border-white/10">
          <h2 className="text-lg font-bold">⚙️ Admin Panel</h2>
          <p className="text-xs text-white/50 mt-1">Edit all content & images</p>
        </div>
        <div className="flex-1 overflow-y-auto py-2">
          {sectionList.map((s) => (
            <button key={s.key} onClick={() => setActiveSection(s.key)} className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center gap-2 ${activeSection === s.key ? 'bg-white/15 text-white font-medium' : 'text-white/60 hover:text-white hover:bg-white/5'}`}>
              {activeSection === s.key ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              <span className="truncate">{s.label}</span>
            </button>
          ))}
        </div>
        <div className="p-4 border-t border-white/10 space-y-2">
          <button onClick={handleReset} className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm text-red-300 hover:bg-red-500/20 rounded-lg transition-colors"><RotateCcw size={14} />Reset All</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white flex flex-col overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b bg-gray-50">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-bold text-college-green">{sectionList.find(s => s.key === activeSection)?.label}</h3>
            {saved && <span className="text-green-600 text-sm bg-green-50 px-3 py-1 rounded-full">✓ Saved!</span>}
          </div>
          <div className="flex items-center gap-3">
            <button onClick={handleSave} className="flex items-center gap-2 px-4 py-2 bg-college-green text-white text-sm rounded-lg hover:bg-college-green-dark transition-colors"><Save size={16} />Save</button>
            <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-lg transition-colors"><X size={20} /></button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          <SectionEditor sectionKey={activeSection} data={data} update={updateNested} />
        </div>
      </div>
    </div>
  );
}

/* ---- Image Upload Helper ---- */
function ImageUpload({ value, onChange, label }: { value?: string; onChange: (v: string) => void; label?: string }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) { const reader = new FileReader(); reader.onloadend = () => onChange(reader.result as string); reader.readAsDataURL(file); }
  };
  return (
    <div className="space-y-2">
      {label && <label className="text-xs text-gray-500 uppercase font-medium">{label}</label>}
      <div className="flex items-center gap-3">
        <div className="w-20 h-20 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden bg-gray-50 flex-shrink-0">
          {value ? <img src={value} alt="" className="w-full h-full object-cover" /> : <ImageIcon size={24} className="text-gray-300" />}
        </div>
        <div className="flex flex-col gap-2">
          <button onClick={() => inputRef.current?.click()} className="px-3 py-1.5 text-xs bg-college-green/10 text-college-green rounded-lg hover:bg-college-green/20 transition-colors font-medium">Upload Image</button>
          {value && <button onClick={() => onChange('')} className="px-3 py-1.5 text-xs text-red-500 hover:bg-red-50 rounded-lg transition-colors">Remove</button>}
        </div>
      </div>
      <input ref={inputRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />
    </div>
  );
}

/* ---- Field Helpers ---- */
function TextField({ label, value, onChange, multiline }: { label: string; value: string; onChange: (v: string) => void; multiline?: boolean }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <label className="text-xs text-gray-500 uppercase font-medium block">{label}</label>
        <button type="button" onClick={() => onChange('')} className="inline-flex items-center gap-1 text-[11px] text-red-500 hover:text-red-600 hover:bg-red-50 px-2 py-1 rounded transition-colors">
          <Eraser size={12} /> Clear
        </button>
      </div>
      {multiline ? <textarea value={value} onChange={e => onChange(e.target.value)} rows={3} className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-college-green/20 focus:border-college-green outline-none text-sm" /> : <input type="text" value={value} onChange={e => onChange(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-college-green/20 focus:border-college-green outline-none text-sm" />}
    </div>
  );
}

function NumberField({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  return (
    <div>
      <label className="text-xs text-gray-500 uppercase font-medium block mb-1">{label}</label>
      <input type="number" value={value} onChange={e => onChange(parseInt(e.target.value) || 0)} className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-college-green/20 focus:border-college-green outline-none text-sm" />
    </div>
  );
}

/* ---- Section Editor ---- */
function SectionEditor({ sectionKey, data, update }: { sectionKey: string; data: SiteData; update: (path: string, val: any) => void }) {
  switch (sectionKey) {
    case 'hero': {
      const d = data.hero;
      return (<div className="space-y-4 max-w-2xl">
        <TextField label="Subtitle" value={d.subtitle} onChange={v => update('hero.subtitle', v)} />
        <TextField label="Title" value={d.title} onChange={v => update('hero.title', v)} />
        <TextField label="Tagline" value={d.tagline} onChange={v => update('hero.tagline', v)} />
        <ImageUpload label="Background Image" value={d.backgroundImage} onChange={v => update('hero.backgroundImage', v)} />
      </div>);
    }
    case 'memory': {
      const d = data.memory;
      return (<div className="space-y-6 max-w-2xl">
        <TextField label="Section Heading" value={d.heading} onChange={v => update('memory.heading', v)} />
        <h4 className="font-bold text-college-green mt-4">Memorial Figures</h4>
        {d.figures.map((f, i) => (
          <div key={i} className="border rounded-xl p-4 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <TextField label="Name" value={f.name} onChange={v => { const a = [...d.figures]; a[i] = { ...a[i], name: v }; update('memory.figures', a); }} />
              <TextField label="Role" value={f.role} onChange={v => { const a = [...d.figures]; a[i] = { ...a[i], role: v }; update('memory.figures', a); }} />
            </div>
            <ImageUpload label="Photo" value={f.image} onChange={v => { const a = [...d.figures]; a[i] = { ...a[i], image: v }; update('memory.figures', a); }} />
            <button onClick={() => update('memory.figures', d.figures.filter((_, idx) => idx !== i))} className="flex items-center gap-1 text-xs text-red-500 hover:underline"><Trash2 size={12} />Remove Figure</button>
          </div>
        ))}
        <button onClick={() => update('memory.figures', [...d.figures, { name: 'New Figure', role: 'Role', initial: 'NF' }])} className="flex items-center gap-2 text-sm text-college-green hover:underline"><Plus size={16} />Add Figure</button>
        <TextField label="Quote" value={d.quote} onChange={v => update('memory.quote', v)} multiline />
      </div>);
    }
    case 'leadership': {
      const d = data.leadership;
      return (<div className="space-y-4 max-w-2xl">
        <h4 className="font-bold text-college-green">Leadership Team</h4>
        {d.map((l, i) => (
          <div key={i} className="border rounded-xl p-4 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <TextField label="Role" value={l.role} onChange={v => { const a = [...d]; a[i] = { ...a[i], role: v }; update('leadership', a); }} />
              <TextField label="Name" value={l.name} onChange={v => { const a = [...d]; a[i] = { ...a[i], name: v }; update('leadership', a); }} />
            </div>
            <ImageUpload label="Photo" value={l.image} onChange={v => { const a = [...d]; a[i] = { ...a[i], image: v }; update('leadership', a); }} />
            <button onClick={() => update('leadership', d.filter((_, idx) => idx !== i))} className="flex items-center gap-1 text-xs text-red-500 hover:underline"><Trash2 size={12} />Remove Member</button>
          </div>
        ))}
        <button onClick={() => update('leadership', [...d, { role: 'Role', name: 'Name', initial: 'XX' }])} className="flex items-center gap-2 text-sm text-college-green hover:underline"><Plus size={16} />Add Member</button>
      </div>);
    }
    case 'financial': {
      const f = data.financial;
      const total = f.publicDonations + f.managementPTA + f.others;
      return (<div className="space-y-4 max-w-md">
        <NumberField label="Public Donations (%)" value={f.publicDonations} onChange={v => update('financial.publicDonations', v)} />
        <NumberField label="Management & PTA (%)" value={f.managementPTA} onChange={v => update('financial.managementPTA', v)} />
        <NumberField label="Others (%)" value={f.others} onChange={v => update('financial.others', v)} />
        <div className={`p-3 rounded-lg text-sm font-medium ${total === 100 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>Total: {total}% {total !== 100 && '⚠ Should be 100%'}</div>
      </div>);
    }
    case 'thankYou': {
      const d = data.thankYou;
      return (<div className="space-y-4 max-w-2xl">
        <TextField label="Heading" value={d.heading} onChange={v => update('thankYou.heading', v)} />
        <TextField label="Subtitle" value={d.subtitle} onChange={v => update('thankYou.subtitle', v)} />
        <TextField label="Tagline" value={d.tagline} onChange={v => update('thankYou.tagline', v)} />
      </div>);
    }
    default:
      return <GenericEditor sectionKey={sectionKey} data={data} update={update} />;
  }
}

/* ---- Generic Editor for card-based/list sections ---- */
function GenericEditor({ sectionKey, data, update }: { sectionKey: string; data: SiteData; update: (path: string, val: any) => void }) {
  const section = (data as any)[sectionKey];
  if (!section) return <p className="text-gray-400 text-sm">No editable data for this section.</p>;

  if (Array.isArray(section)) {
    return (<div className="space-y-4 max-w-2xl">
      <h4 className="font-bold text-college-green">Items ({section.length})</h4>
      {section.map((item: any, i: number) => (
        <div key={i} className="border rounded-xl p-4 space-y-3">
          {item.title !== undefined && <TextField label="Title" value={item.title} onChange={v => { const a = [...section]; a[i] = { ...a[i], title: v }; update(sectionKey, a); }} />}
          {item.subtitle !== undefined && <TextField label="Subtitle" value={item.subtitle || ''} onChange={v => { const a = [...section]; a[i] = { ...a[i], subtitle: v }; update(sectionKey, a); }} />}
          {item.description !== undefined && <TextField label="Description" value={item.description} onChange={v => { const a = [...section]; a[i] = { ...a[i], description: v }; update(sectionKey, a); }} multiline />}
          {item.person !== undefined && <TextField label="Person" value={item.person} onChange={v => { const a = [...section]; a[i] = { ...a[i], person: v }; update(sectionKey, a); }} />}
          {item.color !== undefined && <TextField label="Gradient Color" value={item.color} onChange={v => { const a = [...section]; a[i] = { ...a[i], color: v }; update(sectionKey, a); }} />}
          <ImageUpload label="Image" value={item.image} onChange={v => { const a = [...section]; a[i] = { ...a[i], image: v }; update(sectionKey, a); }} />
          <button onClick={() => { const a = section.filter((_: any, idx: number) => idx !== i); update(sectionKey, a); }} className="flex items-center gap-1 text-xs text-red-500 hover:underline"><Trash2 size={12} />Remove Item</button>
        </div>
      ))}
      <button onClick={() => { const template = section[0] ? { ...section[0], title: 'New Item', description: 'Description' } : { title: 'New Item', color: 'from-gray-400 to-gray-600' }; update(sectionKey, [...section, template]); }} className="flex items-center gap-2 text-sm text-college-green hover:underline"><Plus size={16} />Add Item</button>
    </div>);
  }

  if (typeof section === 'object') {
    return (<div className="space-y-4 max-w-2xl">
      {section.heading !== undefined && <TextField label="Section Heading" value={section.heading} onChange={v => update(`${sectionKey}.heading`, v)} />}
      {section.quote !== undefined && <TextField label="Quote" value={section.quote} onChange={v => update(`${sectionKey}.quote`, v)} multiline />}
      {section.fullName !== undefined && <TextField label="Full Name" value={section.fullName} onChange={v => update(`${sectionKey}.fullName`, v)} />}
      {section.description !== undefined && <TextField label="Description" value={section.description} onChange={v => update(`${sectionKey}.description`, v)} multiline />}
      {section.subheading !== undefined && <TextField label="Subheading" value={section.subheading} onChange={v => update(`${sectionKey}.subheading`, v)} />}
      {section.note !== undefined && <TextField label="Note" value={section.note} onChange={v => update(`${sectionKey}.note`, v)} multiline />}
      {section.campusImage !== undefined && <ImageUpload label="Campus Image" value={section.campusImage} onChange={v => update(`${sectionKey}.campusImage`, v)} />}
      {section.libraryImage !== undefined && <ImageUpload label="Library Image" value={section.libraryImage} onChange={v => update(`${sectionKey}.libraryImage`, v)} />}
      {section.backgroundImage !== undefined && <ImageUpload label="Background Image" value={section.backgroundImage} onChange={v => update(`${sectionKey}.backgroundImage`, v)} />}
      {section.image !== undefined && <ImageUpload label="Section Image / Logo" value={section.image} onChange={v => update(`${sectionKey}.image`, v)} />}

      {/* Items array inside object */}
      {section.items && Array.isArray(section.items) && (<div className="mt-6">
        <h4 className="font-bold text-college-green mb-3">Items ({section.items.length})</h4>
        {section.items.map((item: any, i: number) => (
          <div key={i} className="border rounded-xl p-4 space-y-3 mb-3">
            {item.title !== undefined && <TextField label="Title" value={item.title} onChange={v => { const a = [...section.items]; a[i] = { ...a[i], title: v }; update(`${sectionKey}.items`, a); }} />}
            {item.description !== undefined && <TextField label="Description" value={item.description} onChange={v => { const a = [...section.items]; a[i] = { ...a[i], description: v }; update(`${sectionKey}.items`, a); }} multiline />}
            <ImageUpload label="Image" value={item.image} onChange={v => { const a = [...section.items]; a[i] = { ...a[i], image: v }; update(`${sectionKey}.items`, a); }} />
            <button onClick={() => { const a = section.items.filter((_: any, idx: number) => idx !== i); update(`${sectionKey}.items`, a); }} className="flex items-center gap-1 text-xs text-red-500 hover:underline"><Trash2 size={12} />Remove Item</button>
          </div>
        ))}
        <button onClick={() => update(`${sectionKey}.items`, [...section.items, { title: 'New', description: 'Description' }])} className="flex items-center gap-2 text-sm text-college-green hover:underline"><Plus size={16} />Add Item</button>
      </div>)}

      {/* Milestones */}
      {section.milestones && (<div className="mt-6">
        <h4 className="font-bold text-college-green mb-3">Milestones</h4>
        {section.milestones.map((m: any, i: number) => (
          <div key={i} className="border rounded-xl p-4 space-y-3 mb-3">
            <TextField label="Year/Label" value={m.year} onChange={v => { const a = [...section.milestones]; a[i] = { ...a[i], year: v }; update(`${sectionKey}.milestones`, a); }} />
            <TextField label="Description" value={m.description} onChange={v => { const a = [...section.milestones]; a[i] = { ...a[i], description: v }; update(`${sectionKey}.milestones`, a); }} multiline />
          </div>
        ))}
        <button onClick={() => update(`${sectionKey}.milestones`, [...section.milestones, { year: 'Year', description: 'Description' }])} className="flex items-center gap-2 text-sm text-college-green hover:underline"><Plus size={16} />Add Milestone</button>
      </div>)}

      {/* Rows (curriculum) */}
      {section.rows && (<div className="mt-6">
        <h4 className="font-bold text-college-green mb-3">Curriculum Rows</h4>
        {section.rows.map((r: any, i: number) => (
          <div key={i} className="border rounded-xl p-4 space-y-3 mb-3">
            <div className="grid grid-cols-3 gap-3">
              <TextField label="Level" value={r.level} onChange={v => { const a = [...section.rows]; a[i] = { ...a[i], level: v }; update(`${sectionKey}.rows`, a); }} />
              <TextField label="Duration" value={r.duration} onChange={v => { const a = [...section.rows]; a[i] = { ...a[i], duration: v }; update(`${sectionKey}.rows`, a); }} />
              <TextField label="Focus" value={r.focus} onChange={v => { const a = [...section.rows]; a[i] = { ...a[i], focus: v }; update(`${sectionKey}.rows`, a); }} />
            </div>
          </div>
        ))}
        <button onClick={() => update(`${sectionKey}.rows`, [...section.rows, { level: 'Level', duration: 'Duration', focus: 'Focus' }])} className="flex items-center gap-2 text-sm text-college-green hover:underline"><Plus size={16} />Add Row</button>
      </div>)}

      {/* Topics */}
      {section.topics && (<div className="mt-6">
        <h4 className="font-bold text-college-green mb-3">Topics</h4>
        {section.topics.map((t: string, i: number) => (
          <div key={i} className="flex items-center gap-2 mb-2">
            <input type="text" value={t} onChange={e => { const a = [...section.topics]; a[i] = e.target.value; update(`${sectionKey}.topics`, a); }} className="flex-1 px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-college-green/20 focus:border-college-green outline-none" />
            <button onClick={() => update(`${sectionKey}.topics`, section.topics.filter((_: any, idx: number) => idx !== i))} className="text-red-400 hover:text-red-600"><Trash2 size={14} /></button>
          </div>
        ))}
        <button onClick={() => update(`${sectionKey}.topics`, [...section.topics, 'New Topic'])} className="flex items-center gap-2 text-sm text-college-green hover:underline"><Plus size={16} />Add Topic</button>
      </div>)}

      {/* Achievements (string list) */}
      {section.achievements && Array.isArray(section.achievements) && typeof section.achievements[0] === 'string' && (<div className="mt-6">
        <h4 className="font-bold text-college-green mb-3">Achievement Points</h4>
        {section.achievements.map((t: string, i: number) => (
          <div key={i} className="flex items-center gap-2 mb-2">
            <input type="text" value={t} onChange={e => { const a = [...section.achievements]; a[i] = e.target.value; update(`${sectionKey}.achievements`, a); }} className="flex-1 px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-college-green/20 focus:border-college-green outline-none" />
            <button onClick={() => update(`${sectionKey}.achievements`, section.achievements.filter((_: any, idx: number) => idx !== i))} className="text-red-400 hover:text-red-600"><Trash2 size={14} /></button>
          </div>
        ))}
        <button onClick={() => update(`${sectionKey}.achievements`, [...section.achievements, 'New achievement'])} className="flex items-center gap-2 text-sm text-college-green hover:underline"><Plus size={16} />Add Point</button>
      </div>)}

      {/* Stats */}
      {section.stats && (<div className="mt-6">
        <h4 className="font-bold text-college-green mb-3">Stats</h4>
        {section.stats.map((s: any, i: number) => (
          <div key={i} className="grid grid-cols-2 gap-3 mb-3 border rounded-xl p-3">
            <TextField label="Value" value={s.value} onChange={v => { const a = [...section.stats]; a[i] = { ...a[i], value: v }; update(`${sectionKey}.stats`, a); }} />
            <TextField label="Label" value={s.label} onChange={v => { const a = [...section.stats]; a[i] = { ...a[i], label: v }; update(`${sectionKey}.stats`, a); }} />
          </div>
        ))}
        <button onClick={() => update(`${sectionKey}.stats`, [...section.stats, { value: '0', label: 'Label' }])} className="flex items-center gap-2 text-sm text-college-green hover:underline"><Plus size={16} />Add Stat</button>
      </div>)}

      {/* Facilities */}
      {section.facilities && (<div className="mt-6">
        <h4 className="font-bold text-college-green mb-3">Facilities</h4>
        {section.facilities.map((f: string, i: number) => (
          <div key={i} className="flex items-center gap-2 mb-2">
            <input type="text" value={f} onChange={e => { const a = [...section.facilities]; a[i] = e.target.value; update(`${sectionKey}.facilities`, a); }} className="flex-1 px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-college-green/20 focus:border-college-green outline-none" />
            <button onClick={() => update(`${sectionKey}.facilities`, section.facilities.filter((_: any, idx: number) => idx !== i))} className="text-red-400 hover:text-red-600"><Trash2 size={14} /></button>
          </div>
        ))}
        <button onClick={() => update(`${sectionKey}.facilities`, [...section.facilities, 'New Facility'])} className="flex items-center gap-2 text-sm text-college-green hover:underline"><Plus size={16} />Add</button>
      </div>)}

      {/* Publications */}
      {section.publications && (<div className="mt-6">
        <h4 className="font-bold text-college-green mb-3">Publications</h4>
        {section.publications.map((p: any, i: number) => (
          <div key={i} className="grid grid-cols-2 gap-3 mb-3 border rounded-xl p-3">
            <TextField label="Name" value={p.name} onChange={v => { const a = [...section.publications]; a[i] = { ...a[i], name: v }; update(`${sectionKey}.publications`, a); }} />
            <TextField label="Description" value={p.desc} onChange={v => { const a = [...section.publications]; a[i] = { ...a[i], desc: v }; update(`${sectionKey}.publications`, a); }} />
          </div>
        ))}
        <button onClick={() => update(`${sectionKey}.publications`, [...section.publications, { name: 'Name', desc: 'Description' }])} className="flex items-center gap-2 text-sm text-college-green hover:underline"><Plus size={16} />Add Publication</button>
      </div>)}

      {/* Record cards (globalRecords) */}
      {section.recordCards && (<div className="mt-6">
        <h4 className="font-bold text-college-green mb-3">Record Cards</h4>
        {section.asian && <div className="grid grid-cols-2 gap-3 mb-4">
          <TextField label="Asian Count" value={section.asian.count} onChange={v => update(`${sectionKey}.asian`, { ...section.asian, count: v })} />
          <TextField label="Indian Count" value={section.indian.count} onChange={v => update(`${sectionKey}.indian`, { ...section.indian, count: v })} />
          <TextField label="Asian Label" value={section.asian.label} onChange={v => update(`${sectionKey}.asian`, { ...section.asian, label: v })} />
          <TextField label="Indian Label" value={section.indian.label} onChange={v => update(`${sectionKey}.indian`, { ...section.indian, label: v })} />
        </div>}
        {section.recordCards.map((c: any, i: number) => (
          <div key={i} className="border rounded-xl p-4 space-y-3 mb-3">
            <div className="grid grid-cols-2 gap-3">
              <TextField label="Title" value={c.title} onChange={v => { const a = [...section.recordCards]; a[i] = { ...a[i], title: v }; update(`${sectionKey}.recordCards`, a); }} />
              <TextField label="Person" value={c.person} onChange={v => { const a = [...section.recordCards]; a[i] = { ...a[i], person: v }; update(`${sectionKey}.recordCards`, a); }} />
            </div>
            <TextField label="Subtitle" value={c.subtitle} onChange={v => { const a = [...section.recordCards]; a[i] = { ...a[i], subtitle: v }; update(`${sectionKey}.recordCards`, a); }} />
            <TextField label="Gradient Color" value={c.color} onChange={v => { const a = [...section.recordCards]; a[i] = { ...a[i], color: v }; update(`${sectionKey}.recordCards`, a); }} />
            <ImageUpload label="Record Card Image" value={c.image} onChange={v => { const a = [...section.recordCards]; a[i] = { ...a[i], image: v }; update(`${sectionKey}.recordCards`, a); }} />
            <button onClick={() => update(`${sectionKey}.recordCards`, section.recordCards.filter((_: any, idx: number) => idx !== i))} className="flex items-center gap-1 text-xs text-red-500 hover:underline"><Trash2 size={12} />Remove Record Card</button>
          </div>
        ))}
        <button onClick={() => update(`${sectionKey}.recordCards`, [...section.recordCards, { title: 'New Record', person: 'Name', subtitle: 'Subtitle', color: 'from-gray-500 to-gray-700', image: '' }])} className="flex items-center gap-2 text-sm text-college-green hover:underline"><Plus size={16} />Add Record Card</button>
      </div>)}

      {/* Contact items */}
      {sectionKey === 'contact' && section.items && (<div className="mt-6">
        <h4 className="font-bold text-college-green mb-3">Contact Items</h4>
        {section.items.map((item: any, i: number) => (
          <div key={i} className="border rounded-xl p-4 space-y-3 mb-3">
            <TextField label="Title" value={item.title} onChange={v => { const a = [...section.items]; a[i] = { ...a[i], title: v }; update(`${sectionKey}.items`, a); }} />
            {item.lines.map((line: string, li: number) => (
              <div key={li} className="flex items-center gap-2">
                <input type="text" value={line} onChange={e => { const a = [...section.items]; const lines = [...a[i].lines]; lines[li] = e.target.value; a[i] = { ...a[i], lines }; update(`${sectionKey}.items`, a); }} className="flex-1 px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-college-green/20 focus:border-college-green outline-none" />
                <button onClick={() => { const a = [...section.items]; const lines = a[i].lines.filter((_: string, idx: number) => idx !== li); a[i] = { ...a[i], lines }; update(`${sectionKey}.items`, a); }} className="text-red-400 hover:text-red-600"><Trash2 size={14} /></button>
              </div>
            ))}
            <button onClick={() => { const a = [...section.items]; a[i] = { ...a[i], lines: [...a[i].lines, 'New line'] }; update(`${sectionKey}.items`, a); }} className="flex items-center gap-2 text-xs text-college-green hover:underline"><Plus size={14} />Add Line</button>
          </div>
        ))}
      </div>)}
    </div>);
  }

  return <p className="text-gray-400 text-sm">No editable data found.</p>;
}
