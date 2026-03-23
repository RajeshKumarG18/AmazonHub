import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || 'Failed to send message');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset form after 4s
      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-12 pb-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-20">
        {/* Left Info */}
        <div className="md:col-span-2 pt-8">
          <div className="sticky top-24">
            <div className="text-emerald-600 tracking-[1px] text-xs font-medium mb-3">Bangalore</div>
            <h1 className="text-[72px] leading-none font-semibold tracking-tighter mb-8">AmazonHub</h1>
            
            <div className="space-y-9 text-xl">
              <div className="flex gap-5">
                <Mail className="w-6 h-6 mt-1 text-emerald-600" />
                <a href="mailto:hello@bloomora.co" className="hover:underline">rajesh.kumar@techpearl.com</a>
              </div>
              <div className="flex gap-5">
                <Phone className="w-6 h-6 mt-1 text-emerald-600" />
                <a href="tel:+18005551234" className="hover:underline">7975044149</a>
              </div>
              <div className="flex gap-5">
                <MapPin className="w-6 h-6 mt-1 text-emerald-600" />
                <div>Bangalore<br />AmazonHub</div>
              </div>
            </div>
            
            <div className="mt-14 text-sm max-w-xs text-gray-500">
              Our studio is open for private consultations by appointment only.
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-3">
          {submitted ? (
            <div className="h-[560px] flex flex-col items-center justify-center text-center">
              <div className="text-7xl mb-8">🌸</div>
              <div className="text-4xl font-medium tracking-tight">Thank you for your Response.</div>
              <p className="mt-5 text-2xl text-gray-600">We’ve received your message and will reply within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-sm mb-2 text-black-500">YOUR NAME</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="w-full border-b pb-4 text-3xl placeholder:text-gray-300 focus:outline-none" 
                  placeholder="User Name" 
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-black-500">EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="w-full border-b pb-4 text-3xl placeholder:text-gray-300 focus:outline-none" 
                  placeholder="you@email.com" 
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-black-600">SUBJECT</label>
                <select 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border-b pb-4 text-3xl bg-transparent focus:outline-none"
                >
                  <option value="">Select an option</option>
                  <option value="Order Inquiry">Order Inquiry</option>
                  <option value="Partnership">Partnership Opportunity</option>
                  <option value="Hiring">Hiring &amp; Process</option>
                  <option value="General">General Question</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-2 text-black-500">MESSAGE</label>
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={7}
                  className="w-full border-b pb-4 text-xl resize-y min-h-[180px] placeholder:text-gray-400 focus:outline-none" 
                  placeholder="Hi, I would love to know more about...">
                </textarea>
              </div>

              {error && <div className="text-red-500 text-sm">{error}</div>}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="mt-4 px-16 py-5 bg-emerald-600 hover:bg-green text-white text-xl rounded-2xl disabled:opacity-70 transition flex items-center gap-4"
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;