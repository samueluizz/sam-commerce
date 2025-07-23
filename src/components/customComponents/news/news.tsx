import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';
import React from 'react';

const cards = [
  {
    id: 1,
    img: '/card1.jpg',
    title: 'Imersão Total: Controle e Realidade Virtual em Alta Performance',
    description:
      'Uma combinação perfeita entre controle de alta precisão e visualização VR de última geração.',
  },
  {
    id: 2,
    img: '/card2.jpg',
    title:
      'Setup Gamer RGB: Potência, Estilo e Desempenho para Jogar no Máximo',
    description:
      'Um ambiente completo para quem busca uma experiência de jogo envolvente e personalizada.',
  },
  {
    id: 3,
    img: '/card3.jpg',
    title: 'Interface do Futuro: Dados em Tempo Real com Design Imersivo',
    description:
      'Visualização de dados em dashboards futuristas com foco em experiência do usuário e performance analítica.',
  },
  {
    id: 4,
    img: '/card4.jpg',
    title: 'Potência Artificial: O Coração Inteligente da Nova Era Tecnológica',
    description:
      'Uma representação do avanço da inteligência artificial integrada à robótica e automação de alta precisão.',
  },
  {
    id: 5,
    img: '/card5.jpg',
    title: 'Tecnologia Portátil: Dispositivo Inteligente para Bem-Estar Diário',
    description:
      'Compacto, moderno e funcional — ideal para quem busca inovação no cuidado pessoal ou fitness tech.',
  },
  {
    id: 6,
    img: '/card6.jpg',
    title:
      'Design Minimalista: Potência e Estilo em um Mini PC de Alto Desempenho',
    description:
      'Uma solução moderna para setups compactos com desempenho e sofisticação.',
  },
];

export default function News() {
  return (
    <section
      id='news'
      className='relative w-full max-w-7xl mx-auto text-center'
    >
      <h2 className='text-2xl font-bold text-theme1 dark:text-theme2 pb-4'>
        Últimas notícias:
      </h2>
      <Carousel
        opts={{
          align: 'start',
          slidesToScroll: 'auto',
          containScroll: 'trimSnaps',
        }}
      >
        <CarouselContent className=' pb-8'>
          {cards.map((card) => (
            <CarouselItem key={card.id} className='basis-full sm:basis-1/2'>
              <div
                className='mx-2 flex flex-col sm:flex-row justify-between items-center
                    text-center border border-theme2 dark:border-theme1 rounded-xl p-4 h-[369px] gap-2 bg-theme2/30 dark:bg-theme1/30'
              >
                <div className='w-[200px] h-[180px] sm:w-[400px] sm:h-[280px] rounded-2xl overflow-hidden'>
                  <Image
                    src={card.img}
                    width={400}
                    height={380}
                    alt='newsletter'
                    className='w-full h-full hover:scale-120 cursor-pointer transition object-cover'
                  />
                </div>
                <div className='flex flex-col gap-y-5 lg:gap-y-10 w-full'>
                  <h1 className='text-xl lg:text-2xl font-bold text-theme1 dark:text-theme2'>
                    {card.title}
                  </h1>
                  <p className='text-sm lg:text-md italic font-thin'>
                    {card.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots />
      </Carousel>
    </section>
  );
}
