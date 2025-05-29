import React, { useState, useEffect } from 'react';
import { generateSeoMeta } from '../utils/helpers';
import { Product } from '../data/products';

interface SeoGeneratorProps {
  selectedProduct?: Product;
}

const SeoGenerator: React.FC<SeoGeneratorProps> = ({ selectedProduct }) => {
  const [productName, setProductName] = useState<string>('');
  const [seoMeta, setSeoMeta] = useState<{ title: string; description: string; keywords: string } | null>(null);

  useEffect(() => {
    if (selectedProduct) {
      setProductName(selectedProduct.name);
      generateSeoTags(selectedProduct.name);
    }
  }, [selectedProduct]);

  const generateSeoTags = (name: string) => {
    const meta = generateSeoMeta(name);
    setSeoMeta(meta);
  };

  const handleGenerate = () => {
    generateSeoTags(productName);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">SEO-оптимизация</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Название товара
          </label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <button
          onClick={handleGenerate}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Сгенерировать мета-теги
        </button>
      </div>
      
      {seoMeta && (
        <div className="mt-6 space-y-4">
          <div className="p-4 bg-gray-50 rounded-md">
            <h3 className="text-sm font-medium text-gray-800 mb-1">Title:</h3>
            <p className="text-sm text-gray-700 font-mono p-2 bg-gray-100 rounded">
              {seoMeta.title}
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-md">
            <h3 className="text-sm font-medium text-gray-800 mb-1">Description:</h3>
            <p className="text-sm text-gray-700 font-mono p-2 bg-gray-100 rounded">
              {seoMeta.description}
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-md">
            <h3 className="text-sm font-medium text-gray-800 mb-1">Keywords:</h3>
            <p className="text-sm text-gray-700 font-mono p-2 bg-gray-100 rounded">
              {seoMeta.keywords}
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-md">
            <h3 className="text-sm font-medium text-gray-800 mb-1">HTML Meta Tags:</h3>
            <pre className="text-xs text-gray-700 font-mono p-2 bg-gray-100 rounded overflow-x-auto">
{`<title>${seoMeta.title}</title>
<meta name="description" content="${seoMeta.description}" />
<meta name="keywords" content="${seoMeta.keywords}" />`}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeoGenerator;