import { useCart } from '../contexts/CartContext';
import { motion } from 'framer-motion';
import { Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cart() {

const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();

if (cart.length === 0) {
    
return (

<div className="min-h-screen bg-slate-50 flex items-center justify-center">
<div className="text-center max-w-md px-4">
<div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">


<ShoppingBag className="w-12 h-12 text-slate-400" />
          
</div>

<h2 className="text-3xl font-bold text-slate-900 mb-4">Your cart is empty</h2>
          
<p className="text-slate-600 mb-8">
           
Looks like you haven't added any products to your cart yet.
          
</p>


<Link

to="/products"
className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-600 to-blue-800 text-white font-bold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all hover:shadow-lg hover:shadow-amber-500/25">

Start Shopping

<ArrowRight className="w-5 h-5" />

</Link>

</div>
</div>

);
}


return (

<div className="min-h-screen bg-slate-50">
 
{/* Header */}

<div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12">
<div className="max-w-7xl mx-auto px-4">

<h1 className="text-4xl font-bold mb-2">Shopping Cart</h1>

<p className="text-slate-300">Review your items before checkout</p>
        
</div>
</div>


<div className="max-w-7xl mx-auto px-4 py-12">
<div className="grid lg:grid-cols-3 gap-8">


{/* Cart Items */}

<div className="lg:col-span-2 space-y-4">
            
{cart.map((item) => (


<motion.div
 
key={item.id}
initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200"
              >
                <div className="flex gap-6">
                  <Link to={`/product/${item.id}`} className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-32 h-32 object-cover rounded-xl"
                    />
                  </Link>
                  <div className="flex-1">
                    <Link to={`/product/${item.id}`}>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2 hover:text-amber-600 transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-slate-600 mb-4 line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center"
                        >
                          <Minus className="w-5 h-5" />
                        </button>
                        <span className="w-12 text-center font-semibold text-lg">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center"
                        >
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-amber-600">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-slate-400 text-sm">
                      ${item.price.toFixed(2)} each
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span className="font-semibold">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Tax</span>
                  <span className="font-semibold">${(cartTotal * 0.08).toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-4 mb-6">
                <div className="flex justify-between text-xl font-bold text-slate-900">
                  <span>Total</span>
                  <span>${(cartTotal * 1.08).toFixed(2)}</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="block w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all hover:shadow-lg hover:shadow-amber-500/25 text-center mb-4"
              >
                Proceed to Checkout
              </Link>

              <Link
                to="/products"
                className="block w-full py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:border-amber-500 hover:text-amber-600 transition-all text-center"
              >
                Continue Shopping
              </Link>

              <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-green-800">
                    Your order qualifies for FREE shipping!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}