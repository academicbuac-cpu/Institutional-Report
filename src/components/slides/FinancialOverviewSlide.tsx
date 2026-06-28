import { useInView } from '../../hooks/useInView';
import { useData } from '../../context/DataContext';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export default function FinancialOverviewSlide() {
  const { ref, isInView } = useInView(0.2);
  const { data } = useData();
  const f = data.financial;
  const chartData = [
    { name: 'Public Donations', value: f.publicDonations, color: '#1B5E20' },
    { name: 'Management & PTA', value: f.managementPTA, color: '#4CAF50' },
    { name: 'Others', value: f.others, color: '#C8E6C9' },
  ];
  return (
    <section id="financial" ref={ref} className="min-h-screen flex items-center justify-center bg-college-cream-light py-16 px-4">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-12"><h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-college-green mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{ fontFamily: 'var(--font-playfair)' }}>Financial Overview</h2><div className={`h-1 bg-college-gold transition-all duration-1000 delay-300 ${isInView ? 'w-full' : 'w-0'}`} /></div>
        <div className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="w-full md:w-1/2 h-80 md:h-96"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={chartData} cx="50%" cy="50%" innerRadius={80} outerRadius={140} paddingAngle={2} dataKey="value" stroke="none">{chartData.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} />))}</Pie><Tooltip formatter={(value) => [`${value}%`, '']} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} /></PieChart></ResponsiveContainer></div>
          <div className="w-full md:w-1/2 space-y-6">{chartData.map((item, idx) => (<div key={idx} className={`flex items-center justify-between transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: `${700 + idx * 200}ms` }}><div className="flex items-center gap-3"><div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }} /><span className="text-gray-700 font-medium">{item.name}</span></div><span className="text-gray-500 font-bold text-lg">{item.value}%</span></div>))}</div>
        </div>
      </div>
    </section>
  );
}
