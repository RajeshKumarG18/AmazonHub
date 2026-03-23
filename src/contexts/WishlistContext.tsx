import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Product } from '../types';

interface WishlistContextValue {
  items: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: string) => void;
  toggleWishlist: (product: Product) => void;
  isWishlisted: (id: string) => boolean;
}

const WishlistContext = createContext<WishlistContextValue | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Product[]>(() => {
    try {
      const raw = localStorage.getItem('wishlist');
      return raw ? (JSON.parse(raw) as Product[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('wishlist', JSON.stringify(items));
    } catch {}
  }, [items]);

  const addToWishlist = (product: Product) => {
    setItems((prev) => (prev.find((p) => p.id === product.id) ? prev : [...prev, product]));
  };

  const removeFromWishlist = (id: string) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  const toggleWishlist = (product: Product) => {
    setItems((prev) => (prev.find((p) => p.id === product.id) ? prev.filter((p) => p.id !== product.id) : [...prev, product]));
  };

  const isWishlisted = (id: string) => items.some((p) => p.id === id);

  const value = useMemo(
    () => ({ items, addToWishlist, removeFromWishlist, toggleWishlist, isWishlisted }),
    [items]
  );

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error('useWishlist must be used within a WishlistProvider');
  return ctx;
}
