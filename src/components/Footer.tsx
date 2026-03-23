import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  
return (
    
    
<footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      
<div className="max-w-7xl mx-auto px-4 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">


{/* Brand */}

<div>

<h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2">
              
AmazonHub

</h3>


<p className="text-slate-400 mb-8">
AmazonHub is a online store for Electronics, Fashion, Home & Kitchen, Sports, and Beauty — delivering quality, style, and a seamless shopping experience.
</p>
            
</div>


{/* Quick Links */}

<div>

<h4 className="font-semibold mb-3 text-amber-400">Quick Links</h4>


<ul className="space-y-2 text-slate-400">

<li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
<li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
<li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
<li><a href="/shipping" className="hover:text-white transition-colors">Shipping Info</a></li>

</ul>
          
</div>


{/* Categories */}

<div>
            
<h4 className="font-semibold mb-3 text-amber-500">Categories</h4>
            
<ul className="space-y-2 text-slate-400">

<li><a href="/category/electronics" className="hover:text-white transition-colors">Electronics</a></li>
<li><a href="/category/fashion" className="hover:text-white transition-colors">Fashion</a></li>
<li><a href="/category/home-&-kitchen" className="hover:text-white transition-colors">Home & Kitchen</a></li>
<li><a href="/category/sports-&-outdoors" className="hover:text-white transition-colors">Sports & Outdoors</a></li>
<li><a href="/category/beauty" className="hover:text-white transition-colors">Beauty</a></li>
            
</ul>
 
</div>


{/* Contact */}

<div>
 
<h4 className="font-semibold mb-4 text-amber-500">Contact Us</h4>
 
<ul className="space-y-3 text-slate-400">
 
<li className="flex items-center gap-3">


<Mail className="w-5 h-5 text-amber-400" />
                
<span>rajesh.kumar@techpearl.com</span>

</li>


<li className="flex items-center gap-3">

<Phone className="w-5 h-5 text-amber-400" />

<span>+917975044149</span>
              
</li>


<li className="flex items-center gap-3">
                
<MapPin className="w-6 h-6 text-amber-500" />

<span>Bengaluru</span>
              
</li>


</ul>
          
</div>



<div className="flex items-right gap-4">


<a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-blue-500 transition-colors">
<Facebook className="w-5 h-5" />
</a>


<a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-purple-500 transition-colors">
<Twitter className="w-5 h-5" />
</a>


<a href="https://www.instagram.com/18rajeshkumarg/" className="p-2 bg-white/10 rounded-lg hover:bg-pink-500 transition-colors">
<Instagram className="w-5 h-5" />
</a>


</div>
</div>


<div className="border-t border-white/10 mt-12 pt-8 text-center text-slate-400">


<p>
&copy; 2026
<a href="/" className="text-orange-500 hover:underline">
AmazonHub
</a>. 
All rights reserved.
</p>


</div>
</div>


</footer>
);
}