export const TECH_CATEGORIES = ['smartphones', 'laptops', 'tablets'] as const;
export type TechCategory = (typeof TECH_CATEGORIES)[number];
export type SelectableCategory = TechCategory | 'all';

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export async function getProducts(category?: TechCategory): Promise<Product[]> {
  try {
    if (category) {
      const response = await fetch(
        `https://dummyjson.com/products/category/${category}`,
      );
      const data = await response.json();
      return data.products;
    }

    const allResponses = await Promise.all(
      TECH_CATEGORIES.map((cat) =>
        fetch(`https://dummyjson.com/products/category/${cat}`)
          .then((res) => res.json())
          .then((data) => data.products),
      ),
    );

    return allResponses.flat();
  } catch (error) {
    console.error('Error in getProducts:', error);
    throw error;
  }
}
