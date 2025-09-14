
import React, { useState, useMemo } from 'react';
import ContentSection from '../common/ContentSection';

const CalculatorCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-gradient-to-br from-slate-100 to-slate-300 p-6 rounded-xl shadow-lg border border-slate-300">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">{title}</h3>
        {children}
    </div>
);

const InputGroup: React.FC<{ label: string; id: string; type: string; value: number; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; step?: string }> = ({ label, id, type, value, onChange, step = "0.01" }) => (
    <div className="mb-4">
        <label htmlFor={id} className="block mb-1 font-semibold text-slate-700">{label}</label>
        <input type={type} id={id} value={value} onChange={onChange} step={step} className="w-full p-2 border-2 border-slate-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"/>
    </div>
);

const PricingCalculator: React.FC = () => {
    const [beef, setBeef] = useState({ cutout: 298.50, costs: 6.50, margin: 12 });
    const [pork, setPork] = useState({ cutout: 100.25, costs: 5.00, margin: 10 });
    const [poultry, setPoultry] = useState({ composite: 1.25, costs: 0.04, margin: 8 });
    const [profit, setProfit] = useState({ volume: 80000, buyPrice: 2.85, sellPrice: 2.93 });

    const handleBeefChange = (e: React.ChangeEvent<HTMLInputElement>) => setBeef({ ...beef, [e.target.id.split('-')[1]]: parseFloat(e.target.value) });
    const handlePorkChange = (e: React.ChangeEvent<HTMLInputElement>) => setPork({ ...pork, [e.target.id.split('-')[1]]: parseFloat(e.target.value) });
    const handlePoultryChange = (e: React.ChangeEvent<HTMLInputElement>) => setPoultry({ ...poultry, [e.target.id.split('-')[1]]: parseFloat(e.target.value) });
    const handleProfitChange = (e: React.ChangeEvent<HTMLInputElement>) => setProfit({ ...profit, [e.target.id]: parseFloat(e.target.value) });

    const beefResult = useMemo(() => {
        const costBasis = beef.cutout + beef.costs;
        const marginAmount = costBasis * (beef.margin / 100);
        const finalPrice = costBasis + marginAmount;
        return { costBasis, marginAmount, finalPrice };
    }, [beef]);

    const porkResult = useMemo(() => {
        const costBasis = pork.cutout + pork.costs;
        const marginAmount = costBasis * (pork.margin / 100);
        const finalPrice = costBasis + marginAmount;
        return { costBasis, marginAmount, finalPrice };
    }, [pork]);
    
    const poultryResult = useMemo(() => {
        const costBasis = poultry.composite + poultry.costs;
        const marginAmount = costBasis * (poultry.margin / 100);
        const finalPrice = costBasis + marginAmount;
        return { costBasis, marginAmount, finalPrice };
    }, [poultry]);

    const profitResult = useMemo(() => {
        const spread = profit.sellPrice - profit.buyPrice;
        const totalProfit = profit.volume * spread;
        const marginPercent = profit.buyPrice > 0 ? (spread / profit.buyPrice) * 100 : 0;
        return { spread, totalProfit, marginPercent };
    }, [profit]);

    return (
        <ContentSection>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">🧮 Interactive Pricing Calculator</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <CalculatorCard title="🐂 Beef Pricing Calculator">
                    <InputGroup label="USDA Choice Cutout ($/cwt):" id="beef-cutout" type="number" value={beef.cutout} onChange={handleBeefChange} />
                    <InputGroup label="Fixed Costs ($/cwt):" id="beef-costs" type="number" value={beef.costs} onChange={handleBeefChange} />
                    <InputGroup label="Target Margin (%):" id="beef-margin" type="number" value={beef.margin} onChange={handleBeefChange} step="0.1" />
                    <div className="bg-blue-600 text-white p-4 rounded-lg mt-4 font-semibold text-sm">
                        <p>Cost Basis: ${beefResult.costBasis.toFixed(2)}/cwt</p>
                        <p>Margin: ${beefResult.marginAmount.toFixed(2)}/cwt</p>
                        <p className="font-bold text-base mt-1">Final Price: ${beefResult.finalPrice.toFixed(2)}/cwt</p>
                        <p className="text-blue-200">Per Pound: ${(beefResult.finalPrice / 100).toFixed(3)}/lb</p>
                    </div>
                </CalculatorCard>
                <CalculatorCard title="🐖 Pork Pricing Calculator">
                    <InputGroup label="USDA Pork Cutout ($/cwt):" id="pork-cutout" type="number" value={pork.cutout} onChange={handlePorkChange} />
                    <InputGroup label="Fixed Costs ($/cwt):" id="pork-costs" type="number" value={pork.costs} onChange={handlePorkChange} />
                    <InputGroup label="Target Margin (%):" id="pork-margin" type="number" value={pork.margin} onChange={handlePorkChange} step="0.1" />
                    <div className="bg-red-600 text-white p-4 rounded-lg mt-4 font-semibold text-sm">
                        <p>Cost Basis: ${porkResult.costBasis.toFixed(2)}/cwt</p>
                        <p>Margin: ${porkResult.marginAmount.toFixed(2)}/cwt</p>
                        <p className="font-bold text-base mt-1">Final Price: ${porkResult.finalPrice.toFixed(2)}/cwt</p>
                        <p className="text-red-200">Per Pound: ${(porkResult.finalPrice / 100).toFixed(3)}/lb</p>
                    </div>
                </CalculatorCard>
                <CalculatorCard title="🐓 Poultry Pricing Calculator">
                    <InputGroup label="USDA Broiler Composite ($/lb):" id="poultry-composite" type="number" value={poultry.composite} onChange={handlePoultryChange} />
                    <InputGroup label="Processing Costs ($/lb):" id="poultry-costs" type="number" value={poultry.costs} onChange={handlePoultryChange} />
                    <InputGroup label="Target Margin (%):" id="poultry-margin" type="number" value={poultry.margin} onChange={handlePoultryChange} step="0.1" />
                    <div className="bg-amber-600 text-white p-4 rounded-lg mt-4 font-semibold text-sm">
                        <p>Cost Basis: ${poultryResult.costBasis.toFixed(3)}/lb</p>
                        <p>Margin: ${poultryResult.marginAmount.toFixed(3)}/lb</p>
                        <p className="font-bold text-base mt-1">Final Price: ${poultryResult.finalPrice.toFixed(3)}/lb</p>
                        <p className="text-amber-200">Per CWT: ${(poultryResult.finalPrice * 100).toFixed(2)}/cwt</p>
                    </div>
                </CalculatorCard>
                <CalculatorCard title="💰 Profit Calculator">
                    <InputGroup label="Volume (lbs):" id="volume" type="number" value={profit.volume} onChange={handleProfitChange} step="1000" />
                    <InputGroup label="Buy Price ($/lb):" id="buyPrice" type="number" value={profit.buyPrice} onChange={handleProfitChange} />
                    <InputGroup label="Sell Price ($/lb):" id="sellPrice" type="number" value={profit.sellPrice} onChange={handleProfitChange} />
                     <div className="bg-green-600 text-white p-4 rounded-lg mt-4 font-semibold text-sm">
                        <p>Spread: ${profitResult.spread.toFixed(3)}/lb</p>
                        <p>Margin: {profitResult.marginPercent.toFixed(2)}%</p>
                        <p className="font-bold text-base mt-1">Total Profit: ${profitResult.totalProfit.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                        <p className="text-green-200">On Volume: {profit.volume.toLocaleString()} lbs</p>
                    </div>
                </CalculatorCard>
            </div>
        </ContentSection>
    );
};

export default PricingCalculator;
