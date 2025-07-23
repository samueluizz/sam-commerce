import React from 'react';
import { Button } from '../../ui/button';

export default function NotebookBanner() {
  return (
    <div
      className='px-4 hidden sm:flex items-center justify-end h-[418px] bg-[url(/notebook-2.jpg)] bg-no-repeat bg-cover bg-center 
      rounded-2xl overflow-hidden mb-8 mx-2'
    >
      <div className='flex flex-col items-center gap-5'>
        <Button
          variant={'secondary'}
          className='rounded-full w-[134px] h-[45px] bg-theme2 dark:bg-theme1 hover:bg-theme1 hover:scale-120'
        >
          Notebook novo
        </Button>
        <h1 className='text-xl lg:text-3xl  font-bold text-[#2E8FC5] dark:text-theme2'>
          Saldão com até 50% de desconto
        </h1>
        <span className='font-thin text-white'>
          monitor de 12 polegadas 4k HD
        </span>
        <Button
          variant={'secondary'}
          className='rounded-full w-[134px] h-[45px] bg-theme2 dark:bg-theme1 hover:bg-theme1 hover:scale-120'
        >
          Compre agora
        </Button>
      </div>
    </div>
  );
}
