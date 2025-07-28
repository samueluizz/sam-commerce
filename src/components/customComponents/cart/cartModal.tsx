'use client';

import { Button } from '@/components/ui/button';
import { useCartContext } from '../../../contexts/cartContext';
import Image from 'next/image';
import { FaTrash } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export function CartModal() {
  const {
    isCartOpen,
    toggleCart,
    cart,
    updateQuantity,
    removeFromCart,
    totalItems,
    totalPrice,
  } = useCartContext();

  const router = useRouter();

  if (!isCartOpen) return null;

  const subtotal = totalPrice;
  const shipping = 0;

  const handleCheckout = () => {
    router.push('/checkout');
    toggleCart(); // Fecha o dropdown/modal
  };

  return (
    <div
      className='absolute right-0 mt-2 w-100 bg-theme2 dark:bg-theme1 text-theme1 dark:text-theme2 
      rounded-2xl shadow-2xl p-4 z-50 flex flex-col gap-4 border border-theme1 dark:border-theme2'
    >
      <div className='flex items-center justify-between mb-1'>
        <h2 className='text-xl font-bold'>Seu Carrinho</h2>
        <span
          className='bg-theme1 dark:bg-theme2 text-xs font-bold text-theme2 dark:text-theme1 
          mx-auto px-3 py-1 rounded-full'
        >
          {totalItems} items
        </span>
      </div>
      <div className='text-neutral dark:text-neutral-400 text-sm mb-2'>
        Revise os itens antes de finalizar
      </div>
      <button
        onClick={toggleCart}
        className='absolute top-4 right-6 text-black dark:text-white
               hover:text-theme1 dark:hover:text-theme2 cursor-pointer text-lg'
      >
        ×
      </button>

      <div className='flex flex-col gap-4 max-h-60 overflow-y-auto'>
        {cart.length === 0 ? (
          <div className='flex flex-col items-center justify-center h-24 text-black dark:text-white'>
            <p className='text-lg'>Carrinho vazio</p>
          </div>
        ) : (
          cart.map((item, idx) => (
            <div
              key={item.id || idx}
              className='flex gap-3 items-center bg-transparent border-1 border-theme1 dark:border-theme2 rounded-lg p-2'
            >
              <div className='relative w-12 h-12 flex-shrink-0'>
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name || 'Product image'}
                    fill
                    className='rounded-md object-cover'
                  />
                ) : null}
              </div>
              <div className='flex-1 flex flex-col gap-1 min-w-0'>
                <div className='font-semibold truncate max-w-[140px]'>
                  {item.name}
                </div>
                <div className='text-xs text-black dark:text-white'>
                  Standard
                </div>
                <div className='flex items-center gap-2 mt-1 '>
                  <Button
                    size='sm'
                    variant='outline'
                    className='px-2 py-0.5 h-7 text-black dark:text-white border-black dark:border-white 
                    bg-transparent hover:bg-theme1/30 dark:hover:bg-theme2/30'
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    –
                  </Button>
                  <span className='font-medium text-black dark:text-white'>
                    {item.quantity}
                  </span>
                  <Button
                    size='sm'
                    variant='outline'
                    className='px-2 py-0.5 h-7 text-black dark:text-white border-black dark:border-white 
                    bg-transparent hover:bg-theme1/30 dark:hover:bg-theme2/30'
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
              <div className='flex flex-col items-end gap-1 min-w-[72px]'>
                <span className='font-bold text-base text-black dark:text-white'>
                  R${(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  className='text-black dark:text-white hover:text-red-500 cursor-pointer text-sm mt-1'
                  onClick={() => removeFromCart(item.id)}
                  title='Remove'
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className='flex flex-col gap-2 border-t border-neutral-700 pt-4'>
          <div className='flex justify-between text-sm text-black dark:text-white'>
            <span>Subtotal</span>
            <span>R${subtotal.toFixed(2)}</span>
          </div>
          <div className='flex justify-between text-sm text-black dark:text-white'>
            <span>Entrega</span>
            <span className='text-green-900 dark:text-green-400'>Grátis</span>
          </div>
          <div className='flex justify-between text-lg font-bold mt-2 text-black dark:text-white'>
            <span>Total</span>
            <span>R${(subtotal + shipping).toFixed(2)}</span>
          </div>
          <Button
            size='lg'
            onClick={handleCheckout}
            className='w-full mt-2 bg-white dark:bg-black text-neutral-900 dark:text-neutral-50 font-bold 
            hover:bg-theme1 hover:text-theme2 dark:hover:bg-theme2 dark:hover:text-theme1'
          >
            Finalizar compras
          </Button>
        </div>
      )}
    </div>
  );
}
