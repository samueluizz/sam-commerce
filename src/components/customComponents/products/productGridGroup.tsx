'use client';

import { ProductCard } from './productCard';
import { Product } from '@/lib/getProducts';

interface ProductGridGroupProps {
  products: Product[];
  selectedProductId: number | null;
  onSelect: (id: number) => void;
}

export function ProductGridGroup({
  products,
  selectedProductId,
  onSelect,
}: ProductGridGroupProps) {
  return (
    <div className='space-y-4 px-2'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-fr'>
        {products.slice(0, 4).map((product) => (
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
            isSelected={selectedProductId === product.id}
            onSelect={onSelect}
          />
        ))}
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-fr'>
        {products.slice(4, 8).map((product) => (
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
            isSelected={selectedProductId === product.id}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}
