import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { categories } from '../data/products';
import { useState } from 'react';

export default function Header() {

const { cartCount } = useCart();
const [searchQuery, setSearchQuery] = useState('');
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const navigate = useNavigate();
const handleSearch = (e: React.FormEvent) => {
e.preventDefault();
const q = searchQuery.trim();
if (!q) return;

// Check if query matches a known category (case-insensitive)
const match = categories.find(c => c.name.toLowerCase() === q.toLowerCase());
if (match) {
const slug = match.name.toLowerCase().replace(/ & /g, '-&-').replace(/\s+/g, '-');
navigate(`/category/${slug}`);
window.scrollTo({ top: 0, behavior: 'auto' });
setSearchQuery('');
return;
}

// Fallback to products search
navigate(`/products?search=${encodeURIComponent(q)}`);
window.scrollTo({ top: 0, behavior: 'auto' });
setSearchQuery('');
};


return (


<header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white sticky top-0 z-50 shadow-2xl">
      
<div className="max-w-7xl mx-auto px-4 py-3">
<div className="flex items-center justify-between gap-4">


{/* Logo */}

<Link to="/" onClick={() => { window.scrollTo({ top: 0, behavior: 'auto' }); }} className="flex items-center gap-2 group">
  
<div className="bg-gradient-to-br from-green-500 to-amber-500 p-2 rounded-lg group-hover:scale-110 transition-transform">


<ShoppingCart className="w-5 h-5 text-slate-900" />
            
</div>


<span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent">

AmazonHub

</span>
          
          
</Link>


{/* Search Bar - Desktop */}

<form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl">

<div className="relative w-full">

<input
type="text"
value={searchQuery}
onChange={(e) => setSearchQuery(e.target.value)}
placeholder="Search products..."
className="w-full px-3 py-2.5 pl-13 rounded-l-lg bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-800"/>


<Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            
</div>


<button
type="submit"
className="px-7 py-2.5 bg-gradient-to-r from-amber-400 to-green-600 rounded-r-lg font-semibold hover:from-amber-800 hover:to-blue-600 transition-all hover:shadow-lg hover:shadow-amber-600/25">

Search

</button>


</form>


{/* Nav Icons */}

<nav className="flex items-center gap-4">


<Link

to="/account"
className="hidden sm:flex flex-col items-center gap-1 group hover:text-amber-400 transition-colors">

<User className="w-7 h-6 group-hover:scale-180 transition-transform" />

<span className="text-xs">SignUp</span>

</Link>


<Link

to="/cart"
className="flex flex-col items-center gap-0 group hover:text-amber-300 transition-colors relative">
 
<div className="relative">
                
<ShoppingCart className="w-9 h-7 group-hover:scale-120 transition-transform" />

{cartCount > 0 && (
                  
<span className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-800 to-blue-800 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
{cartCount}
</span>

)}

</div>

<span className="text-xs">Cart</span>
            
</Link>


{/* Mobile Menu Button */}

<button
onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors">

{mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            
</button>

</nav>

</div>


{/* Mobile Search */}

<form onSubmit={handleSearch} className="mt-3 md:hidden">
          
<div className="relative">
            
<input

type="text"
value={searchQuery}
onChange={(e) => setSearchQuery(e.target.value)}
placeholder="Search for products..."
className="w-full px-4 py-2 pl-10 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-400"/>


<Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />

</div>
 
</form>
      
</div>


{/* Mobile Menu */}
      
{mobileMenuOpen && (

<div className="md:hidden bg-slate-800 border-t border-white/10">
<div className="px-4 py-3 space-y-3">


<Link
to="/"
className="block py-2 px-3 rounded-lg hover:bg-white/10 transition-colors"
onClick={() => setMobileMenuOpen(false)}>
              
Home
            
</Link>


<Link
to="/products"
className="block py-2 px-3 rounded-lg hover:bg-white/10 transition-colors"
onClick={() => setMobileMenuOpen(false)}>

All Products

</Link>
         
         
<Link
to="/account"
className="block py-2 px-3 rounded-lg hover:bg-white/10 transition-colors"
onClick={() => setMobileMenuOpen(false)}>

Account
            
</Link>

</div>
</div>

)}
    
</header>

);
}