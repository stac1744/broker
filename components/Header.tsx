
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl mb-8 shadow-2xl text-center border border-gray-200/50">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">🥩 Protein Broker's Manual</h1>
      <p className="text-lg md:text-xl text-slate-600">Complete Guide to USDA Market Data, Pricing, and Trade Execution</p>
    </header>
  );
};

export default Header;
