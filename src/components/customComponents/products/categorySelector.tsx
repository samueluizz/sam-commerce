'use client';

import { Button } from '@/components/ui/button';
import { TECH_CATEGORIES, type SelectableCategory } from '@/lib/getProducts';

interface CategorySelectorProps {
  selectedCategory: SelectableCategory;
  onSelect: (category: SelectableCategory | 'all') => void;
}

export function CategorySelector({
  selectedCategory,
  onSelect,
}: CategorySelectorProps) {
  return (
    <div className='flex gap-3 flex-wrap'>
      <Button
        key='all'
        variant='secondary'
        onClick={() => onSelect('all')}
        className={`px-6 py-1.5 rounded-full border text-base font-medium transition-colors ${
          selectedCategory === 'all'
            ? 'border-2 border-theme1 dark:border-theme2 text-theme1 dark:text-theme2 bg-theme2/50 dark:bg-theme1/50'
            : 'font-light border-theme1/30 dark:border-theme2/30 text-theme1 dark:text-theme2 bg-theme2/20 dark:bg-theme1/20 hover:bg-theme2/50 dark:hover:bg-theme1/50'
        }`}
        style={{ minWidth: 110 }}
      >
        Todos
      </Button>
      {TECH_CATEGORIES.map((category) => (
        <Button
          key={category}
          variant='secondary'
          onClick={() => onSelect(category)}
          className={`px-6 py-1.5 rounded-full border text-base font-medium transition-colors ${
            selectedCategory === category
              ? 'border-2 border-theme1 dark:border-theme2 text-theme1 dark:text-theme2 bg-theme2/50 dark:bg-theme1/50'
              : 'font-light border-theme1/30 dark:border-theme2/30 text-theme1 dark:text-theme2 bg-theme2/20 dark:bg-theme1/20 hover:bg-theme2/50 dark:hover:bg-theme1/50'
          }`}
          style={{ minWidth: 110 }}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Button>
      ))}
    </div>
  );
}
