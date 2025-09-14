
import React from 'react';
import { SectionId } from '../types';

interface TabsProps {
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;
}

const TABS: { id: SectionId; label: string }[] = [
  { id: SectionId.Overview, label: 'Overview' },
  { id: SectionId.UsdaReports, label: 'USDA Reports' },
  { id: SectionId.Calculator, label: 'Pricing Calculator' },
  { id: SectionId.Workflow, label: 'Daily Workflow' },
  { id: SectionId.Seasonal, label: 'Seasonal Guide' },
  { id: SectionId.CaseStudies, label: 'Case Studies' },
  { id: SectionId.Reference, label: 'Quick Reference' },
];

const Tabs: React.FC<TabsProps> = ({ activeSection, setActiveSection }) => {
  return (
    <nav className="flex flex-wrap bg-white/90 backdrop-blur-sm rounded-xl mb-6 shadow-lg overflow-hidden border border-gray-200/50">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveSection(tab.id)}
          className={`flex-1 min-w-max py-3 px-4 text-sm sm:text-base font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 ${
            activeSection === tab.id
              ? 'bg-indigo-600 text-white shadow-inner'
              : 'text-slate-600 hover:bg-indigo-100 hover:text-indigo-700'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

export default Tabs;
