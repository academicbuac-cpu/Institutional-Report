import { useState } from 'react';
import { DataProvider } from './context/DataContext';
import Navigation from './components/Navigation';
import AdminPanel from './components/admin/AdminPanel';
import HeroSlide from './components/slides/HeroSlide';
import MemorySlide from './components/slides/MemorySlide';
import ObjectivesSlide from './components/slides/ObjectivesSlide';
import VisionSlide from './components/slides/VisionSlide';
import MissionSlide from './components/slides/MissionSlide';
import HistorySlide from './components/slides/HistorySlide';
import LegacySlide from './components/slides/LegacySlide';
import GraduatesSlide from './components/slides/GraduatesSlide';
import CurriculumSlide from './components/slides/CurriculumSlide';
import SpecializationSlide from './components/slides/SpecializationSlide';
import AcademicStrengthSlide from './components/slides/AcademicStrengthSlide';
import ResearchFocusSlide from './components/slides/ResearchFocusSlide';
import SabahSlide from './components/slides/SabahSlide';
import SabahActivitiesSlide from './components/slides/SabahActivitiesSlide';
import AlBurhanSlide from './components/slides/AlBurhanSlide';
import AlumniContributionsSlide from './components/slides/AlumniContributionsSlide';
import LibrarySlide from './components/slides/LibrarySlide';
import FacilitiesSlide from './components/slides/FacilitiesSlide';
import OutreachProgramsSlide from './components/slides/OutreachProgramsSlide';
import StatisticsSlide from './components/slides/StatisticsSlide';
import LeadershipSlide from './components/slides/LeadershipSlide';
import GlobalRecordsSlide from './components/slides/GlobalRecordsSlide';
import AchievementsSlide from './components/slides/AchievementsSlide';
import SabahPublicationsSlide from './components/slides/SabahPublicationsSlide';
import FiqhPublicationsSlide from './components/slides/FiqhPublicationsSlide';
import CherishedMomentsSlide from './components/slides/CherishedMomentsSlide';
import CherishedMoments2Slide from './components/slides/CherishedMoments2Slide';
import FinancialOverviewSlide from './components/slides/FinancialOverviewSlide';
import ThankYouSlide from './components/slides/ThankYouSlide';
import ContactSlide from './components/slides/ContactSlide';

function AppContent() {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <div className="bg-college-cream relative">
      <Navigation onOpenAdmin={() => setShowAdmin(true)} />
      <main>
        <HeroSlide />
        <MemorySlide />
        <ObjectivesSlide />
        <VisionSlide />
        <MissionSlide />
        <HistorySlide />
        <LegacySlide />
        <GraduatesSlide />
        <CurriculumSlide />
        <SpecializationSlide />
        <AcademicStrengthSlide />
        <ResearchFocusSlide />
        <SabahSlide />
        <SabahActivitiesSlide />
        <AlBurhanSlide />
        <AlumniContributionsSlide />
        <LibrarySlide />
        <FacilitiesSlide />
        <OutreachProgramsSlide />
        <StatisticsSlide />
        <LeadershipSlide />
        <GlobalRecordsSlide />
        <AchievementsSlide />
        <SabahPublicationsSlide />
        <FiqhPublicationsSlide />
        <CherishedMomentsSlide />
        <CherishedMoments2Slide />
        <FinancialOverviewSlide />
        <ThankYouSlide />
        <ContactSlide />
      </main>
      {showAdmin && <AdminPanel onClose={() => setShowAdmin(false)} />}
    </div>
  );
}

export default function App() {
  return (
    <DataProvider>
      <AppContent />
    </DataProvider>
  );
}
