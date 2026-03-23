import type { Product } from '../types';

export const products: Product[] = [
  
  
  {
    id: '1',
    name: 'Wireless Noise-Canceling Headphones',
    description: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and crystal-clear audio quality.',
    price: 299.99,
    originalPrice: 349.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    category: 'Electronics',
    rating: 4.8,
    reviews: 12453,
    inStock: true,
    prime: true,
    features: ['Active Noise Cancellation', '30-hour battery', 'Bluetooth 5.0', 'Foldable design']
  },


  {
    id: '2',
    name: 'Smart Watch Series X',
    description: 'Advanced smartwatch with health monitoring, GPS, and seamless smartphone integration.',
    price: 399.99,
    originalPrice: 449.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    category: 'Electronics',
    rating: 4.7,
    reviews: 8934,
    inStock: true,
    prime: true,
    features: ['Heart rate monitor', 'GPS tracking', 'Water resistant', '7-day battery']
  },


  {
    id: '3',
    name: 'Professional Camera Kit',
    description: 'Complete photography kit with DSLR camera, lenses, and accessories for professional shots.',
    price: 1299.99,
    originalPrice: 1499.99,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500',
    category: 'Electronics',
    rating: 4.9,
    reviews: 5621,
    inStock: true,
    prime: true,
    features: ['24MP sensor', '4K video', 'Two lenses included', 'Carrying case']
  },


  {
    id: '4',
    name: 'Wireless Noise-Canceling Headphones',
    description: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and crystal-clear audio quality.',
    price: 299.99,
    originalPrice: 349.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    category: 'Electronics',
    rating: 4.8,
    reviews: 12453,
    inStock: true,
    prime: true,
    features: ['Active Noise Cancellation', '30-hour battery', 'Bluetooth 5.0', 'Foldable design']
  },

  {
    id: '5',
    name: 'Ergonomic Office Chair',
    description: 'Premium ergonomic chair with lumbar support, adjustable armrests, and breathable mesh back.',
    price: 449.99,
    originalPrice: 599.99,
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500',
    category: 'Home & Office',
    rating: 4.6,
    reviews: 7823,
    inStock: true,
    prime: false,
    features: ['Lumbar support', 'Adjustable height', '360° swivel', 'Mesh back']
  },


  {
    id: '6',
    name: 'Organic Coffee Beans - 2lb',
    description: 'Premium organic Arabica coffee beans, freshly roasted for the perfect morning brew.',
    price: 24.99,
    originalPrice: 29.99,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500',
    category: 'Groceries',
    rating: 4.8,
    reviews: 15678,
    inStock: true,
    prime: true,
    features: ['100% organic', 'Fair trade', 'Freshly roasted', '2lb bag']
  },


  {
    id: '7',
    name: 'Yoga Mat Premium',
    description: 'Extra thick, non-slip yoga mat with alignment lines for perfect practice sessions.',
    price: 59.99,
    originalPrice: 79.99,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500',
    category: 'Sports & Outdoors',
    rating: 4.7,
    reviews: 9234,
    inStock: true,
    prime: true,
    features: ['6mm thick', 'Non-slip surface', 'Alignment lines', 'Carrying strap']
  },


  {
    id: '8',
    name: 'Wireless Earbuds Pro',
    description: 'True wireless earbuds with premium sound, active noise cancellation, and 24-hour total battery.',
    price: 179.99,
    originalPrice: 199.99,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500',
    category: 'Electronics',
    rating: 4.6,
    reviews: 18723,
    inStock: true,
    prime: true,
    features: ['Active noise cancellation', '24h battery', 'Wireless charging', 'IPX5 water resistant']
  },


  {
    id: '9',
    name: 'Stainless Steel Water Bottle',
    description: 'Insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours.',
    price: 34.99,
    originalPrice: 44.99,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500',
    category: 'Home & Kitchen',
    rating: 4.9,
    reviews: 21345,
    inStock: true,
    prime: true,
    features: ['24h cold/12h hot', 'BPA-free', 'Leak-proof lid', '32oz capacity']
  },


  {
    id: '10',
    name: 'Running Shoes Elite',
    description: 'Lightweight running shoes with responsive cushioning and breathable mesh upper.',
    price: 129.99,
    originalPrice: 159.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    category: 'Sports & Outdoors',
    rating: 4.7,
    reviews: 14567,
    inStock: true,
    prime: true,
    features: ['Responsive cushioning', 'Breathable mesh', 'Lightweight', 'Durable sole']
  },


  {
    id: '11',
    name: 'Smart Home Speaker',
    description: 'Voice-controlled smart speaker with premium sound and built-in virtual assistant.',
    price: 99.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500',
    category: 'Electronics',
    rating: 4.5,
    reviews: 23456,
    inStock: true,
    prime: true,
    features: ['Voice control', 'Premium sound', 'Smart home hub', 'Multi-room audio']
  },


  {
    id: '12',
    name: 'Leather Laptop Bag',
    description: 'Genuine leather laptop bag with padded compartment and multiple organizer pockets.',
    price: 149.99,
    originalPrice: 199.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
    category: 'Fashion',
    rating: 4.8,
    reviews: 6789,
    inStock: true,
    prime: false,
    features: ['Genuine leather', 'Padded laptop sleeve', 'Multiple pockets', 'Adjustable strap']
  },


  {
    id: '13',
    name: 'Skincare Gift Set',
    description: 'Complete skincare set with cleanser, toner, serum, and moisturizer for radiant skin.',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500',
    category: 'Beauty',
    rating: 4.6,
    reviews: 8901,
    inStock: true,
    prime: true,
    features: ['Complete routine', 'Natural ingredients', 'Dermatologist tested', 'Gift packaging']
  },

  {
    id: '14',
    name: '4K Ultra HD Smart TV 55"',
    description: 'Crisp 4K resolution with HDR10, built-in apps, and voice remote for a seamless experience.',
    price: 599.99,
    originalPrice: 799.99,
    image: 'https://images.unsplash.com/photo-1583225272834-2c5a8c89890a?w=500',
    category: 'Electronics',
    rating: 4.5,
    reviews: 11234,
    inStock: true,
    prime: true,
    features: ['4K UHD', 'HDR10', 'Voice remote', 'Smart apps']
  },

  {
    id: '15',
    name: 'Bluetooth Soundbar with Subwoofer',
    description: 'Powerful 2.1 channel soundbar with wireless subwoofer for immersive audio.',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=500',
    category: 'Electronics',
    rating: 4.4,
    reviews: 5643,
    inStock: true,
    prime: true,
    features: ['Bluetooth 5.0', '2.1 channel', 'Wireless sub', 'Wall-mountable']
  },

  {
    id: '16',
    name: 'Air Fryer XL 6-Quart',
    description: 'Healthier frying with little to no oil, multiple presets, and large capacity.',
    price: 129.99,
    originalPrice: 159.99,
    image: 'https://images.unsplash.com/photo-1586208953361-7a4f6f8b3c1b?w=500',
    category: 'Home & Kitchen',
    rating: 4.7,
    reviews: 8231,
    inStock: true,
    prime: true,
    features: ['6-Quart', 'Non-stick basket', '8 presets', 'Dishwasher safe']
  },

  {
    id: '17',
    name: 'Stainless Steel Cookware Set (10-Piece)',
    description: 'Durable stainless steel set with aluminum core for even heating and long-lasting performance.',
    price: 219.99,
    originalPrice: 279.99,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500',
    category: 'Home & Kitchen',
    rating: 4.6,
    reviews: 6789,
    inStock: true,
    prime: false,
    features: ['10-piece set', 'Oven safe', 'Dishwasher safe', 'Tempered glass lids']
  },

  {
    id: '18',
    name: "Men's Performance T-Shirt",
    description: 'Lightweight moisture-wicking fabric for workouts and daily wear.',
    price: 24.99,
    originalPrice: 34.99,
    image: 'https://images.unsplash.com/photo-1520975922215-230c439f63f7?w=500',
    category: 'Fashion',
    rating: 4.5,
    reviews: 4123,
    inStock: true,
    prime: true,
    features: ['Moisture-wicking', 'Breathable', 'Quick-dry', 'Athletic fit']
  },

  {
    id: '19',
    name: "Women's Running Leggings",
    description: 'High-waisted, stretchable leggings with pockets for running and yoga.',
    price: 29.99,
    originalPrice: 39.99,
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=500',
    category: 'Fashion',
    rating: 4.6,
    reviews: 5321,
    inStock: true,
    prime: true,
    features: ['High-waisted', 'Four-way stretch', 'Pockets', 'Breathable']
  },

  {
    id: '20',
    name: 'Vitamin C Face Serum',
    description: 'Brightening serum with 20% Vitamin C to even skin tone and improve glow.',
    price: 21.99,
    originalPrice: 29.99,
    image: 'https://images.unsplash.com/photo-1556228453-efd1f06d6b47?w=500',
    category: 'Beauty',
    rating: 4.4,
    reviews: 3890,
    inStock: true,
    prime: true,
    features: ['20% Vitamin C', 'Hyaluronic Acid', 'Paraben-free', 'Cruelty-free']
  },

  {
    id: '21',
    name: 'Professional Hair Dryer',
    description: 'Ionic hair dryer with diffuser attachment for fast drying and frizz control.',
    price: 49.99,
    originalPrice: 69.99,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500',
    category: 'Beauty',
    rating: 4.5,
    reviews: 4750,
    inStock: true,
    prime: true,
    features: ['Ionic technology', '3 heat settings', 'Cool shot', 'Diffuser & concentrator']
  },

  {
    id: '22',
    name: '4-Person Camping Tent',
    description: 'Weather-resistant tent with easy setup and ample ventilation.',
    price: 129.99,
    originalPrice: 169.99,
    image: 'https://images.unsplash.com/photo-1504280390368-3971a02b7b68?w=500',
    category: 'Sports & Outdoors',
    rating: 4.6,
    reviews: 3850,
    inStock: true,
    prime: false,
    features: ['4-person', 'Water-resistant', 'Quick setup', 'Carry bag included']
  },

  {
    id: '23',
    name: 'Adjustable Dumbbell Set (Pair)',
    description: 'Space-saving adjustable dumbbells perfect for home workouts.',
    price: 249.99,
    originalPrice: 299.99,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500',
    category: 'Sports & Outdoors',
    rating: 4.7,
    reviews: 6123,
    inStock: true,
    prime: true,
    features: ['Adjustable weight', 'Compact', 'Anti-slip handle', 'Durable']
  },

  {
    id: '24',
    name: 'Organic Almonds 1lb',
    description: 'Premium grade organic whole almonds, rich in nutrients and flavor.',
    price: 12.99,
    originalPrice: 16.99,
    image: 'https://images.unsplash.com/photo-1505575972945-2804a4b159cc?w=500',
    category: 'Groceries',
    rating: 4.8,
    reviews: 2980,
    inStock: true,
    prime: true,
    features: ['USDA Organic', 'Non-GMO', 'Resealable bag', 'Rich in protein']
  },

  {
    id: '25',
    name: 'Whey Protein Powder 2lb',
    description: 'High-quality whey protein with 24g protein per serving, great taste and mixability.',
    price: 39.99,
    originalPrice: 49.99,
    image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=500',
    category: 'Groceries',
    rating: 4.5,
    reviews: 4520,
    inStock: true,
    prime: true,
    features: ['24g protein', 'Low sugar', 'Great taste', 'Mixes easily']
  }

];



export const categories = [
  { id: 'electronics', name: 'Electronics', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300', productCount: 1250 },
  { id: 'home', name: 'Home & Kitchen', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300', productCount: 890 },
  { id: 'fashion', name: 'Fashion', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=300', productCount: 2100 },
  { id: 'beauty', name: 'Beauty', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300', productCount: 650 },
  { id: 'sports', name: 'Sports & Outdoors', image: 'https://images.unsplash.com/photo-1461896836934- voices?w=300', productCount: 780 },
  { id: 'groceries', name: 'Groceries', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=300', productCount: 3200 }
];