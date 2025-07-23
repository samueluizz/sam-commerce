import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getRandomUsers, RandomUser } from '@/lib/getRandomUsers';
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from '@/components/ui/carousel';

export default function Testimonials() {
  const [users, setUsers] = useState<RandomUser[]>([]);

  useEffect(() => {
    getRandomUsers(12).then(setUsers);
  }, []);

  return (
    <div className='w-full py-12'>
      <h2 className='block sm:hidden text-center text-2xl text-theme1 dark:text-theme2 font-bold mb-8'>
        Depoimentos
      </h2>
      <div className='relative'>
        <Carousel
          className=' w-full '
          opts={{
            align: 'start',
            slidesToScroll: 'auto',
            containScroll: 'trimSnaps',
          }}
        >
          <CarouselContent className='ml-0 pb-8 '>
            {users.map((user) => (
              <CarouselItem
                key={user.id}
                className='basis-full xs:basis-1/2 md:basis-1/3 lg:basis-1/4 gap-x-2 px-3 sm:px-0'
              >
                <div className='border-none shadow-none bg-theme2/50 dark:bg-theme1/50 rounded-xl p-4 text-center mx-2 h-full'>
                  <Image
                    src={user.picture}
                    alt={user.name}
                    width={50}
                    height={50}
                    className='w-16 h-16 mx-auto rounded-full mb-2'
                  />
                  <h3 className='font-bold text-lg text-theme1 dark:text-theme2'>
                    {user.name}
                  </h3>
                  <p className='text-sm text-gray-600 dark:text-gray-300'>
                    {user.location}
                  </p>
                  <p className='text-xs mt-2 text-gray-500 dark:text-gray-400 italic'>
                    “Lorem ipsum dolor sit amet consectetur. Nec sit enim
                    tellus...”
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselDots className='mt-4' />
        </Carousel>
      </div>
    </div>
  );
}
