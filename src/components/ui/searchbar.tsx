import { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  buttonText?: string;
}

export function SearchBar({
  className,
  buttonText = 'Search',
  ...props
}: SearchBarProps) {
  return (
    <div className='flex w-full max-w-sm md:max-w-md overflow-hidden rounded-full bg-white shadow'>
      <input
        {...props}
        className={cn(
          'flex-1 px-3 md:px-4 py-2 text-xs md:text-sm text-gray-700 focus:outline-none',
          className,
        )}
        placeholder='Digite o que está buscando'
      />
      <button
        className='bg-theme1 m-1 text-white text-xs md:text-sm px-3 md:px-6 py-2 
      font-semibold rounded-full hover:bg-theme2 transition-colors cursor-pointer'
      >
        {buttonText}
      </button>
    </div>
  );
}
