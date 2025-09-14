
import React from 'react';
import ContentSection from '../common/ContentSection';

const CaseStudyCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-gradient-to-br from-orange-100 to-amber-200 p-6 rounded-xl border-l-4 border-orange-500 mb-8">
        <h4 className="text-2xl font-bold text-orange-800 mb-4">{title}</h4>
        {children}
    </div>
);

const ProfitHighlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-green-600 text-white p-3 rounded-lg font-bold text-center mt-4 text-lg">
        {children}
    </div>
);

const CaseStudies: React.FC = () => {
    return (
        <ContentSection>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">📚 Real-World Case Studies</h2>
            
            <CaseStudyCard title="Case Study 1: Beef Rib Holiday Spike">
                <p className="mb-3 text-slate-700"><strong>Situation:</strong> USDA Boxed Beef Cutout shows ribs climbing +$25/cwt ahead of Memorial Day weekend. Futures confirm bullish trend.</p>
                <p className="mb-3 text-slate-700"><strong>Broker Action:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-slate-600 mb-4">
                    <li>Secured 6 loads of ribeye at current market from Nebraska packer</li>
                    <li>Offered to premium steakhouse chain at market +$0.05/lb</li>
                    <li>Simultaneously picked up discounted chucks and sold to grinding operation</li>
                </ul>
                <ProfitHighlight>Total Profit: $6,080 on single day's trades</ProfitHighlight>
            </CaseStudyCard>

            <CaseStudyCard title="Case Study 2: Pork Belly Volatility Management">
                <p className="mb-3 text-slate-700"><strong>Situation:</strong> Pork bellies experiencing extreme volatility (+/- $20/cwt daily swings). Restaurant chains demanding price stability.</p>
                <p className="mb-3 text-slate-700"><strong>Broker Action:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-slate-600 mb-4">
                    <li>Hedged position using CME Lean Hog futures</li>
                    <li>Offered fixed-price contracts to restaurant buyers</li>
                    <li>Diversified excess trim into sausage manufacturers</li>
                </ul>
                <ProfitHighlight>Result: $4,800 profit while managing $800,000+ in exposure</ProfitHighlight>
            </CaseStudyCard>

            <CaseStudyCard title="Case Study 3: Super Bowl Wing Strategy">
                 <p className="mb-3 text-slate-700"><strong>Situation:</strong> Super Bowl approaching, wing demand historically spikes 25-40% in weeks leading up to game.</p>
                <p className="mb-3 text-slate-700"><strong>Broker Action:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-slate-600 mb-4">
                    <li>Pre-positioned wing inventory 3 weeks before Super Bowl</li>
                    <li>Negotiated forward contracts with major sports bar chains</li>
                    <li>Diverted excess leg quarters to export channels</li>
                </ul>
                <ProfitHighlight>Average margin: $0.35/lb across 165,000 lbs = $57,750 profit</ProfitHighlight>
            </CaseStudyCard>

        </ContentSection>
    );
};

export default CaseStudies;
