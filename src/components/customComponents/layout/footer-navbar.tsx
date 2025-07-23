'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaGoogle, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const footerLinks = [
  {
    title: 'Find product',
    links: [
      'Brownze arnold',
      'Chronograph blue',
      'Smart phones',
      'Automatic watch',
      'Hair straighteners',
    ],
  },
  {
    title: 'Get help',
    links: [
      'About us',
      'Contact us',
      'Return policy',
      'Privacy policy',
      'Payment policy',
    ],
  },
  {
    title: 'About us',
    links: ['News', 'Service', 'Our policy', 'Custmer care', "Faq's"],
  },
];

export default function FooterNavbar() {
  const { resolvedTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const logoSrc = resolvedTheme === 'dark' ? '/logo-dark.png' : '/logo.png';

  return (
    <nav className='flex flex-wrap justify-around items-center w-full p-4'>
      <div className='flex flex-col w-full max-w-[500px] justify-center items-center gap-y-4'>
        <Image alt='logo da empresa' src={logoSrc} width={300} height={300} />
        <span>Rua Front End - Parque Dev </span>
        <span>São Paulo - SP</span>

        <div className='flex justify-center gap-10 pt-4 border-t-2 border-black/70 dark:border-gray-400 w-100 max-w-full '>
          <FaGoogle size={30} />
          <FaFacebook size={30} />
          <FaWhatsapp size={30} />
        </div>
      </div>

      {footerLinks.map((section, idx) => (
        <div
          key={idx}
          className='hidden lg:flex flex-col items-baseline min-w-[150px] gap-y-4 text-center'
        >
          <h3 className='font-bold mb-1 text-lg text-theme1 dark:text-theme2'>
            {section.title}
          </h3>
          <ul className='space-y-1 text-sm'>
            {section.links.map((link, linkIdx) => (
              <li
                key={linkIdx}
                className='cursor-pointer flex items-start gap-3'
              >
                <span className=' text-theme1 dark:text-theme2'>•</span>
                <a href='#' className='hover:underline'>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
