export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  prime: boolean;
  features?: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  uid: string;
  email: string;
  displayName?: string;
}

export interface UserProfile {
  displayName: string;
  email: string;
  phone?: string;
  dob?: string; // ISO string YYYY-MM-DD
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
  };
  avatarUrl?: string;
}

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: string;
  createdAt: number; // timestamp ms
  items: OrderItem[];
  total: number;
  status: 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
}

export interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
}