
import React from 'react';
import ContentSection from '../common/ContentSection';

const reports = [
    { title: '🐂 Boxed Beef Cutout (LM_XB403)', use: 'Primary benchmark for beef pricing', metrics: 'Choice/Select spreads, primal values', impact: 'Guides wholesale beef trades and futures correlation' },
    { title: '🐖 National Weekly Pork (LM_PK602)', use: 'Pork primal breakdown and pricing', metrics: 'Loin, ham, belly, picnic values', impact: 'Direct impact on bacon, ham, and sausage pricing' },
    { title: '🐓 Poultry Market News (AMS 0563)', use: 'Broiler composite and part cuts', metrics: 'Whole bird, breast, wings, leg quarters', impact: 'Event-driven demand (Super Bowl wings, etc.)' },
    { title: '🐑 Lamb & Goat (LM_LM443)', use: 'Specialty market pricing', metrics: 'Carcass weights, primal cuts', impact: 'Premium seasonal demand' },
    { title: '❄️ Cold Storage Report', use: 'Monthly inventory tracking', metrics: 'Frozen stocks by species', impact: 'Inventory build = bearish, drawdown = bullish' },
    { title: '🌍 Export Sales Reports', use: 'Foreign demand tracking', metrics: 'Country-specific purchases', impact: 'China pork demand, Japan beef premiums' },
];

const UsdaReports: React.FC = () => {
  return (
    <ContentSection>
      <h2 className="text-3xl font-bold text-slate-800 mb-6">📊 USDA Reports - Your Market Compass</h2>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {reports.map((report, index) => (
          <div key={index} className="bg-slate-800 text-white p-6 rounded-xl shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl">
            <h4 className="text-xl font-bold text-amber-400 mb-3">{report.title}</h4>
            <p className="text-sm text-slate-300"><strong className="text-slate-100">Use:</strong> {report.use}</p>
            <p className="text-sm text-slate-300"><strong className="text-slate-100">Metrics:</strong> {report.metrics}</p>
            <p className="text-sm text-slate-300"><strong className="text-slate-100">Impact:</strong> {report.impact}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-amber-100 to-orange-200 p-6 rounded-xl border-l-4 border-orange-500">
        <h4 className="text-xl font-bold text-orange-800 mb-4">📖 How to Read a Boxed Beef Report</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-left bg-white rounded-lg shadow-md overflow-hidden">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="p-3">Metric</th>
                <th className="p-3">Value</th>
                <th className="p-3">Change</th>
                <th className="p-3">Interpretation</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-100"><td className="p-3 font-medium">Choice Cutout</td><td className="p-3">$298.50</td><td className="p-3 text-green-600">+$1.25</td><td className="p-3">Rising cutout = bullish beef market</td></tr>
              <tr className="border-b hover:bg-gray-100"><td className="p-3 font-medium">Select Cutout</td><td className="p-3">$280.75</td><td className="p-3 text-red-600">-$0.50</td><td className="p-3">Select weakness while choice strengthens</td></tr>
              <tr className="border-b hover:bg-gray-100"><td className="p-3 font-medium">Choice/Select Spread</td><td className="p-3">$17.75</td><td className="p-3">Wide</td><td className="p-3">Quality premium increasing</td></tr>
              <tr className="hover:bg-gray-100"><td className="p-3 font-medium">Rib Primal</td><td className="p-3">$450.00</td><td className="p-3">Spiking</td><td className="p-3">Holiday/foodservice demand surge</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </ContentSection>
  );
};

export default UsdaReports;
