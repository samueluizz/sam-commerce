'use client';

import { ProductCard } from '@/components/customComponents/products/productCard';
import {
  getProducts,
  type Product,
  TECH_CATEGORIES,
  type TechCategory,
} from '@/lib/getProducts';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SearchContent() {
  const searchParams = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const searchQuery = searchParams.get('query')?.toLowerCase() || '';
  const categoryParam = searchParams.get('category');

  const category: TechCategory | undefined =
    categoryParam && TECH_CATEGORIES.includes(categoryParam as TechCategory)
      ? (categoryParam as TechCategory)
      : undefined;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const allProducts = await getProducts(category);

        const filtered = searchQuery
          ? allProducts.filter(
              (p) =>
                p.title.toLowerCase().includes(searchQuery) ||
                p.description.toLowerCase().includes(searchQuery) ||
                p.brand.toLowerCase().includes(searchQuery),
            )
          : allProducts;

        setFilteredProducts(filtered);
      } catch (err) {
        console.error('Error:', err);
        setError('Erro ao carregar produtos');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, searchQuery]);
  return (
    <div className='container mx-auto px-4 py-8'>
      <h2 className='text-2xl font-bold mb-6'>
        {searchQuery
          ? `Resultados para: "${searchQuery}"`
          : category
          ? `Produtos em ${category}`
          : 'Todos os produtos disponíveis'}
      </h2>

      {error ? (
        <div className='text-center text-red-500 mb-4'>{error}</div>
      ) : loading ? (
        <div className='text-center'>Carregando...</div>
      ) : filteredProducts.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                id: product.id,
                name: product.title,
                image: product.thumbnail,
                price: product.price,
                discountPercentage: product.discountPercentage,
                rating: product.rating,
              }}
              className='w-full max-w-sm'
            />
          ))}
        </div>
      ) : (
        <div className='text-center text-gray-500'>
          {searchQuery
            ? `Nenhum produto encontrado para "${searchQuery}"${
                category ? ` na categoria ${category}` : ''
              }.`
            : `Nenhum produto disponível${
                category ? ` na categoria ${category}` : ''
              } no momento.`}
        </div>
      )}
    </div>
  );
}
