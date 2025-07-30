'use client';

import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { Button } from '../../ui/button';
import { MiniCarousel } from './hero-mini-carousel';
import { useEffect, useRef, useState } from 'react';

const itensDoCarrossel = [
  {
    id: 1,
    imagem: '/camera-nobg.png',
    titulo: 'Desconto de até 50% em câmeras',
    descricao:
      'His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    preco: 'R$800',
    categoria: 'Câmeras',
    itens: 6,
  },
  {
    id: 2,
    imagem: '/notebook-nobg.png',
    titulo: '30% de desconto na categoria informática',
    descricao:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preco: 'R$1.200',
    categoria: 'Computadores',
    itens: 6,
  },
  {
    id: 3,
    imagem: '/speakers-nobg.png',
    titulo: '70% de desconto nesta caixa de som',
    descricao:
      'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    preco: 'R$75',
    categoria: 'Som',
    itens: 6,
  },
];

export function HeroCarousel() {
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbApi, setThumbApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!mainApi || !thumbApi) return;

    const handleMainSelect = () => {
      const selected = mainApi.selectedScrollSnap();
      setCurrent(selected);
      thumbApi.scrollTo(selected);
    };

    const handleThumbSelect = () => {
      const selected = thumbApi.selectedScrollSnap();
      setCurrent(selected);
      mainApi.scrollTo(selected);
    };

    mainApi.on('select', handleMainSelect);
    thumbApi.on('select', handleThumbSelect);

    return () => {
      mainApi.off('select', handleMainSelect);
      thumbApi.off('select', handleThumbSelect);
    };
  }, [mainApi, thumbApi]);

  const handleThumbClick = (index: number) => {
    if (!mainApi || !thumbApi) return;
    mainApi.scrollTo(index);
    thumbApi.scrollTo(index);
    setCurrent(index);
  };

  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <div className='flex flex-col items-center w-full bg-transparent py-4 md:py-8 px-4 md:px-0 mx-2'>
      <div className='w-full max-w-7xl '>
        <Carousel
          plugins={[plugin.current]}
          setApi={setMainApi}
          className='w-full'
        >
          <CarouselContent>
            {itensDoCarrossel.map((item, index) => (
              <CarouselItem key={item.id}>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-4 md:gap-8 min-h-[300px] md:min-h-[400px]'>
                  <div className='flex flex-col justify-center gap-3 md:gap-4 pt-8 md:pt-12 lg:pt-0 text-left order-2 lg:order-1 relative z-10 text-yellow-400 px-4 md:px-0'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-[4rem] font-extrabold leading-tight text-theme1 dark:text-theme2'>
                      {item.titulo}
                    </h1>
                    <p className='text-sm md:text-base text-theme1 dark:text-theme2 line-clamp-3 md:line-clamp-none'>
                      {item.descricao}
                    </p>
                    <div>
                      <Button
                        variant={'link'}
                        className='bg-theme2 text-theme1 font-semibold py-2 px-4 md:px-6 rounded-full shadow-none hover:scale-102 transition-all text-sm md:text-base'
                      >
                        Peça Agora
                      </Button>
                    </div>
                  </div>

                  <div className='order-1 lg:order-2 flex justify-center items-center relative'>
                    <Image
                      src={item.imagem}
                      alt={item.titulo}
                      width={300}
                      height={225}
                      className='object-contain w-48 h-36 md:w-64 md:h-48 lg:w-80 lg:h-60 xl:w-96 xl:h-72'
                      priority={index === 0}
                    />
                    <div className='absolute -bottom-2 md:-bottom-0 right-0 md:right-0 bg-theme2 w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 flex flex-col items-center justify-center rounded-full shadow-lg'>
                      <span className='text-theme1 font-bold text-xs md:text-sm lg:text-lg leading-tight'>
                        APENAS
                      </span>
                      <span className='text-theme1 font-bold text-sm md:text-lg lg:text-2xl leading-tight'>
                        {item.preco}
                      </span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className='w-full max-w-5xl mt-4 md:mt-8 px-4 md:px-8'>
        <MiniCarousel
          items={itensDoCarrossel}
          setApi={setThumbApi}
          current={current}
          onThumbClick={handleThumbClick}
        />
      </div>
    </div>
  );
}
