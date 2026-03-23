import type { Product } from '../types';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Zap, Heart, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import { useToast } from '../contexts/ToastContext';

interface ProductCardProps {
product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {

const { addToCart } = useCart();
const { toggleWishlist, isWishlisted } = useWishlist();
const { show } = useToast();
const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;


return (


<motion.div
      
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.3 }}
className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-slate-400">


<Link to={`/product/${product.id}`} className="block">

<div className="relative aspect-square overflow-hidden bg-slate-100">


<img
src={product.image}
alt={product.name}
className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>


{discount > 0 && (
            

<span className="absolute top-3 left-3 bg-gradient-to-r from-red-600 to-red-600 text-white text-sm font-bold px-3 py-1 rounded-full">

{discount} % Off
</span>

)}


{product.prime && (
            
<div className="absolute top-3 right-3 bg-gradient-to-r from-amber-600 to-green-600 text-slate-900 text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
<Zap className="w-3 h-4" />

PRIME

</div>
          
)}

{/* Wishlist toggle button */}
  <div className="absolute bottom-3 right-3 flex items-center gap-2">
    <button
      type="button"
      aria-label={isWishlisted(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleWishlist(product);
        show(isWishlisted(product.id) ? 'Removed from wishlist' : 'Added to wishlist', 'success');
      }}
      className={`inline-flex items-center justify-center w-10 h-10 rounded-full border transition-colors shadow-sm ${
        isWishlisted(product.id)
          ? 'bg-red-500 text-white border-red-600 hover:bg-red-600'
          : 'bg-white/90 text-red-500 border-red-300 hover:bg-red-50'
      }`}
    >
      <Heart className={`w-5 h-5 ${isWishlisted(product.id) ? 'fill-current' : ''}`} />
    </button>
    <button
      type="button"
      aria-label="Share product"
      onClick={async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const url = `${window.location.origin}/product/${product.id}`;
        try {
          if (navigator.share) {
            await navigator.share({ title: product.name, text: product.name, url });
            show('Share dialog opened', 'info');
          } else {
            await navigator.clipboard.writeText(url);
            show('Link copied to clipboard', 'success');
          }
        } catch (err) {
          show('Share failed', 'error');
        }
      }}
      className="inline-flex items-center justify-center w-10 h-10 rounded-full border bg-white/90 text-slate-700 border-slate-300 hover:bg-slate-50 shadow-sm"
    >
      <Share2 className="w-5 h-5" />
    </button>
  </div>
</div>


</Link>


<div className="p-4">
        
        
<Link to={`/product/${product.id}`}>
          
          
<h3 className="font-semibold text-slate-900 mb-2 line-clamp-2 hover:text-amber-600 transition-colors">
            
{product.name}
          
</h3>


</Link>

<div className="flex items-center gap-2 mb-2">
<div className="flex items-center gap-1">
{[...Array(5)].map((_, i) => (
              
<Star
key={i}
className={`w-4 h-4 ${
i < Math.floor(product.rating)
? 'fill-amber-400 text-amber-400': 'text-slate-300'
                
}`} />
            
))}


</div>
          
          
<span className="text-sm text-slate-600">({product.reviews.toLocaleString()})</span>

</div>


<div className="flex items-baseline gap-2 mb-3">


<span className="text-2xl font-bold text-slate-900">

${product.price.toFixed(2)}
      
</span>


{product.originalPrice && (
            
            
<span className="text-sm text-slate-400 line-through">
 
${product.originalPrice.toFixed(2)}
            
</span>

)}

</div>


<button
onClick={() => { addToCart(product); show('Added to cart', 'success'); }}
disabled={!product.inStock}
className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-red-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all hover:shadow-lg hover:shadow-amber-500/25 disabled:from-slate-400 disabled:to-slate-500 disabled:cursor-not-allowed flex items-center justify-center gap-2 group-hover:scale-[1.02] active:scale-[0.98]">


<ShoppingCart className="w-5 h-5" />
{product.inStock ? 'Add to Cart' : 'Out of Stock'}
  
</button>

</div>
    
</motion.div>

);
}