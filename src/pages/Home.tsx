import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Shield, Truck, Headphones } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const featuredProducts = products.slice(0, 32);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,rgba(251,191,36,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(247, 108, 9, 0.1),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-30">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >


<h1 className="text-6xl md:text-6xl font-bold text-white mb-7 leading-tight">
Discover Your Next Exceptional Find

<span className="block bg-gradient-to-r from-amber-500 to-orange-700 bg-clip-text text-transparent">
Elite Selection
</span>

</h1>


<p className="text-xl text-slate-300 mb-8 leading-relaxed">
Discover thousands of meticulously curated products, delivered with speed and precision.
At AmazonHub, exceptional service isn’t an option — it’s our standard. Your satisfaction defines us.
</p>


              <div className="flex flex-wrap gap-4">
                <Link
                  to="/products"
                  onClick={() => { window.scrollTo({ top: 0, behavior: 'auto' }); }}
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all hover:shadow-lg hover:shadow-amber-500/25 flex items-center gap-2 group">
                  Shop Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform"/>
                </Link>


                <Link
                  to="/products"
                  onClick={() => { window.scrollTo({ top: 0, behavior: 'auto' }); }}
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/30 transition-all border border-white/10"
                >
                  View Deals
                </Link>


              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 grid grid-cols-2 gap-4">
                {products.slice(0, 6).map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all cursor-pointer group"
                  >
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full aspect-square object-cover rounded-xl mb-3 group-hover:scale-105 transition-transform"
                      />
                      <h3 className="text-white font-semibold text-sm line-clamp-2">{product.name}</h3>
                      <p className="text-amber-400 font-bold mt-1">${product.price.toFixed(2)}</p>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-slate-80">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {
            
            [
              { icon: Truck, title: 'Free Shipping', desc: 'On orders over Rs.250' },
              { icon: Shield, title: 'Secure Payment', desc: '100% secure checkout' },
              { icon: Headphones, title: '24/7 Support', desc: 'Dedicated support team' },
              { icon: TrendingUp, title: 'Best Prices', desc: 'Price match guarantee' }
            ]
            
            .map((feature, index) => (
            
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Shop by Category</h2>
            <p className="text-slate-800 text-lg">Browse our wide selection of categories</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square"
              >
                <Link to={`/category/${category.name.toLowerCase().replace(/ & /g, '-&-').replace(/\s+/g, '-')}`} onClick={() => { window.scrollTo({ top: 0, behavior: 'auto' }); }} className="block w-full h-full">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg">{category.name}</h3>
                    <p className="text-white/70 text-sm">{category.productCount} products</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-center mb-12"
          >
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Products</h2>
              <p className="text-slate-600">Handpicked products just for you</p>
            </div>
            <Link
              to="/products"
              onClick={() => { window.scrollTo({ top: 0, behavior: 'auto' }); }}
              className="hidden md:flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
            >
              View All
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              onClick={() => { window.scrollTo({ top: 0, behavior: 'auto' }); }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all hover:shadow-lg hover:shadow-amber-500/25 md:hidden"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-yellow-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            
            
<h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
Ready to Start Shopping?
</h2>

<p className="text-xl text-slate-300 mb-10">
Join millions who choose excellence and explore curated offers designed for you.
</p>
            
            
            <Link
              to="/products"
              onClick={() => { window.scrollTo({ top: 0, behavior: 'auto' }); }}
              className="inline-flex 
              items-center 
              gap-2 
              px-8
              py-4 
              bg-gradient-to-r 
              from-amber-600 
              to-red-600 
              text-white 
              font-bold 
              rounded-xl 
              hover:from-red-600 
              hover:to-orange-600 
              transition-all 
              hover:shadow-lg 
              hover:shadow-amber-500/25"
            >
              
Explore Our Products
              
<ArrowRight className="w-6 h-5" />
            </Link>
          
</motion.div>
        
        
</div>
</section>
</div>
);
}