
import React, { useState } from 'react';
import { SectionId } from './types';
import Header from './components/Header';
import Tabs from './components/Tabs';
import Overview from './components/sections/Overview';
import UsdaReports from './components/sections/UsdaReports';
import PricingCalculator from './components/sections/PricingCalculator';
import DailyWorkflow from './components/sections/DailyWorkflow';
import SeasonalGuide from './components/sections/SeasonalGuide';
import CaseStudies from './components/sections/CaseStudies';
import QuickReference from './components/sections/QuickReference';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.Overview);

  const renderSection = () => {
    switch (activeSection) {
      case SectionId.Overview:
        return <Overview />;
      case SectionId.UsdaReports:
        return <UsdaReports />;
      case SectionId.Calculator:
        return <PricingCalculator />;
      case SectionId.Workflow:
        return <DailyWorkflow />;
      case SectionId.Seasonal:
        return <SeasonalGuide />;
      case SectionId.CaseStudies:
        return <CaseStudies />;
      case SectionId.Reference:
        return <QuickReference />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="container mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
      <Header />
      <Tabs activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>{renderSection()}</main>
    </div>
  );
};

export default App;
