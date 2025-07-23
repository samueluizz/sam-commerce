'use client';

import { FaShoppingCart } from 'react-icons/fa';
import { Button } from '../../ui/button';
import { useCartContext } from './cartContext';

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
    <Button variant='theme' onClick={() => addToCart(product)}>
      {children}
      <span className='sm:ml-1'>
        <FaShoppingCart />
      </span>
    </Button>
  );
}
