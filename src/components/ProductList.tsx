import React from 'react';
import { Product } from '../data/products';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div 
          key={product.id} 
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          {product.image && (
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-sm text-gray-600 mt-1">Категория: {product.category}</p>
            <p className="text-sm font-medium text-gray-900 mt-2">Цена: {product.price_sell} ₽</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;