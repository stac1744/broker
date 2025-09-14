
import React from 'react';
import ContentSection from '../common/ContentSection';

const seasons = [
  {
    quarter: "🎊 Q1 (Jan-Mar)",
    beef: "Post-holiday slowdown, build chuck/round inventory",
    pork: "Belly recovery, ham export to Mexico",
    poultry: "Wing demand spikes (Super Bowl)",
    lamb: "Easter preparation begins"
  },
  {
    quarter: "🌸 Q2 (Apr-Jun)",
    beef: "Grilling season prep, rib/loin demand",
    pork: "Seasonal grilling cuts popular",
    poultry: "Leg quarter exports increase",
    lamb: "Peak Easter/Passover demand"
  },
  {
    quarter: "☀️ Q3 (Jul-Sep)",
    beef: "Peak grilling season, premium cuts",
    pork: "Belly demand for bacon production",
    poultry: "Steady demand, inventory management",
    lamb: "Ramadan timing varies"
  },
  {
    quarter: "🍂 Q4 (Oct-Dec)",
    beef: "Holiday prime rib/tenderloin surge",
    pork: "Ham demand for holidays",
    poultry: "Thanksgiving turkey, steady chicken",
    lamb: "Christmas/New Year premiums"
  },
];

const opportunities = [
    { event: 'Super Bowl', product: 'Chicken Wings', timing: '2 weeks prior', strategy: 'Forward sell at premium, secure supply early' },
    { event: 'Memorial Day', product: 'Beef Ribs/Steaks', timing: '3 weeks prior', strategy: 'Build inventory, time release for maximum margin' },
    { event: 'Easter', product: 'Lamb/Ham', timing: '4 weeks prior', strategy: 'Contract specialty buyers early, premium pricing' },
    { event: 'Thanksgiving', product: 'Turkey', timing: '6 weeks prior', strategy: 'Coordinate with processors, manage supply chain' },
];

const SeasonalGuide: React.FC = () => {
  return (
    <ContentSection>
      <h2 className="text-3xl font-bold text-slate-800 mb-6">📅 Seasonal Strategy Guide</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {seasons.map((season, index) => (
          <div key={index} className="bg-gradient-to-br from-green-300 to-cyan-300 p-6 rounded-xl shadow-lg text-slate-800">
            <h4 className="text-xl font-bold mb-3">{season.quarter}</h4>
            <div className="space-y-2 text-sm">
                <p><strong>Beef:</strong> {season.beef}</p>
                <p><strong>Pork:</strong> {season.pork}</p>
                <p><strong>Poultry:</strong> {season.poultry}</p>
                <p><strong>Lamb:</strong> {season.lamb}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-amber-100 to-orange-200 p-6 rounded-xl border-l-4 border-orange-500">
        <h4 className="text-xl font-bold text-orange-800 mb-4">📈 Event-Driven Opportunities</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-left bg-white rounded-lg shadow-md overflow-hidden">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="p-3">Event</th>
                <th className="p-3">Product</th>
                <th className="p-3">Timing</th>
                <th className="p-3">Strategy</th>
              </tr>
            </thead>
            <tbody>
              {opportunities.map((op, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="p-3 font-medium">{op.event}</td>
                  <td className="p-3">{op.product}</td>
                  <td className="p-3">{op.timing}</td>
                  <td className="p-3">{op.strategy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ContentSection>
  );
};

export default SeasonalGuide;
