import React from 'react';
import { Truck, Package, Zap, ShieldCheck, Clock } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-3">Shipping Information</h1>
          <p className="text-slate-400 text-lg">Learn about our shipping options, timelines, and policies.</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto -mt-12 px-6 pb-20">
        <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-8 md:p-10">
          
          {/* Main Info */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-slate-800">Delivery Overview</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We offer free standard shipping on orders over <strong>Rs.250</strong>. 
              Expedited and overnight shipping options are available at checkout for a nominal fee based on your location and package weight.
            </p>
          </div>

          {/* Shipping Options */}
          <div className="grid gap-4">
            <ShippingOption 
              icon={<Package className="text-blue-600" />}
              title="Standard Shipping"
              time="3-7 business days"
              description="Reliable delivery for non-urgent items."
            />
            <ShippingOption 
              icon={<Truck className="text-indigo-600" />}
              title="Expedited Shipping"
              time="2-3 business days"
              description="Faster handling for when you need it sooner."
            />
            <ShippingOption 
              icon={<Zap className="text-amber-600" />}
              title="Overnight Shipping"
              time="1 business day"
              description="Our fastest option for immediate delivery."
            />
          </div>
        </div>

        {/* Policy Highlights */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-slate-200 flex items-start gap-4 shadow-sm">
            <ShieldCheck className="text-emerald-600 w-8 h-8 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-slate-800">Secure Packaging</h3>
              <p className="text-sm text-slate-500 mt-1">All orders are packed with care to ensure safe arrival.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-slate-200 flex items-start gap-4 shadow-sm">
            <Clock className="text-rose-600 w-8 h-8 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-slate-800">Order Processing</h3>
              <p className="text-sm text-slate-500 mt-1">Orders are typically processed within 24 hours.</p>
            </div>
          </div>
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-white border border-slate-200 shadow-md px-7 py-4 transition-all duration-300 hover:shadow-lg hover:border-green-300">
            {/* WhatsApp Icon */}
            <svg
              className="h-6 w-6 text-green-500 flex-shrink-0"
              viewBox="0 0 32 32"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.001 2C8.268 2 2 8.268 2 16.001c0 2.476.661 4.797 1.812 6.8L2 30l7.385-1.783A13.927 13.927 0 0016.001 30C23.732 30 30 23.732 30 16.001 30 8.268 23.732 2 16.001 2zm0 25.452a11.9 11.9 0 01-6.07-1.661l-.435-.258-4.383 1.058 1.097-4.26-.283-.45A11.906 11.906 0 014.1 16.001c0-6.562 5.339-11.9 11.901-11.9 6.561 0 11.9 5.338 11.9 11.9 0 6.561-5.339 11.451-11.9 11.451zm6.52-8.92c-.357-.179-2.112-1.042-2.44-1.161-.327-.12-.565-.179-.803.179-.238.357-.921 1.161-1.129 1.399-.208.238-.416.268-.773.089-.357-.179-1.508-.556-2.872-1.772-1.061-.946-1.778-2.114-1.986-2.471-.208-.357-.022-.55.157-.728.161-.161.357-.417.536-.626.179-.208.238-.357.357-.595.12-.238.06-.447-.03-.626-.089-.179-.803-1.937-1.1-2.652-.289-.696-.583-.601-.803-.612l-.684-.012c-.238 0-.625.089-.952.447-.327.357-1.249 1.221-1.249 2.978 0 1.757 1.279 3.455 1.458 3.693.179.238 2.517 3.843 6.099 5.39.853.368 1.519.588 2.038.753.856.272 1.635.234 2.25.142.686-.102 2.112-.863 2.41-1.697.298-.833.298-1.547.208-1.697-.089-.149-.327-.238-.684-.417z"/>
            </svg>
            <span className="text-slate-600 text-base">
              Still have questions?{' '}
              <a
                href="https://wa.me/917975044149?text=Hey%20Hello%2C%20need%20a%20Help!!"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-green-600 hover:text-green-700 hover:underline transition-colors duration-200"
              >
                Contact our support team
              </a>
            </span>
          </div>
          <p className="mt-3 text-sm text-slate-400">Typically replies within a few minutes on WhatsApp</p>
        </div>
        
      </main>
    </div>
  );
}

function ShippingOption({ icon, title, time, description }: { icon: React.ReactNode, title: string, time: string, description: string }) {
  return (
    <div className="flex items-center p-4 border border-slate-100 rounded-lg hover:border-blue-100 hover:bg-blue-50/50 transition-all duration-200">
      <div className="mr-4 bg-slate-100 p-3 rounded-full">{icon}</div>
      <div className="flex-grow">
        <h3 className="font-semibold text-slate-800">{title}</h3>
        <p className="text-sm text-slate-500">{description}</p>
      </div>
      <div className="font-medium text-slate-700 bg-slate-100 px-3 py-1 rounded-full text-sm">
        {time}
      </div>
    </div>
  );
}