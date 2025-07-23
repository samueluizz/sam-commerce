export const TECH_CATEGORIES = ['smartphones', 'laptops', 'tablets'] as const;

export type TechCategory = (typeof TECH_CATEGORIES)[number];

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: TechCategory;
  thumbnail: string;
  images: string[];
}

export interface ProductAPIResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export async function getProducts(
  limit: number = 100,
  category?: TechCategory,
): Promise<Product[]> {
  const url = category
    ? `https://dummyjson.com/products/category/${category}?limit=${limit}`
    : `https://dummyjson.com/products?limit=${limit}`;

  const response = await fetch(url);
  const data: ProductAPIResponse = await response.json();

  if (!response.ok) {
    throw new Error(`Error fetching products: ${JSON.stringify(data)}`);
  }

  const techProducts = data.products
    .filter((product) => TECH_CATEGORIES.includes(product.category))
    .slice(0, limit);

  return techProducts;
}
