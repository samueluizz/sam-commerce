import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FaHeart, FaStar } from 'react-icons/fa';
import { AddToCartButton } from '../cart/addToCartButton';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    image: string;
    price: number;
    discountPercentage?: number;
    rating?: number;
  };
  isSelected?: boolean;
  onSelect?: (id: number) => void;
}

export function ProductCard({
  product,
  isSelected = false,
  onSelect = () => {},
}: ProductCardProps) {
  // Calcula o preço com desconto se houver
  const discountedPrice = product.discountPercentage
    ? product.price * (1 - product.discountPercentage / 100)
    : null;

  return (
    <Card
      className={`relative group cursor-pointer transition-shadow w-full ${
        isSelected
          ? 'border-2 border-theme1 dark:border-theme2 bg-theme2/50 dark:bg-theme1/50'
          : 'border-2 border-theme2 dark:border-theme1'
      }`}
      onClick={() => onSelect(product.id)}
    >
      {product.discountPercentage && (
        <div className='absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10'>
          -{product.discountPercentage}%
        </div>
      )}

      <Button
        variant={'secondary'}
        className='absolute top-3 right-3 bg-theme2 dark:bg-theme1 text-theme1 dark:text-theme2 
                  rounded-full p-1 shadow hover:bg-theme1/30 dark:hover:bg-theme2/30 transition z-10'
      >
        <FaHeart size={20} />
      </Button>

      <CardContent className='flex flex-col items-center p-4'>
        <div className='relative w-full h-24 mb-2'>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className='object-contain'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
            priority={false}
          />
        </div>

        <div className='font-medium text-base text-theme1 dark:text-theme2 mb-1 text-center line-clamp-2'>
          {product.name}
        </div>

        {product.rating && (
          <div className='flex items-center gap-1 mb-1'>
            <FaStar className='text-yellow-400' />
            <span className='text-sm text-theme1 dark:text-theme2'>
              {product.rating.toFixed(1)}
            </span>
          </div>
        )}

        <div className='flex flex-col items-center'>
          {discountedPrice ? (
            <>
              <span className='text-theme1/50 dark:text-theme2/50 font-semibold line-through'>
                R${product.price.toFixed(2).replace('.', ',')}
              </span>
              <span className='text-red-500 dark:text-red-400 font-bold'>
                R${discountedPrice.toFixed(2).replace('.', ',')}
              </span>
            </>
          ) : (
            <span className='text-theme1/50 dark:text-theme2/50 font-semibold'>
              R${product.price.toFixed(2).replace('.', ',')}
            </span>
          )}
        </div>

        {isSelected && (
          <div className='flex gap-2 mt-4 w-full'>
            <AddToCartButton product={product}>Add to cart</AddToCartButton>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
