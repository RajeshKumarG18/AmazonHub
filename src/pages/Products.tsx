import { useState, useMemo } from 'react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Filter, Search, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';

export default function Products() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    const q = searchQuery.trim().toLowerCase();

    // If searching a known category by name (exact match ignoring case), prefer category match
    const categoryNames = categories.map(c => c.name.toLowerCase());
    const isCategoryQuery = q && categoryNames.includes(q);

    if (q) {
      if (isCategoryQuery) {
        // exact category match
        result = result.filter((p) => p.category.toLowerCase() === q);
      } else {
        // general text search across name, description, and also partial category contains
        result = result.filter(
          (product) =>
            product.name.toLowerCase().includes(q) ||
            product.description.toLowerCase().includes(q) ||
            product.category.toLowerCase().includes(q)
        );
      }
    }

    // Additional category filter from sidebar selection
    if (selectedCategory !== 'all') {
      result = result.filter((product) =>
        product.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    // Filter by price
    result = result.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">All Products</h1>
          {searchQuery ? (
            <p className="text-slate-300">
              Search results for "{searchQuery}" ({filteredProducts.length} products)
            </p>
          ) : (
            <p className="text-slate-300">Discover our amazing collection</p>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5 text-amber-500" />
                  Filters
                </h2>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden p-2 hover:bg-slate-100 rounded-lg"
                >
                  <Filter className="w-5 h-5" />
                </button>
              </div>

              <AnimatePresence>
                {(showFilters || !showFilters) && (
                  <motion.div
                    initial={showFilters ? { height: 0, opacity: 0 } : { height: 'auto', opacity: 1 }}
                    animate={showFilters ? { height: 'auto', opacity: 1 } : { height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="space-y-6 overflow-hidden"
                  >
                    {/* Categories */}
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-3">Categories</h3>
                      <div className="space-y-2">
                        <button
                          onClick={() => setSelectedCategory('all')}
                          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                            selectedCategory === 'all'
                              ? 'bg-amber-500 text-white'
                              : 'hover:bg-slate-100 text-slate-700'
                          }`}
                        >
                          All Categories
                        </button>
                        {categories.map((category) => (
                          <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.name)}
                            className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                              selectedCategory === category.name
                                ? 'bg-amber-500 text-white'
                                : 'hover:bg-slate-100 text-slate-700'
                            }`}
                          >
                            {category.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Price Range */}
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-3">Price Range</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-slate-600">$0</span>
                          <input
                            type="range"
                            min="0"
                            max="2000"
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                            className="flex-1 accent-amber-500"
                          />
                          <span className="text-sm text-slate-600">${priceRange[1]}</span>
                        </div>
                      </div>
                    </div>

                    {/* Sort */}
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-3">Sort By</h3>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <option value="featured">Featured</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Highest Rated</option>
                      </select>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <Search className="w-16 h-16 mx-auto text-slate-300 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">No products found</h3>
                <p className="text-slate-600">Try adjusting your filters or search terms</p>
              </div>
            ) : (
              <>
                <p className="text-slate-600 mb-6">Showing {filteredProducts.length} products</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}