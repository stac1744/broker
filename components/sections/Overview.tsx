
import React from 'react';
import ContentSection from '../common/ContentSection';

const Overview: React.FC = () => {
  return (
    <ContentSection>
      <h2 className="text-3xl font-bold text-slate-800 mb-4">🎯 Broker Fundamentals</h2>
      <p className="text-slate-600 mb-6">A protein broker serves as the critical intermediary between packers, distributors, processors, retailers, foodservice operators, and exporters. Your profit comes from two main sources:</p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-500 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">📈 Spread Capture</h3>
          <p>Buy low, sell high using market knowledge and timing.</p>
        </div>
        <div className="bg-red-500 text-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">⚡ Volume Efficiency</h3>
          <p>Move product quickly to maximize turnover and minimize risk.</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-slate-700 mb-3">Key Broker Advantages:</h3>
      <ul className="list-disc list-inside space-y-2 text-slate-600 mb-8">
        <li><strong>Real-time USDA data access</strong> - First to market intelligence</li>
        <li><strong>Extensive network</strong> - Connected buyers and sellers nationwide</li>
        <li><strong>Futures hedging ability</strong> - Risk management through CME contracts</li>
        <li><strong>Cut-out expertise</strong> - Understanding yields, specs, and value-adds</li>
      </ul>

      <div className="bg-gradient-to-br from-amber-100 to-orange-200 p-6 rounded-xl border-l-4 border-orange-500">
        <h4 className="text-xl font-bold text-orange-800 mb-2">💡 Success Formula</h4>
        <p className="text-orange-700 font-semibold">Market Intelligence + Network + Speed + Risk Management = Profitable Trades</p>
        <p className="text-orange-700 mt-2">The best brokers combine data analysis with relationship building and execute trades rapidly while managing exposure through hedging strategies.</p>
      </div>
    </ContentSection>
  );
};

export default Overview;
