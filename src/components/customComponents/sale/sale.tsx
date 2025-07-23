'use client';

import Image from 'next/image';
import NotebookBanner from './notebook-banner';
import { SaleCarousel } from './sale-carousel';
import { AddToCartButton } from '../cart/addToCartButton';

const items = [
  {
    id: 1,
    name: 'Game Controller',
    image: '/game-controller.png',
    price: 120,
  },
  {
    id: 2,
    name: 'Notebook',
    image: '/notebook-nobg.png',
    price: 1099,
  },
];

export default function Sale() {
  return (
    <section id='sale' className='relative items-center w-full max-w-7xl'>
      <NotebookBanner />

      <div className='grid grid-cols-1 lg:grid-cols-[minmax(300px,_803px)_minmax(200px,_493px)] gap-2 '>
        <div className='border-2 border-theme2 dark:border-theme1 rounded-xl h-[505px] mx-2'>
          <SaleCarousel />
        </div>

        <div className='hidden md:grid grid-rows-2 gap-4 h-[505px]'>
          {items.map((item) => (
            <div
              key={item.id}
              className='gap-4 border-2 border-theme2 dark:border-theme1 rounded-xl flex-1 
              flex items-center justify-center mx-2'
            >
              <Image src={item.image} alt='' width={150} height={150} />
              <div className='flex flex-col justify-center items-center'>
                <div className='font-bold text-2xl text-theme1 dark:text-theme2 mb-1 text-center'>
                  {item.name}
                </div>
                <div className='text-theme1/50 dark:text-theme2/50 font-semibold mb-1'>
                  R${item.price}
                </div>
                <div className='flex gap-2 mt-4 w-full'>
                  <AddToCartButton product={item}>Add to cart</AddToCartButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
