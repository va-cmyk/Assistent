import React, { useEffect } from 'react';
import { ShoppingBag, BarChart2, Search, Image, RefreshCw } from 'lucide-react';
import { popularProducts } from './data/products';
import ProductList from './components/ProductList';
import ProfitCalculator from './components/ProfitCalculator';
import SeoGenerator from './components/SeoGenerator';
import PhotoRecommendations from './components/PhotoRecommendations';
import SearchBar from './components/SearchBar';
import { useProductStore } from './store/productStore';

function App() {
  const [activeTab, setActiveTab] = React.useState<string>('products');
  const { products, filteredProducts, updateProducts } = useProductStore();

  useEffect(() => {
    // Initialize store with popular products
    popularProducts.forEach(product => {
      useProductStore.getState().addProduct(product);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold">Умный ассистент для интернет-магазина</h1>
          <p className="mt-1 text-blue-100">Инструменты для управления товарами для взрослых</p>
          <div className="mt-4">
            <SearchBar />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left sidebar - Navigation */}
          <div className="w-full md:w-64 shrink-0">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <nav className="flex flex-col">
                <button 
                  className={`flex items-center px-4 py-3 text-left ${activeTab === 'products' ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setActiveTab('products')}
                >
                  <ShoppingBag className="mr-3 h-5 w-5" />
                  <span>Популярные товары</span>
                </button>
                <button 
                  className={`flex items-center px-4 py-3 text-left ${activeTab === 'profit' ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setActiveTab('profit')}
                >
                  <BarChart2 className="mr-3 h-5 w-5" />
                  <span>Анализ рентабельности</span>
                </button>
                <button 
                  className={`flex items-center px-4 py-3 text-left ${activeTab === 'seo' ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setActiveTab('seo')}
                >
                  <Search className="mr-3 h-5 w-5" />
                  <span>SEO-оптимизация</span>
                </button>
                <button 
                  className={`flex items-center px-4 py-3 text-left ${activeTab === 'photos' ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setActiveTab('photos')}
                >
                  <Image className="mr-3 h-5 w-5" />
                  <span>Подбор фото</span>
                </button>
              </nav>
            </div>

            <button
              onClick={updateProducts}
              className="mt-4 w-full flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <RefreshCw className="mr-2 h-5 w-5" />
              Обновить базу товаров
            </button>
          </div>

          {/* Main content area */}
          <div className="flex-1">
            {activeTab === 'products' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                  {filteredProducts.length > 0 ? 'Результаты поиска' : 'Популярные товары'}
                </h2>
                <ProductList 
                  products={filteredProducts.length > 0 ? filteredProducts : products}
                />
              </div>
            )}

            {activeTab === 'profit' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Анализ рентабельности</h2>
                <ProfitCalculator />
              </div>
            )}

            {activeTab === 'seo' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">SEO-оптимизация</h2>
                <SeoGenerator />
              </div>
            )}

            {activeTab === 'photos' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Рекомендации по подбору фото</h2>
                <PhotoRecommendations />
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Умный ассистент для интернет-магазина товаров для взрослых</p>
          <p className="text-sm mt-2 text-gray-400">Разработано с использованием React и TypeScript</p>
        </div>
      </footer>
    </div>
  );
}

export default App;