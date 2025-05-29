import React, { useState, useEffect } from 'react';
import { getPhotoRecommendations } from '../utils/helpers';
import { photoRecommendations } from '../data/products';
import { Product } from '../data/products';

interface PhotoRecommendationsProps {
  selectedProduct?: Product;
}

const PhotoRecommendations: React.FC<PhotoRecommendationsProps> = ({ selectedProduct }) => {
  const [category, setCategory] = useState<string>('');
  const [recommendedPhotos, setRecommendedPhotos] = useState<string[]>([]);

  useEffect(() => {
    if (selectedProduct) {
      setCategory(selectedProduct.category);
      const photos = getPhotoRecommendations(selectedProduct.category, photoRecommendations);
      setRecommendedPhotos(photos);
    }
  }, [selectedProduct]);

  const handleGetRecommendations = () => {
    const photos = getPhotoRecommendations(category, photoRecommendations);
    setRecommendedPhotos(photos);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Рекомендации по подбору фото</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Категория товара
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Выберите категорию</option>
            <option value="Массажеры">Массажеры</option>
            <option value="Бельё">Бельё</option>
            <option value="Презервативы">Презервативы</option>
          </select>
        </div>
        
        <button
          onClick={handleGetRecommendations}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          disabled={!category}
        >
          Получить рекомендации
        </button>
      </div>
      
      {recommendedPhotos.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-800 mb-3">Рекомендуемые фото:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {recommendedPhotos.map((photo, index) => (
              <div key={index} className="overflow-hidden rounded-md shadow-sm">
                <img 
                  src={photo} 
                  alt={`Рекомендация ${index + 1}`} 
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Примечание: В реальном проекте здесь будет интеграция с API по подбору фото.
          </p>
        </div>
      )}
    </div>
  );
};

export default PhotoRecommendations;