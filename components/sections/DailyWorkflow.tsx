
import React, { useState } from 'react';
import ContentSection from '../common/ContentSection';

interface ChecklistItemProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (id: string) => void;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ id, label, checked, onChange }) => (
  <div className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:bg-slate-50 transition">
    <input type="checkbox" id={id} checked={checked} onChange={() => onChange(id)} className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mr-4"/>
    <label htmlFor={id} className={`flex-1 text-slate-700 cursor-pointer ${checked ? 'line-through text-slate-400' : ''}`}>{label}</label>
  </div>
);

const morningRoutine = [
  { id: 'mr1', label: 'Review USDA morning reports (LM_XB403, LM_PK602, AMS 0563)' },
  { id: 'mr2', label: 'Check CME futures (Live Cattle, Lean Hogs, Feeder Cattle)' },
  { id: 'mr3', label: 'Monitor cold storage trends and export news' },
  { id: 'mr4', label: 'Review overnight emails and market updates' },
  { id: 'mr5', label: 'Update pricing calculator with current USDA data' },
];

const activeTrading = [
  { id: 'at1', label: 'Call packers for available loads and specifications' },
  { id: 'at2', label: 'Quote buyers using USDA + margin formula' },
  { id: 'at3', label: 'Secure back-to-back trades to minimize exposure' },
  { id: 'at4', label: 'Document all trades and confirm specifications' },
  { id: 'at5', label: 'Monitor market movement for hedging opportunities' },
];

const endOfDay = [
  { id: 'eod1', label: 'Reconcile all trades and update position sheets' },
  { id: 'eod2', label: 'Review P&L and margin performance' },
  { id: 'eod3', label: 'Plan tomorrow\'s strategy based on market trends' },
  { id: 'eod4', label: 'Update client relationships and follow up on opportunities' },
];

const DailyWorkflow: React.FC = () => {
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

    const handleCheckboxChange = (id: string) => {
        setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <ContentSection>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">📋 Daily Broker Workflow</h2>

            <div className="space-y-8">
                <div className="bg-slate-100 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold text-slate-700 mb-4">🌅 Morning Routine (7:00 AM - 9:00 AM)</h3>
                    <div className="space-y-3">
                        {morningRoutine.map(item => <ChecklistItem key={item.id} {...item} checked={!!checkedItems[item.id]} onChange={handleCheckboxChange} />)}
                    </div>
                </div>

                <div className="bg-slate-100 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold text-slate-700 mb-4">📞 Active Trading (9:00 AM - 3:00 PM)</h3>
                    <div className="space-y-3">
                        {activeTrading.map(item => <ChecklistItem key={item.id} {...item} checked={!!checkedItems[item.id]} onChange={handleCheckboxChange} />)}
                    </div>
                </div>

                <div className="bg-slate-100 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold text-slate-700 mb-4">📊 End of Day (3:00 PM - 5:00 PM)</h3>
                    <div className="space-y-3">
                        {endOfDay.map(item => <ChecklistItem key={item.id} {...item} checked={!!checkedItems[item.id]} onChange={handleCheckboxChange} />)}
                    </div>
                </div>
            </div>
            
            <div className="mt-8 bg-gradient-to-br from-amber-100 to-orange-200 p-6 rounded-xl border-l-4 border-orange-500">
                <h4 className="text-xl font-bold text-orange-800 mb-3">🎯 Negotiation Tactics</h4>
                <ul className="list-disc list-inside space-y-2 text-orange-700">
                    <li><strong>Reference USDA Reports:</strong> "Based on today's LM_XB403, I'm quoting market plus $0.03/lb"</li>
                    <li><strong>Use Freight as Leverage:</strong> "I can absorb some freight costs if we can move on price"</li>
                    <li><strong>Create Urgency:</strong> "This load needs to move today - futures are trending up"</li>
                    <li><strong>Bundle Products:</strong> "I can give you a better deal if you take the chucks with the ribs"</li>
                </ul>
            </div>
        </ContentSection>
    );
};

export default DailyWorkflow;
