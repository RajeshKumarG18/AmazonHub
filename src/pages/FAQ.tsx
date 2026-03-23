import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How long does shipping take?",
    answer: "Shipping typically takes 3-7 business days depending on your location. Express delivery options are also available at checkout for 1-2 business day delivery.",
  },
  {
    id: 2,
    question: "What is your return policy?",
    answer: "You can return items within 30 days of delivery in original condition. Items must be unused, unwashed, and in their original packaging with all tags attached. Refunds are processed within 5-7 business days of receiving the returned item.",
  },
  {
    id: 3,
    question: "How can I track my order?",
    answer: "You will receive a tracking link via email once your order ships. You can also log in to your account and visit the 'My Orders' section to view real-time tracking updates.",
  },
  {
    id: 4,
    question: "What payment methods do you accept?",
    answer: "We accept all major credit and debit cards (Visa, MasterCard, American Express), PayPal, UPI, Net Banking, and popular digital wallets. All transactions are secured with SSL encryption for your safety.",
  },
  {
    id: 5,
    question: "Can I modify or cancel my order after placing it?",
    answer: "You can modify or cancel your order within 24 hours of placing it, provided it hasn't been shipped yet. Please contact our support team immediately through WhatsApp or email. Once an order is dispatched, it cannot be cancelled.",
  },
  {
    id: 6,
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to over 50 countries worldwide. International shipping typically takes 7-14 business days. Customs duties and import taxes may apply depending on your country's regulations and are the responsibility of the customer.",
  },
  {
    id: 7,
    question: "How do I contact customer support?",
    answer: "Our customer support team is available Monday to Saturday, 9 AM – 6 PM. You can reach us via WhatsApp, email, or the live chat option on our website. We aim to respond to all queries within 2 business hours.",
  },
];

export default function App() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      {/* Header Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl"></div>
        </div>
        
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
          <div className="text-center sm:text-left">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
              FAQ
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Frequently asked questions
            </p>
          </div>
        </div>
        
        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="url(#gradient)" fillOpacity="0.1"/>
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="1440" y2="120" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3B82F6"/>
                <stop offset="1" stopColor="#8B5CF6"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </header>

      {/* FAQ Content Section */}
      <main className="relative mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-200/50 transition-all duration-300 hover:shadow-xl hover:shadow-slate-300/50"
            >
              {/* Subtle gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              
              <button
                onClick={() => toggleFAQ(index)}
                className="relative w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                      {faq.question}
                    </h3>
                    <div
                      className={`mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
                        openIndex === index
                          ? 'max-h-40 opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                  
                  {/* Expand/Collapse Icon */}
                  <div className="flex-shrink-0">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover:bg-blue-50 ${
                        openIndex === index ? 'bg-blue-100' : ''
                      }`}
                    >
                      <svg
                        className={`h-5 w-5 text-slate-500 transition-transform duration-300 ${
                          openIndex === index ? 'rotate-180 text-blue-600' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
              
              {/* Bottom accent line */}
              <div
                className={`h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 transition-all duration-300 ${
                  openIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              ></div>
            </div>
          ))}
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