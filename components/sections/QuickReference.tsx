
import React from 'react';
import ContentSection from '../common/ContentSection';

const reportCodes = [
    { code: 'LM_XB403', desc: 'Boxed Beef Cutout', freq: 'Daily' },
    { code: 'LM_PK602', desc: 'Pork Cutout', freq: 'Weekly' },
    { code: 'LM_CT150', desc: 'Cattle Prices', freq: 'Daily' },
    { code: 'AMS 0563', desc: 'Broiler Composite', freq: 'Daily' },
    { code: 'LM_LM443', desc: 'Lamb & Goat', freq: 'Weekly' },
];

const margins = [
    { protein: 'Beef', cons: '8%', target: '12%', opp: '18%' },
    { protein: 'Pork', cons: '6%', target: '10%', opp: '15%' },
    { protein: 'Poultry', cons: '5%', target: '8%', opp: '12%' },
    { protein: 'Lamb/Goat', cons: '10%', target: '12%', opp: '15%' },
];

const riskChecklist = [
    'Always secure back-to-back trades when possible',
    'Use CME futures to hedge large positions',
    'Diversify across protein types and buyer categories',
    'Monitor cold storage reports for inventory trends',
    'Set position limits based on capital and experience',
];


const QuickReference: React.FC = () => {
    return (
        <ContentSection>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">📋 Quick Reference Guide</h2>
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div>
                    <h3 className="text-2xl font-bold text-slate-700 mb-4">🔗 Essential USDA Report Codes</h3>
                    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                        <table className="w-full text-left">
                            <thead className="bg-indigo-600 text-white"><tr><th className="p-3">Code</th><th className="p-3">Description</th><th className="p-3">Frequency</th></tr></thead>
                            <tbody>
                                {reportCodes.map((r, i) => <tr key={i} className="border-b hover:bg-gray-100"><td className="p-3 font-medium">{r.code}</td><td className="p-3">{r.desc}</td><td className="p-3">{r.freq}</td></tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-700 mb-4">💰 Typical Margin Guidelines</h3>
                    <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                        <table className="w-full text-left">
                            <thead className="bg-indigo-600 text-white"><tr><th className="p-3">Protein</th><th className="p-3">Conservative</th><th className="p-3">Target</th><th className="p-3">Opportunistic</th></tr></thead>
                            <tbody>
                                {margins.map((m, i) => <tr key={i} className="border-b hover:bg-gray-100"><td className="p-3 font-medium">{m.protein}</td><td className="p-3">{m.cons}</td><td className="p-3">{m.target}</td><td className="p-3">{m.opp}</td></tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="bg-slate-100 p-6 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-slate-700 mb-4">🔄 Risk Management Checklist</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                    {riskChecklist.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            </div>
            
            <div className="bg-gradient-to-br from-amber-100 to-orange-200 p-6 rounded-xl border-l-4 border-orange-500">
                <h4 className="text-xl font-bold text-orange-800 mb-3">🏆 Success Metrics to Track</h4>
                <ul className="list-disc list-inside space-y-2 text-orange-700">
                    <li><strong>Average Margin per Pound:</strong> Target minimum $0.05/lb across all trades</li>
                    <li><strong>Volume Turnover:</strong> Complete inventory turns within 3-5 days</li>
                    <li><strong>Hit Rate:</strong> 75%+ of quotes should result in trades</li>
                    <li><strong>Client Retention:</strong> Maintain relationships with 20+ active buyers</li>
                    <li><strong>Risk Management:</strong> Never exceed 10% of capital in unhedged positions</li>
                </ul>
            </div>
        </ContentSection>
    );
};

export default QuickReference;
