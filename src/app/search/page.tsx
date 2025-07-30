'use client';

import { Suspense } from 'react';
import SearchContent from './searchContent';

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className='text-center py-8'>
          Carregando resultados de busca...
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
