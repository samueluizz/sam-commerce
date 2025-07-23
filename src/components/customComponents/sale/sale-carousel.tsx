import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { AddToCartButton } from '../cart/addToCartButton';

interface SaleCarouselProps {
  className?: string;
}

const itensCarousel = [
  {
    id: 1,
    name: 'Caixa de Som JBL bar 2.1 deep bass',
    image: '/speakers-nobg.png',
    price: 75,
  },
  {
    id: 2,
    name: 'Headphones sem fio 7.1 sound surround',
    image: '/headphone2.png',
    price: 800,
  },
];

export function SaleCarousel({ className }: SaleCarouselProps) {
  return (
    <Carousel className={`w-full h-full ${className}`}>
      <CarouselContent>
        {itensCarousel.map((item, index) => (
          <CarouselItem key={item.id}>
            <div className='p-1'>
              <Card className='bg-transparent border-none shadow-none h-[500px] w-full justify-center'>
                <CardContent className='flex justify-center items-center p-4'>
                  <div className='relative w-96 h-72'>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className='object-contain'
                      priority={index === 0}
                      sizes='(max-width: 768px) 100vw, 384px'
                    />
                  </div>
                  <div className='w-[338px] h-[316px] flex flex-col justify-center items-center'>
                    <div className='font-bold text-3xl text-theme1 dark:text-theme2 mb-1 text-center'>
                      {item.name}
                    </div>
                    <div className='text-theme1/50 dark:text-theme2/50 font-semibold mb-1'>
                      R${item.price}
                    </div>
                    <div className='flex gap-2 mt-4 w-full'>
                      <AddToCartButton product={item}>
                        Add to cart
                      </AddToCartButton>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDots className='my-2' />
    </Carousel>
  );
}
