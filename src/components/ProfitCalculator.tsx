import React, { useState, useEffect } from 'react';
import { calculateProfit } from '../utils/helpers';
import { Product } from '../data/products';

interface ProfitCalculatorProps {
  selectedProduct?: Product;
}

const ProfitCalculator: React.FC<ProfitCalculatorProps> = ({ selectedProduct }) => {
  const [priceBuy, setPriceBuy] = useState<number>(0);
  const [priceSell, setPriceSell] = useState<number>(0);
  const [advertisingCost, setAdvertisingCost] = useState<number>(0);
  const [result, setResult] = useState<{ profit: number; profit_margin_percent: number } | null>(null);

  useEffect(() => {
    if (selectedProduct) {
      setPriceBuy(selectedProduct.price_buy);
      setPriceSell(selectedProduct.price_sell);
      calculateResults(selectedProduct.price_buy, selectedProduct.price_sell, advertisingCost);
    }
  }, [selectedProduct]);

  const calculateResults = (buy: number, sell: number, adCost: number) => {
    const results = calculateProfit(buy, sell, adCost);
    setResult(results);
  };

  const handleCalculate = () => {
    calculateResults(priceBuy, priceSell, advertisingCost);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Анализ рентабельности</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Закупочная цена (₽)
          </label>
          <input
            type="number"
            value={priceBuy}
            onChange={(e) => setPriceBuy(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Цена продажи (₽)
          </label>
          <input
            type="number"
            value={priceSell}
            onChange={(e) => setPriceSell(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Расходы на рекламу (₽)
          </label>
          <input
            type="number"
            value={advertisingCost}
            onChange={(e) => setAdvertisingCost(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <button
          onClick={handleCalculate}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Рассчитать
        </button>
      </div>
      
      {result && (
        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <h3 className="text-lg font-medium text-gray-800 mb-2">Результаты:</h3>
          <p className="text-sm text-gray-700">
            <span className="font-medium">Прибыль:</span> {result.profit} ₽
          </p>
          <p className="text-sm text-gray-700">
            <span className="font-medium">Маржа:</span> {result.profit_margin_percent}%
          </p>
          
          <div className="mt-3 pt-3 border-t border-gray-200">
            <p className={`text-sm font-medium ${result.profit > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {result.profit > 0 
                ? 'Товар рентабелен' 
                : 'Товар нерентабелен - рекомендуется пересмотреть цены'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfitCalculator;