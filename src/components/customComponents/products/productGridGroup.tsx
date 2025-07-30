'use client';

import { ProductCard } from './productCard';
import { Product } from '@/lib/getProducts';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {products.map((product) => (
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
        />
      ))}
    </div>
  );
}
