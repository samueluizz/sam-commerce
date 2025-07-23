'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CiViewList, CiViewTable } from 'react-icons/ci';

const menuItems = [
  {
    id: 1,
    name: 'Inicio',
    link: '/#hero',
  },
  {
    id: 2,
    name: 'Mais Vendidos',
    link: '/#popular-products',
  },
  {
    id: 3,
    name: 'Promoções',
    link: '/#sale',
  },
  {
    id: 4,
    name: 'Novidades',
    link: '/#news',
  },
  {
    id: 5,
    name: 'Serviços',
    link: '/#footer',
  },
];

export default function LowerNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-theme2/20 dark:bg-theme1/80 w-full min-h-[40px] relative'>
      <ul className='hidden sm:flex justify-center items-center gap-4 h-10'>
        {menuItems.map((data) => (
          <li key={data.id}>
            <Link
              href={data.link}
              className='inline-block px-4 hover:text-primary duration-200 hover:underline'
            >
              {data.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex justify-center items-center h-10'>
        <button
          onClick={toggleMenu}
          className='flex items-center gap-2 px-4 py-2 hover:text-primary duration-200'
        >
          {isMenuOpen ? <CiViewTable size={20} /> : <CiViewList size={20} />}
          <span>Menu</span>
        </button>
      </div>

      {isMenuOpen && (
        <div className='sm:hidden absolute top-full left-0 right-0 bg-theme2/95 dark:bg-theme1/95 z-50 shadow-lg'>
          <ul className='flex flex-col'>
            {menuItems.map((data) => (
              <li key={data.id}>
                <Link
                  href={data.link}
                  className='block px-4 py-3 hover:text-primary duration-200 hover:bg-theme2/20 dark:hover:bg-theme1/20 border-b border-theme2/20 dark:border-theme1/20'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
