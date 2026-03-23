import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function CategoryPage() {
  const { slug } = useParams();
  const categoryName = useMemo(() => (slug || '').replace(/-/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase()), [slug]);
  const list = useMemo(() => products.filter(p => p.category.toLowerCase() === categoryName.toLowerCase()), [categoryName]);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">{categoryName}</h1>
          <p className="text-slate-300 mt-2">{list.length} products</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {list.length === 0 ? (
          <div className="text-center text-slate-600">No products found in this category.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {list.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
        <div className="text-center mt-8">
          <Link to="/products" className="text-amber-600 hover:text-amber-700 font-semibold">Back to Products</Link>
        </div>
      </div>
    </div>
  );
}
