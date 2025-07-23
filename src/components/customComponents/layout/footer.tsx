'use client';

import { Button } from '@/components/ui/button';
import { LuSend, LuHeadphones } from 'react-icons/lu';
import FooterNavbar from './footer-navbar';

export default function Footer() {
  return (
    <footer
      id='footer'
      className='relative  w-full h-auto sm:h-[511px] mt-4 p-4 bg-theme2/70 dark:bg-theme1/30 text-center'
    >
      <div className='flex flex-col justify-around items-center w-full'>
        <div
          className='flex flex-col md:flex-row flex-wrap justify-around items-center w-full max-w-full h-auto md:h-[155px]
            gap-y-6 md:gap-y-0 md:gap-x-8 px-4 py-6 text-theme1 dark:text-theme2
            bg-theme2/30 dark:bg-theme1/20 rounded-3xl '
        >
          <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-center md:text-left" '>
            Receba novidades no e-mail
          </h1>

          <Button
            variant={'secondary'}
            className='w-full sm:w-[320px] md:w-[388px] h-[45px] sm:h-[55px] bg-theme2 dark:bg-theme1 rounded-3xl 
    text-theme1 dark:text-theme2 text-md sm:text-lg justify-between px-4 hover:scale-105 
    border border-theme1 dark:border-theme2'
          >
            E-mail
            <LuSend size={40} />
          </Button>
          <div className='flex items-center gap-2 text-sm sm:text-base'>
            <LuHeadphones size={40} />
            <div className='flex flex-col text-black dark:text-white '>
              <span>Atendimento 24h: </span>
              <span>(+55) 4321-1234 </span>
            </div>
          </div>
        </div>

        <FooterNavbar />
      </div>
    </footer>
  );
}
