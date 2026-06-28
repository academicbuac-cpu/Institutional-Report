import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CardItem {
  title: string;
  description: string;
  image?: string;
}

export interface LeadershipMember {
  role: string;
  name: string;
  initial: string;
  image?: string;
}

export interface TimelineItem {
  year: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface CurriculumRow {
  level: string;
  duration: string;
  focus: string;
}

export interface GalleryImage {
  title: string;
  image?: string;
  color: string;
}

export interface PublicationItem {
  title: string;
  subtitle?: string;
  color: string;
  image?: string;
}

export interface FinancialData {
  publicDonations: number;
  managementPTA: number;
  others: number;
}

export interface SiteData {
  hero: {
    subtitle: string;
    title: string;
    tagline: string;
    backgroundImage?: string;
  };
  memory: {
    heading: string;
    figures: { name: string; role: string; initial: string; image?: string; featured?: boolean }[];
    quote: string;
  };
  objectives: {
    heading: string;
    items: CardItem[];
  };
  vision: {
    heading: string;
    quote: string;
  };
  mission: {
    heading: string;
    items: CardItem[];
  };
  history: {
    heading: string;
    milestones: TimelineItem[];
  };
  legacy: {
    heading: string;
    items: CardItem[];
    campusImage?: string;
  };
  graduates: {
    heading: string;
    achievements: string[];
    stats: StatItem[];
    image?: string;
  };
  curriculum: {
    heading: string;
    rows: CurriculumRow[];
    note: string;
  };
  specialization: {
    heading: string;
    subheading: string;
    description: string;
    topics: string[];
    image?: string;
  };
  academicStrength: {
    heading: string;
    items: CardItem[];
  };
  researchFocus: {
    heading: string;
    items: CardItem[];
  };
  sabah: {
    heading: string;
    fullName: string;
    description: string;
    image?: string;
  };
  sabahActivities: {
    heading: string;
    items: CardItem[];
  };
  alBurhan: {
    heading: string;
    items: CardItem[];
    image?: string;
  };
  alumniContributions: {
    heading: string;
    items: CardItem[];
  };
  library: {
    heading: string;
    items: CardItem[];
    libraryImage?: string;
  };
  facilitiesPublications: {
    heading: string;
    facilities: string[];
    publications: { name: string; desc: string }[];
  };
  outreach: {
    heading: string;
    items: CardItem[];
  };
  statistics: {
    heading: string;
    stats: StatItem[];
    quote: string;
  };
  leadership: LeadershipMember[];
  globalRecords: {
    heading: string;
    asian: { count: string; label: string };
    indian: { count: string; label: string };
    description: string;
    recordCards: { title: string; person: string; subtitle: string; color: string; image?: string }[];
  };
  achievements: GalleryImage[];
  sabahPublications: PublicationItem[];
  fiqhPublications: PublicationItem[];
  cherishedMoments1: GalleryImage[];
  cherishedMoments2: GalleryImage[];
  financial: FinancialData;
  thankYou: {
    heading: string;
    subtitle: string;
    tagline: string;
  };
  contact: {
    heading: string;
    description: string;
    items: { title: string; lines: string[] }[];
  };
}

export const defaultData: SiteData = {
  hero: {
    subtitle: 'Shamsul Ulama Memorial',
    title: 'Busthanul Uloom Arabic College',
    tagline: 'Under Darul Huda Islamic University',
  },
  memory: {
    heading: 'In the Memory Of...',
    figures: [
      { name: 'Shamsul Ulama E.K. Aboobacker Musliyar', role: 'Founder & Spiritual Guide', initial: 'SA' },
      { name: 'Panakkad Sayyid Hyderali Shihab Thangal', role: 'Inaugurator & Patron', initial: 'SH', featured: true },
      { name: 'CKK Maniyoor', role: 'Founding Member & Visionary', initial: 'CK' },
    ],
    quote: 'Their vision and dedication laid the foundation for generations of Islamic scholarship and community service.',
  },
  objectives: {
    heading: 'Objective of the College',
    items: [
      { title: 'Academic & Moral', description: 'To nurture academically sound and morally upright Islamic scholars who embody the principles of the faith.' },
      { title: "Global Da'wa", description: "To prepare students for effective Islamic propagation (Da'wa) at national and international levels." },
      { title: 'Integration', description: 'To integrate religious knowledge with contemporary relevance, ensuring scholars are relevant in the modern world.' },
      { title: 'Social Impact', description: 'To contribute meaningfully to the socio-educational development of society through service and leadership.' },
    ],
  },
  vision: {
    heading: 'Our Vision',
    quote: '"Busthan aims at the formation of skilled scholars capable of Islamic propagation; fostering leadership rooted in Islamic values, responsibility, and a global outlook."',
  },
  mission: {
    heading: 'Mission Statement',
    items: [
      { title: 'Education', description: 'Providing updated education to develop qualified Islamic scholars.' },
      { title: 'Service', description: 'Preparing students to serve in any part of the world with global competence.' },
      { title: 'Empowerment', description: 'Empowering the community to cope with contemporary challenges.' },
      { title: 'Harmony', description: 'Strengthening social harmony, cultural unity, and sustaining a healthy environment.' },
    ],
  },
  history: {
    heading: 'History of the College',
    milestones: [
      { year: 'Feb 2002', description: 'Established by Shamsul Ulama E. K. Aboobacker Musliyar.' },
      { year: 'Inauguration', description: 'Inaugurated by Panakkad Sayyid Hyderali Shihab Thangal.' },
      { year: 'Affiliation', description: 'Became an undergraduate institution under Darul Huda Islamic University.' },
      { year: 'Present', description: 'A leading center for Islamic and contemporary integrated education.' },
    ],
  },
  legacy: {
    heading: 'Legacy & Academic Journey',
    items: [
      { title: '26 Years of Excellence', description: 'A quarter-century of dedication to religious and material education.' },
      { title: 'Syllabus', description: 'Strictly follows the prestigious Darul Huda Islamic University syllabus.' },
      { title: 'Tradition', description: 'Upholds a strong tradition of discipline, scholarship, and community service.' },
      { title: 'Growth', description: 'Continuous academic growth and institutional development.' },
    ],
  },
  graduates: {
    heading: 'Graduates & Academic Impact',
    achievements: [
      "Graduates actively engaged in education and Islamic da'wa.",
      'Alumni serving in various capacities across India and abroad.',
      'Several graduates have completed PhDs in Turkey.',
      'Aims to produce dynamic Islamic scholars with global competence.',
    ],
    stats: [
      { value: '500+', label: 'Graduates' },
      { value: '10+', label: 'Countries' },
      { value: '26+', label: 'Years' },
    ],
  },
  curriculum: {
    heading: 'Curriculum Overview (10-Year Program)',
    rows: [
      { level: 'Secondary Level', duration: '5 Years', focus: 'Foundation in Islamic and General subjects.' },
      { level: 'Senior Secondary Level', duration: '2 Years', focus: 'Advanced preparatory studies.' },
      { level: 'Undergraduate Level', duration: '3 Years', focus: 'Specialization & Research.' },
      { level: 'Integration', duration: 'Ongoing', focus: 'External degree integrated with Islamic studies.' },
    ],
    note: 'The curriculum integrates both traditional Islamic sciences and modern academic subjects, ensuring graduates are well-equipped for diverse roles in society.',
  },
  specialization: {
    heading: 'Undergraduate Specialization',
    subheading: 'Fiqh and Uṣūl al-Fiqh',
    description: 'Our program offers an in-depth study of Islamic jurisprudence, focusing on classical foundations while addressing contemporary applications. It is designed to prepare scholars for advanced Islamic leadership and legal reasoning.',
    topics: [
      'Classical Islamic Jurisprudence (Fiqh)',
      'Principles of Islamic Legal Theory (Uṣūl al-Fiqh)',
      'Comparative Jurisprudence',
      'Contemporary Islamic Legal Issues',
      'Hadith Sciences & Authentication',
    ],
  },
  academicStrength: {
    heading: 'Academic Strength of the Department',
    items: [
      { title: 'Mutūn (Classical Texts)', description: 'Systematic and rigorous study of classical jurisprudential texts ensuring deep rooted knowledge.' },
      { title: 'Manāhij (Methodology)', description: 'Comprehensive methodological training across various schools of Islamic jurisprudence.' },
      { title: 'Syllabus Adherence', description: 'Strict adherence to the high standards of the Darul Huda Islamic University syllabus.' },
      { title: 'Excellence', description: 'Ensuring consistency, depth, and scholarly excellence in all academic endeavors.' },
    ],
  },
  researchFocus: {
    heading: 'Contemporary & Research Focus',
    items: [
      { title: 'Personal Status Law', description: 'In-depth analysis of Nikāḥ, Ṭalāq, and Mīrāth.' },
      { title: 'Financial Jurisprudence', description: 'Study of Muʿāmalāt and modern financial ethics.' },
      { title: 'Future Leaders', description: 'Developing competent Muftis and academic leaders.' },
    ],
  },
  sabah: {
    heading: 'SABAH: Students Union',
    fullName: 'Students Association of Busthanul Uloom Arabic College',
    description: 'SABAH represents the collective voice and welfare of our student body. It promotes holistic development and leadership skills, operating through structured administrative boards to ensure a vibrant campus life.',
    image: '',
  },
  sabahActivities: {
    heading: 'SABAH Activities & Outreach',
    items: [
      { title: 'Academic & Literary', description: 'Literary workshops, debates, translation bureaus, and regular publications to hone intellectual skills.' },
      { title: 'Experiential Learning', description: 'Study tours, camps, and practical training sessions to provide real-world exposure.' },
      { title: 'Social Service', description: 'Medical camps, community service, and relief activities for social welfare.' },
      { title: 'Green Initiatives', description: 'Green Campus initiatives to promote environmental responsibility.' },
    ],
  },
  alBurhan: {
    heading: 'Al-Burhan: Alumni Association',
    image: '',
    items: [
      { title: 'Strengthening Bonds', description: 'Al-Burhan connects alumni with their alma mater, fostering a lifelong relationship.' },
      { title: 'Global Network', description: 'With active branches in India and abroad, Al-Burhan ensures institutional support and global networking for our graduates.' },
      { title: 'Development', description: 'Supports the academic and infrastructural development of the college.' },
    ],
  },
  alumniContributions: {
    heading: 'Alumni Contributions',
    items: [
      { title: 'Financial Aid', description: 'Scholarships and financial assistance to deserving students.' },
      { title: 'Mentoring', description: 'Career guidance and professional mentoring for fresh graduates.' },
      { title: 'Community', description: 'Active participation in social service and community development.' },
    ],
  },
  library: {
    heading: 'Library & Learning Resources',
    items: [
      { title: 'Collection', description: 'Well-equipped library with 4,000+ books covering Islamic sciences, languages, and general knowledge.' },
      { title: 'Unique Initiative', description: 'Students donate books on their birthdays, fostering a culture of giving and knowledge sharing.' },
      { title: 'Facilities', description: 'Dedicated reading halls, reference sections, and academic support resources.' },
    ],
  },
  facilitiesPublications: {
    heading: 'Facilities & Publications',
    facilities: ['ICT-enabled classrooms', 'Qualified and experienced faculty', 'Language labs & Seminar halls', 'Safe, disciplined, student-friendly campus'],
    publications: [
      { name: 'Al-Fikr Souvenir', desc: 'Contemporary Issues' },
      { name: 'Journal', desc: 'Fiqh & Finance' },
      { name: 'Special Edition', desc: 'Eid-ul-Adha' },
    ],
  },
  outreach: {
    heading: 'Research & Outreach Programs',
    items: [
      { title: 'Academic', description: 'Seminars, debates, and academic conferences at state and national levels.' },
      { title: 'Spiritual', description: 'Monthly Majlis Noor and Swalath Majlis gatherings.' },
      { title: 'Community', description: 'Hajj Study Campaigns, Pre-Marital Classes, and Mayyith Paripalanam training.' },
    ],
  },
  statistics: {
    heading: 'Institutional Statistics',
    stats: [
      { value: '223', label: 'Total Students' },
      { value: '21', label: 'Faculty Members' },
      { value: '140+', label: 'Graduated Scholars' },
    ],
    quote: 'A growing institution committed to academic excellence and community service.',
  },
  leadership: [
    { role: 'President', name: 'MANIYOOR ABDU RAHMAN FAIZY', initial: 'MA' },
    { role: 'Gen. Secretary', name: 'C K ABDU RAHMAN HAJI', initial: 'CK' },
    { role: 'Treasurer', name: 'MUSTHAFA HAJI PADANNOTT', initial: 'MP' },
  ],
  globalRecords: {
    heading: 'Global Academic Records',
    asian: { count: '01', label: 'Asian Book of Records' },
    indian: { count: '02', label: 'Indian Book of Records' },
    description: 'These achievements brought national-level recognition and immense pride to our institution.',
    recordCards: [
      { title: 'Asia Book of Records', person: 'Grand Master Ahmad Naeem', subtitle: 'Top Records 2025', color: 'from-red-500 to-red-700' },
      { title: 'India Book of Record', person: 'Ahmad Naeem KP', subtitle: 'Record Holder 2024', color: 'from-blue-500 to-blue-700' },
      { title: 'India Book of Record Holder', person: 'Muhammed Nafeeh M P', subtitle: '2025', color: 'from-amber-600 to-red-700' },
    ],
  },
  achievements: [
    { title: 'Best Department Award 2025-26', color: 'from-green-500 to-green-700' },
    { title: 'Convocation Ceremony 2025', color: 'from-stone-600 to-stone-800' },
    { title: 'Best Union Award Runner Up 2025', color: 'from-amber-500 to-amber-700' },
    { title: 'Debating Championship Runner Up 2024', color: 'from-purple-600 to-purple-800' },
  ],
  sabahPublications: [
    { title: 'Sabah Herald', subtitle: 'Newspaper', color: 'from-gray-100 to-gray-300' },
    { title: 'Hajji', subtitle: 'Magazine', color: 'from-red-400 to-orange-500' },
    { title: 'The Sacrifice', subtitle: 'Book', color: 'from-gray-800 to-gray-900' },
    { title: 'Al-Hayat Al-Kulliyya', subtitle: 'Arabic', color: 'from-green-100 to-green-300' },
    { title: 'Sapthaham', subtitle: 'Weekly', color: 'from-purple-100 to-purple-300' },
    { title: 'Sapthaham Monthly', subtitle: 'Monthly', color: 'from-blue-100 to-blue-300' },
  ],
  fiqhPublications: [
    { title: 'Wahd Sessions', subtitle: 'Abstract Book', color: 'from-amber-200 to-amber-400' },
    { title: 'Ulliyathu Arabiyyathu', color: 'from-stone-400 to-stone-600' },
    { title: 'Jurist Insight', subtitle: 'Academic Journal', color: 'from-red-800 to-red-900' },
    { title: 'Muhammadhiyyathu', subtitle: 'Islamic Studies', color: 'from-stone-600 to-stone-800' },
    { title: 'Nahdathu', subtitle: 'Jupnisiyyathu', color: 'from-purple-700 to-purple-900' },
    { title: 'Sabah Publications', color: 'from-green-200 to-green-400' },
  ],
  cherishedMoments1: [
    { title: 'Annual Day Celebration', color: 'from-green-600 to-green-800' },
    { title: 'Group Photo - Graduates', color: 'from-stone-400 to-stone-600' },
    { title: 'Busthan Study Forum', color: 'from-blue-700 to-blue-900' },
    { title: 'Cultural Night', color: 'from-purple-700 to-purple-900' },
    { title: 'Award Ceremony', color: 'from-amber-600 to-amber-800' },
    { title: 'Mulaqath - Management Meet', color: 'from-teal-600 to-teal-800' },
  ],
  cherishedMoments2: [
    { title: 'Faculty & Students Group Photo', color: 'from-green-700 to-green-900' },
    { title: 'Busthanul Uloom Convocation 2019', color: 'from-purple-600 to-purple-800' },
    { title: 'Panayathiram 2022', color: 'from-indigo-700 to-indigo-900' },
  ],
  financial: { publicDonations: 70, managementPTA: 20, others: 10 },
  thankYou: {
    heading: 'Thank You For Your Attention.',
    subtitle: 'Shamsul Ulama Memorial Busthanul Uloom Arabic College',
    tagline: 'Under Darul Huda Islamic University',
  },
  contact: {
    heading: 'Get in Touch',
    description: 'We welcome inquiries from prospective students, parents, and anyone interested in our programs.',
    items: [
      { title: 'Address', lines: ['Busthanul Uloom Arabic College', 'Edavanna, Malappuram', 'Kerala, India'] },
      { title: 'Phone', lines: ['General Inquiries', 'Admissions Office'] },
      { title: 'Email', lines: ['info@busthanululoom.edu', 'admissions@busthanululoom.edu'] },
      { title: 'Affiliation', lines: ['Darul Huda Islamic University', 'Chemmad, Kerala, India'] },
    ],
  },
};

export interface DataContextType {
  data: SiteData;
  updateData: (newData: Partial<SiteData>) => void;
  updateNested: (path: string, value: any) => void;
  resetData: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

function setNestedValue(obj: any, path: string, value: any): any {
  const keys = path.split('.');
  const result = JSON.parse(JSON.stringify(obj));
  let current = result;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (current[key] === undefined) current[key] = {};
    current = current[key];
  }
  current[keys[keys.length - 1]] = value;
  return result;
}

export function DataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<SiteData>(() => {
    try {
      const saved = localStorage.getItem('busthanululoom_data_v2');
      if (saved) {
        const parsed = JSON.parse(saved);
        return deepMerge(defaultData, parsed);
      }
    } catch (e) {
      console.error(e);
    }
    return defaultData;
  });

  useEffect(() => {
    localStorage.setItem('busthanululoom_data_v2', JSON.stringify(data));
  }, [data]);

  const updateData = (newData: Partial<SiteData>) => {
    setData((prev) => ({ ...prev, ...newData }));
  };

  const updateNested = (path: string, value: any) => {
    setData((prev) => setNestedValue(prev, path, value));
  };

  const resetData = () => {
    setData(defaultData);
    localStorage.removeItem('busthanululoom_data_v2');
  };

  return (
    <DataContext.Provider value={{ data, updateData, updateNested, resetData }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within a DataProvider');
  return context;
}

function deepMerge(target: any, source: any): any {
  const output = { ...target };
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key]) && target[key] && typeof target[key] === 'object' && !Array.isArray(target[key])) {
      output[key] = deepMerge(target[key], source[key]);
    } else {
      output[key] = source[key];
    }
  }
  return output;
}
