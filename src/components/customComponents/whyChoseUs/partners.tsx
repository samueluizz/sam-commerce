import Image from 'next/image';
import React from 'react';

const brands = [
  {
    id: 1,
    img: '/parceiro1.png',
  },
  {
    id: 2,
    img: '/parceiro2.png',
  },
  {
    id: 3,
    img: '/parceiro3.png',
  },
  {
    id: 4,
    img: '/parceiro4.png',
  },
  {
    id: 5,
    img: '/parceiro5.png',
  },
];

export default function Partners() {
  return (
    <div
      className='hidden sm:flex justify-around items-center mx-2 h-auto md:h-[155px]  
      gap-y-6 md:gap-y-0 md:gap-x-8 px-4 py-6
     bg-theme2/30 dark:bg-theme1/30 my-4 rounded-xl '
    >
      {brands.map((brand) => (
        <Image
          key={brand.id}
          src={brand.img}
          width={0}
          height={0}
          sizes='(max-width: 768px) 100px, 200px'
          className='w-24 sm:w-32 md:w-50 h-auto object-contain max-w-full'
          alt={'parnership brands'}
        />
      ))}
    </div>
  );
}
