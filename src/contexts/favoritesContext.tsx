'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { toast } from 'sonner';

export interface FavoriteItem {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface FavoritesContextType {
  favorites: FavoriteItem[];
  addToFavorites: (product: FavoriteItem) => void;
  removeFromFavorites: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
  toggleFavorite: (product: FavoriteItem) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  // Carregar do localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error('Erro ao carregar favoritos do localStorage:', error);
      }
    }
  }, []);

  // Salvar no localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
    window.dispatchEvent(new Event('favoritesUpdated'));
  }, [favorites]);

  const addToFavorites = (product: FavoriteItem) => {
    setFavorites((prevFavorites) => {
      toast.success('Produto adicionado aos favoritos!');

      return [...prevFavorites, { ...product }];
    });
  };

  const removeFromFavorites = (productId: number) => {
    setFavorites((prevFavorites) => {
      toast.error('Produto removido dos favoritos!');
      return prevFavorites.filter((item) => item.id !== productId);
    });
  };

  const isFavorite = (productId: number) => {
    return favorites.some((item) => item.id === productId);
  };

  const toggleFavorite = (product: FavoriteItem) => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavoritesContext() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}
