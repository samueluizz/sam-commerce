import { InputHTMLAttributes, useState } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { TECH_CATEGORIES, TechCategory } from '@/lib/getProducts';

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  buttonText?: string;
}

export function SearchBar({
  className,
  buttonText = 'Buscar',
  ...props
}: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useRouter();

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      navigation.push('/search');
      return;
    }

    const normalizedTerm = searchTerm.toLowerCase().trim();
    if (TECH_CATEGORIES.includes(normalizedTerm as TechCategory)) {
      navigation.push(`/search?category=${normalizedTerm}`);
    } else {
      navigation.push(`/search?query=${encodeURIComponent(normalizedTerm)}`);
    }
  };

  return (
    <div className='flex w-full max-w-sm md:max-w-md overflow-hidden rounded-full bg-white shadow'>
      <input
        {...props}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        className={cn(
          'flex-1 px-3 md:px-4 py-2 text-xs md:text-sm text-gray-700 focus:outline-none',
          className,
        )}
        placeholder='Digite o que está buscando'
      />
      <button
        onClick={handleSearch}
        className='bg-theme1 m-1 text-white text-xs md:text-sm px-3 md:px-6 py-2 
      font-semibold rounded-full hover:bg-theme2 transition-colors cursor-pointer'
      >
        {buttonText}
      </button>
    </div>
  );
}
