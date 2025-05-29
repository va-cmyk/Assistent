export interface Product {
  id: number;
  name: string;
  category: string;
  price_buy: number;
  price_sell: number;
  image?: string;
}

// Test data: popular products
export const popularProducts: Product[] = [
  {
    id: 1, 
    name: "Массажер со смарт-функциями", 
    category: "Массажеры", 
    price_buy: 1000, 
    price_sell: 2500,
    image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2, 
    name: "Сексуальное бельё", 
    category: "Бельё", 
    price_buy: 500, 
    price_sell: 1500,
    image: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3, 
    name: "Умные презервативы", 
    category: "Презервативы", 
    price_buy: 150, 
    price_sell: 500,
    image: "https://images.pexels.com/photos/5938242/pexels-photo-5938242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
];

// Photo recommendations by category
export const photoRecommendations: Record<string, string[]> = {
  "массажеры": [
    "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3865548/pexels-photo-3865548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ],
  "бельё": [
    "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6775268/pexels-photo-6775268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ],
  "презервативы": [
    "https://images.pexels.com/photos/5938242/pexels-photo-5938242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6476177/pexels-photo-6476177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ]
};