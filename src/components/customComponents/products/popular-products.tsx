'use client';

import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from '@/components/ui/carousel';
import { getProducts, Product, TechCategory } from '@/lib/getProducts';
import { toast } from 'sonner';
import { CategorySelector } from './categorySelector';
import { ProductGrid } from './productGridGroup';
import { useEffect, useMemo, useState } from 'react';

export function PopularProducts() {
  const [selectedCategory, setSelectedCategory] = useState<
    TechCategory | 'all'
  >('all');
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const data = await getProducts(
          selectedCategory === 'all' ? undefined : selectedCategory,
        );
        setProducts(data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError('Erro ao carregar produtos');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  useEffect(() => {
    if (isLoading) return;
    if (error) toast.error(error);
    else if (products.length === 0) toast('Nenhum produto encontrado');
  }, [error, isLoading, products.length]);

  const productGroups = useMemo(() => {
    const groups = [];
    for (let i = 0; i < products.length; i += 8) {
      groups.push(products.slice(i, i + 8));
    }
    return groups;
  }, [products]);

  return (
    <section
      id='popular-products'
      className='relative w-full max-w-7xl mx-auto py-4'
    >
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 px-2'>
        <h2 className='text-2xl font-bold text-theme1 dark:text-theme2'>
          Mais vendidos
        </h2>

        <CategorySelector
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      <Carousel
        className='w-full'
        opts={{ slidesToScroll: 1, containScroll: 'trimSnaps' }}
      >
        <CarouselContent className='pb-8'>
          {productGroups.map((group, groupIndex) => (
            <CarouselItem key={groupIndex} className='basis-full'>
              <ProductGrid products={group} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots />
      </Carousel>
    </section>
  );
}
