'use client';

import { useCartContext } from '@/contexts/cartContext';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FaTrash } from 'react-icons/fa';
import Link from 'next/link';

export default function CheckoutPage() {
  const { cart, updateQuantity, removeFromCart, totalPrice, totalItems } =
    useCartContext();

  const subtotal = totalPrice;
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-2xl font-bold mb-6'>Finalizar Compra</h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='md:col-span-2'>
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow p-6'>
              <h2 className='text-xl font-semibold mb-4'>
                Seu Carrinho ({totalItems} {totalItems === 1 ? 'item' : 'itens'}
                )
              </h2>

              {cart.length === 0 ? (
                <div className='text-center py-8'>
                  <p className='text-lg mb-4'>Seu carrinho está vazio</p>
                  <Link
                    href='/'
                    className='text-blue-600 dark:text-blue-400 hover:underline'
                  >
                    Voltar para a loja
                  </Link>
                </div>
              ) : (
                <div className='space-y-4'>
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className='flex items-center xs:flex-row sm:items-center  border-b pb-4'
                    >
                      <div className='relative w-20 h-20 flex-shrink-0'>
                        {item.image && (
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className='rounded-md object-cover'
                          />
                        )}
                      </div>

                      <div className='flex-1'>
                        <h3 className='font-medium'>{item.name}</h3>
                        <p className='text-sm text-gray-500 dark:text-gray-400'>
                          Standard
                        </p>

                        <div className='flex items-center gap-2 mt-2'>
                          <Button
                            variant='outline'
                            className='w-5 h-5 sm:w-9 sm:h-9'
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                          >
                            -
                          </Button>
                          <span>{item.quantity}</span>
                          <Button
                            variant='outline'
                            className='w-5 h-5 sm:w-9 sm:h-9'
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </Button>
                        </div>
                      </div>

                      <div className='flex flex-col items-end text-xs sm:text-sm '>
                        <span className='font-bold'>
                          R${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className='text-red-500 hover:text-red-700 cursor-pointer text-sm mt-1'
                          title='Remover'
                        >
                          <FaTrash size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className='md:col-span-1'>
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow p-6 sticky top-4'>
              <h2 className='text-xl font-semibold mb-4'>Resumo do Pedido</h2>

              <div className='space-y-3 mb-6'>
                <div className='flex justify-between'>
                  <span>Subtotal</span>
                  <span>R${subtotal.toFixed(2)}</span>
                </div>
                <div className='flex justify-between'>
                  <span>Entrega</span>
                  <span className='text-green-600 dark:text-green-400'>
                    Grátis
                  </span>
                </div>
                <div className='border-t pt-3 flex justify-between font-bold text-lg'>
                  <span>Total</span>
                  <span>R${total.toFixed(2)}</span>
                </div>
              </div>

              <Button className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3'>
                Finalizar Compra
              </Button>

              <div className='mt-4 text-sm text-gray-500 dark:text-gray-400'>
                <p className='flex items-center gap-1'>
                  <span>🚚</span> Frete grátis para pedidos acima de R$200
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
