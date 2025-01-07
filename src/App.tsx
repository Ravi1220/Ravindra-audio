import React, { useState } from 'react';
import { ShoppingCart, Star, Facebook, Instagram, Twitter, Mail, Headphones } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-gray-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Headphones className="text-orange-500" size={24} />
            <span className="text-xl font-bold">Ravindra Audio</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ravindra Pro Wireless
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Experience the fusion of traditional acoustics and modern technology. 
                Our signature headphones deliver crystal-clear sound with active noise 
                cancellation and 30-hour battery life.
              </p>
              <div className="flex gap-4 mb-8">
                <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center gap-2">
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
                <button className="border border-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Learn More
                </button>
              </div>
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-yellow-400 text-yellow-400" size={20} />
                ))}
                <span className="text-gray-600 ml-2">4.9/5 (2.5k+ reviews)</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                alt="Ravindra Pro Wireless Headphones"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product Gallery */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Product Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1484704849700-f032a568e944"
                alt="Headphones Side View"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold">Premium Build Quality</h3>
                <p className="text-gray-600">Crafted with precision</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a"
                alt="Headphones Lifestyle"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold">Comfort First Design</h3>
                <p className="text-gray-600">Extended wear comfort</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90"
                alt="Headphones Detail"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold">Premium Finish</h3>
                <p className="text-gray-600">Elegant aesthetics</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Signature Sound</h3>
              <p className="text-gray-600">Ravindra-tuned acoustics with deep bass and crystal clear highs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">30hr Battery</h3>
              <p className="text-gray-600">Long-lasting battery life for extended listening sessions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Smart ANC</h3>
              <p className="text-gray-600">Advanced noise cancellation for immersive audio experience.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Price Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Launch Offer</h2>
            <div className="flex justify-center items-center gap-4">
              <span className="text-5xl font-bold text-orange-600">₹29,999</span>
              <span className="text-xl text-gray-500 line-through">₹39,999</span>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-orange-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join the Ravindra Community</h2>
            <p className="text-orange-100 mb-8">Get exclusive offers and updates straight to your inbox.</p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg"
                  required
                />
                <button type="submit" className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <Facebook className="hover:text-orange-400 cursor-pointer" />
                <Instagram className="hover:text-orange-400 cursor-pointer" />
                <Twitter className="hover:text-orange-400 cursor-pointer" />
                <Mail className="hover:text-orange-400 cursor-pointer" />
              </div>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 Ravindra Audio. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;