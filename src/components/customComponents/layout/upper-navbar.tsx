'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ThemeToggle } from '../theme/theme-toggle';
import { FaUser, FaShoppingCart, FaHeart } from 'react-icons/fa';
import { Button } from '../../ui/button';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { SearchBar } from '@/components/ui/searchbar';
import { CartModal } from '../cart/cartModal';
import { useCartContext } from '../../../contexts/cartContext';
import Link from 'next/link';

function ClientOnly({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return <>{children}</>;
}

export default function UpperNavbar() {
  const { resolvedTheme } = useTheme();
  const { totalItems, toggleCart } = useCartContext();
  const logoSrc = resolvedTheme === 'dark' ? '/logo-dark.png' : '/logo.png';
  const navigation = useRouter();

  return (
    <div className='w-full bg-theme2/70 dark:bg-theme1/30'>
      {/* Mobile */}
      <div className='flex flex-col md:hidden w-full px-2 pt-2'>
        <div className='flex items-center justify-between w-full'>
          <Button className='p-2' variant='link'>
            <Link href='/login' className='flex items-center'>
              <FaUser size={24} />
            </Link>
          </Button>

          <div className='flex'>
            <ClientOnly>
              <Link href='/' className='flex items-center'>
                <Image
                  src={logoSrc}
                  alt='logo da empresa'
                  width={120}
                  height={80}
                  quality={100}
                  className='object-contain'
                  style={{ height: 'auto' }}
                  priority
                />
              </Link>
            </ClientOnly>
          </div>

          <div className='flex items-center gap-1'>
            <Button
              className='p-2'
              variant='link'
              onClick={() => navigation.push('/favorites')}
            >
              <FaHeart size={24} />
            </Button>

            <Button
              className='p-2 relative'
              variant='link'
              onClick={() => {
                navigation.push('/checkout');
              }}
            >
              <FaShoppingCart size={24} />
              {totalItems > 0 && (
                <span className='absolute -top-1 -right-1 bg-theme1 dark:bg-theme2 text-theme2 dark:text-theme1 text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                  {totalItems}
                </span>
              )}
            </Button>
            <ClientOnly>
              <ThemeToggle />
            </ClientOnly>
          </div>
        </div>

        <div className='w-full py-2'>
          <SearchBar />
        </div>
      </div>

      {/* Desktop */}
      <div className='hidden md:flex items-center justify-around w-full px-6 h-20'>
        <div className='flex-shrink-0 w-1/5'>
          <ClientOnly>
            <Link href='/' className='flex items-center'>
              <Image
                src={logoSrc}
                alt='logo da empresa'
                width={120}
                height={80}
                quality={100}
                priority
                className='object-contain'
                style={{ height: 'auto' }}
              />
            </Link>
          </ClientOnly>
        </div>

        <div className='flex-1 px-4 max-w-2xl'>
          <SearchBar />
        </div>

        <div className='flex-shrink-0 flex justify-end items-center gap-3'>
          <Button
            variant={'link'}
            className='flex items-center hover:no-underline hover:text-theme1/70 dark:hover:text-theme2'
            onClick={() => navigation.push('/login')}
          >
            <FaUser className='text-base' />
            <span className='hidden lg:inline'> Sign In </span>
          </Button>
          <Button
            variant={'link'}
            className='flex items-center hover:no-underline hover:text-theme1/70 dark:hover:text-theme2'
            onClick={() => navigation.push('/favorites')}
          >
            <FaHeart className='text-base' />
            <span className='hidden lg:inline'>Favorites</span>
          </Button>
          <div className='relative'>
            <Button
              variant={'link'}
              className='flex items-center hover:no-underline hover:text-black/50 dark:hover:text-theme2 relative'
              onClick={toggleCart}
            >
              <FaShoppingCart className='text-base' />
              <span className='hidden lg:inline'>Cart</span>
              {totalItems > 0 && (
                <span className='absolute -top-1 -right-1 bg-theme1 dark:bg-theme2 text-theme2 dark:text-theme1 text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                  {totalItems}
                </span>
              )}
            </Button>
            <CartModal />
          </div>
          <ClientOnly>
            <ThemeToggle />
          </ClientOnly>
        </div>
      </div>
    </div>
  );
}
