import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import Image from 'next/image';

interface MiniCarouselProps {
  items: {
    id: number;
    imagem: string;
    categoria: string;
    itens: number;
  }[];
  setApi: (api: CarouselApi) => void;
  current: number;
  onThumbClick: (index: number) => void;
}

export function MiniCarousel({
  items,
  setApi,
  current,
  onThumbClick,
}: MiniCarouselProps) {
  return (
    <Carousel setApi={setApi} className='w-full'>
      <CarouselContent className='flex gap-2 md:gap-4 px-4 md:px-8'>
        {items.map((item, index) => (
          <CarouselItem
            key={item.id}
            className='basis-1/2 sm:basis-1/3 min-w-[150px] md:min-w-[200px] cursor-pointer first:ml-0 last:mr-0'
            onClick={() => onThumbClick(index)}
          >
            <div
              className={`rounded-xl md:rounded-2xl p-2 md:p-4 flex flex-col items-center transition border-2 ${
                current === index
                  ? 'border-theme2 bg-theme2/50 dark:bg-theme1/50'
                  : 'border-theme2 dark:border-theme1 bg-transparent'
              }`}
            >
              <div className='relative mb-1 md:mb-2 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24'>
                <Image
                  src={item.imagem}
                  alt={item.categoria}
                  fill
                  className='object-contain'
                  sizes='(max-width: 768px) 64px, (max-width: 1024px) 80px, 96px'
                />
              </div>
              <span className='font-bold text-sm md:text-lg text-theme1 dark:text-theme2 text-center'>
                {item.categoria}
              </span>
              <span className='text-gray-500 text-xs md:text-sm dark:text-gray-300'>
                ({item.itens} items)
              </span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='hidden' />
      <CarouselNext className='hidden' />
    </Carousel>
  );
}
