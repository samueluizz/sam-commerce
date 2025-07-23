'use client';

import { FaBoxOpen, FaCrown, FaShieldAlt } from 'react-icons/fa';

const benefits = [
  {
    id: 1,
    title: 'Entrega grátis',
    description: 'Para pedidos acima de R$50',
    icon: <FaBoxOpen />,
  },
  {
    id: 2,
    title: 'Melhor qualidade',
    description: 'Com os menores preços',
    icon: <FaCrown />,
  },
  {
    id: 3,
    title: '1 ano de garantia',
    description: 'Para qualquer item',
    icon: <FaShieldAlt />,
  },
];

export default function Benefits() {
  return (
    <div
      className='flex flex-col my-4 h-auto md:h-[155px] md:flex-row justify-around items-center 
    gap-y-6 md:gap-y-0 md:gap-x-8 px-4 py-6  mx-2 text-theme1 dark:text-theme2
     bg-theme2/30 dark:bg-theme1/20 rounded-xl'
    >
      {benefits.map((benefit) => (
        <div
          key={benefit.id}
          className='flex items-center gap-4 text-center md:text-left'
        >
          <div className='text-5xl text-theme2 dark:text-theme1'>
            {benefit.icon}
          </div>
          <div className='flex flex-col'>
            <span className='font-bold text-lg md:text-xl'>
              {benefit.title}
            </span>
            <span className='font-thin text-sm text-black dark:text-white'>
              {benefit.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
