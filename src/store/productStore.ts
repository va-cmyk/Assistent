import { create } from 'zustand';
import { Product } from '../data/products';

interface ProductStore {
  products: Product[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredProducts: Product[];
  addProduct: (product: Product) => void;
  updateProducts: () => void;
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  searchQuery: '',
  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
    const products = get().products;
    const filtered = products.filter(
      product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    );
    set({ filteredProducts: filtered });
  },
  filteredProducts: [],
  addProduct: (product: Product) => {
    set(state => ({
      products: [...state.products, product],
      filteredProducts: [...state.filteredProducts, product]
    }));
  },
  updateProducts: () => {
    // Simulating new product addition
    const newProduct = {
      id: Date.now(),
      name: "Новый секс-игрушка с Bluetooth",
      category: "Вибраторы",
      price_buy: 1500,
      price_sell: 4000,
      image: "https://images.pexels.com/photos/6311158/pexels-photo-6311158.jpeg"
    };
    get().addProduct(newProduct);
  }
}));