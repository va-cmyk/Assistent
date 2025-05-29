// Function to calculate profit
export const calculateProfit = (
  price_buy: number, 
  price_sell: number, 
  advertising_cost: number = 0
) => {
  const profit = price_sell - price_buy - advertising_cost;
  const margin = price_sell !== 0 ? (profit / price_sell) * 100 : 0;
  return {
    profit: Number(profit.toFixed(2)),
    profit_margin_percent: Number(margin.toFixed(2))
  };
};

// Function to generate SEO meta tags
export const generateSeoMeta = (productName: string) => {
  return {
    title: productName,
    description: `Купить ${productName} в интернет-магазине с доставкой по России. Лучшие цены и качество.`,
    keywords: `${productName}, купить, топ товары, взрослые товары`
  };
};

// Function to get photo recommendations
export const getPhotoRecommendations = (
  category: string, 
  photoRecommendations: Record<string, string[]>
) => {
  const lowerCategory = category.toLowerCase();
  return photoRecommendations[lowerCategory] || ["https://images.pexels.com/photos/6311158/pexels-photo-6311158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"];
};