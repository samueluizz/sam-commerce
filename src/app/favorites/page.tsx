'use client';

import { motion } from 'framer-motion';
import { useFavoritesContext } from '@/contexts/favoritesContext'; // Seu context personalizado
import { ProductCard } from '@/components/customComponents/products/productCard';

export default function FavoritesPage() {
  const { favorites } = useFavoritesContext();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      key='motion-layout'
      className='flex justify-center flex-col items-center min-w-screen min-h-full gap-y-10'
    >
      {/* Grid de Produtos */}
      <div className='flex flex-col items-center justify-center max-w-full mx-auto p-4 sm:p-6 lg:p-8'>
        <h2 className='text-xl font-semibold mb-4'>Meus Favoritos</h2>

        {favorites.length === 0 ? (
          <p className='text-muted-foreground'>Nenhum item nos favoritos.</p>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-5 gap-4 w-full justify-center items-center'>
            {favorites.map((product) => (
              <ProductCard
                className='w-[250px] max-w-sm'
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
