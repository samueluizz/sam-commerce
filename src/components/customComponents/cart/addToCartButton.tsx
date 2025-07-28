'use client';

import { FaShoppingCart } from 'react-icons/fa';
import { Button } from '../../ui/button';
import { useCartContext } from '../../../contexts/cartContext';

export function AddToCartButton({
  children,
  product,
}: {
  children: React.ReactNode;
  product: {
    id: number;
    name: string;
    image: string;
    price: number;
  };
}) {
  const { addToCart } = useCartContext();

  return (
    <Button
      variant='theme'
      className='h-12 sm:h-10 w-full sm:w-40 lg:w-60 max-w-full'
      onClick={() => addToCart(product)}
    >
      {children}
      <span>
        <FaShoppingCart />
      </span>
    </Button>
  );
}
