
import React from 'react';

interface ContentSectionProps {
  children: React.ReactNode;
}

const ContentSection: React.FC<ContentSectionProps> = ({ children }) => {
  return (
    <section className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-200/50 mb-6 animate-fade-in">
      {children}
    </section>
  );
};

export default ContentSection;
