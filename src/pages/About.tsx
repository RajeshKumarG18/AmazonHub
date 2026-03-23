import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const About = () => {
  const values = [
    { icon: <ShoppingBag />, title: "Our Mission", desc: "We offer a thoughtfully curated range of products spanning Electronics, Fashion, Home & Kitchen, Sports & Outdoors, Beauty, and Groceries." },
      ];

  const team = [
    {
      name: "Rajesh Kumar G",
      role: "Founder",
      image: "/images/team1.jpg",
      bio: "As the Founder, my vision has always been to build a platform where customers can discover quality, reliability, and convenience in one place. We carefully curate products across Electronics, Fashion, Home & Kitchen, Sports & Outdoors, Beauty, and Groceries to ensure that every item meets our standards of value and trust."
    },
    {
      name: "Meeth",
      role: "Co-Founder",
      image: "/images/team2.jpg",
      bio: "Our vision from the very beginning has been to create a brand that customers can trust. By thoughtfully curating products across multiple lifestyle categories, we aim to ensure that every purchase reflects quality, reliability, and value."
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="bg-emerald-950 text-white py-28">
        <div className="max-w-8xl mx-auto px-8 text-center">
          <div className="font-medium tracking-widest text-emerald-800 mb-9">About Us</div>
             </div>
      </div>

      {/* Story */}
      <div className="max-w-4xl mx-auto px-6 py-24 text-xl leading-relaxed text-gray-600">
        <div className="prose prose-lg">

We curate an exceptional selection of products across Electronics, Fashion, Home & Kitchen, Sports & Outdoors, Beauty, and Groceries, thoughtfully chosen to meet the highest standards of quality and reliability. Our mission is to deliver a seamless, trustworthy, and enjoyable shopping experience that consistently exceeds customer expectations.
          <br /><br />
We offer a thoughtfully curated range of products spanning Electronics, Fashion, Home & Kitchen, Sports & Outdoors, Beauty, and Groceries. By prioritizing quality, authenticity, and customer satisfaction, we aim to provide a smooth, dependable, and enjoyable shopping journey from discovery to delivery.        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity:0, y:30 }} 
                whileInView={{ opacity:1, y:0 }}
                className="bg-white p-10 rounded-3xl"
              >
                <div className="text-emerald-600 mb-8 text-5xl">{value.icon}</div>
                <h3 className="font-semibold text-4xl tracking-tight mb-5">{value.title}</h3>
                <p className="text-xl text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm tracking-[2px] font-medium text-emerald-600">OUR PEOPLE</div>
          <h2 className="text-6xl font-semibold tracking-tight mt-2">The Team</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="group">
              <div className="overflow-hidden rounded-3xl mb-6 aspect-[4/3.1] relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div>
                <div className="font-semibold text-3xl tracking-tight">{member.name}</div>
                <div className="text-emerald-600 mt-1">{member.role}</div>
                <p className="mt-6 text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;