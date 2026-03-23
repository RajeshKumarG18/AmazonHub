import { useCart } from '../contexts/CartContext';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';


interface CartModalProps {
isOpen: boolean;
onClose: () => void;
}


export default function CartModal({ isOpen, onClose }: CartModalProps) {

const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();

return (


<AnimatePresence>

{isOpen && (

<>


{/* Backdrop */}

<motion.div

initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
onClick={onClose}
className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"/>


{/* Modal */}

<motion.div

initial={{ x: '100%' }}
animate={{ x: 0 }}
exit={{ x: '100%' }}
transition={{ type: 'spring', damping: 30, stiffness: 300 }}
className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">


{/* Header */}

<div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">


<ShoppingBag className="w-6 h-6 text-amber-400" />

<h2 className="text-xl font-bold">Shopping Cart</h2>


<span className="bg-amber-500 text-slate-900 text-sm font-bold px-2 py-0.5 rounded-full">
{cart.length}
</span>

</div>


<button
onClick={onClose}
className="p-2 hover:bg-white/10 rounded-lg transition-colors">

<X className="w-6 h-6" />

</button>

</div>


{/* Cart Items */}

<div className="flex-1 overflow-y-auto p-4">

{cart.length === 0 ? (

<div className="flex flex-col items-center justify-center h-full text-slate-400">


<ShoppingBag className="w-16 h-16 mb-4" />
                  
<p className="text-lg">Your cart is empty</p>
<p className="text-sm">Add some products to get started</p>

</div>


) : (
                
<div className="space-y-4">
{cart.map((item) => (
                    
                    
<motion.div

key={item.id}
layout
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">


<img
src={item.image}
alt={item.name}
className="w-24 h-24 object-cover rounded-lg"/>


<div className="flex-1">

<h3 className="font-semibold text-slate-900 mb-1 line-clamp-2">

{item.name}
                        
</h3>

<p className="text-lg font-bold text-amber-600 mb-2">

${item.price.toFixed(2)}

</p>

              
<div className="flex items-center gap-2">
                          
                          
<button
onClick={() => updateQuantity(item.id, item.quantity - 1)}
className="w-8 h-8 rounded-lg bg-slate-200 hover:bg-slate-300 transition-colors flex items-center justify-center">


<Minus className="w-4 h-4" />

</button>


<span className="w-12 text-center font-semibold">

{item.quantity}

</span>


<button
onClick={() => updateQuantity(item.id, item.quantity + 1)}
className="w-8 h-8 rounded-lg bg-slate-200 hover:bg-slate-300 transition-colors flex items-center justify-center">


<Plus className="w-4 h-4" />

</button>


<button
onClick={() => removeFromCart(item.id)}
className="ml-auto p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">


<Trash2 className="w-5 h-5" />

</button>

</div>

</div>


</motion.div>

))}

</div>

)}

</div>


{/* Footer */}

{cart.length > 0 && (
              
<div className="border-t border-slate-200 p-6 bg-slate-50">
<div className="flex justify-between items-center mb-4">


<span className="text-lg text-slate-600">Subtotal</span>
<span className="text-2xl font-bold text-slate-900">

${cartTotal.toFixed(2)}

</span>
 
</div>


<Link
to="/checkout"
onClick={onClose}
className="block w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all hover:shadow-lg hover:shadow-amber-500/25 text-center">

Proceed to Checkout
                
</Link>


<p className="text-center text-sm text-slate-500 mt-3">

Shipping and taxes calculated at checkout
                
</p>
           
</div>

)}

          
</motion.div>
        
</>
      
)}


</AnimatePresence>

);
}