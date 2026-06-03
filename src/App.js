import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Search, Menu, X } from 'lucide-react';

export default function IndianCafeWebsite() {
    // eslint-disable-next-line no-unused-vars
  const [scrollY, setScrollY] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 1, name: 'Masala Vada', price: '₹40', category: 'savory', desc: 'Crispy, golden fried vada with spices', img: 'https://smithakalluraya.com/wp-content/uploads/2013/10/ambode.jpg' },
    { id: 2, name: 'Samosa', price: '₹30', category: 'savory', desc: 'Spiced potato & peas crispy pastry', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop' },
    { id: 3, name: 'Banana Puffs', price: '₹35', category: 'savory', desc: 'Soft, flaky pastry puffs with banana', img: 'https://bakeryb.com/local/wp-content/uploads/sites/5/2025/10/Banana-Puff-Bakery-B.jpg'},
    { id: 5, name: 'Egg Puffs', price: '₹40', category: 'savory', desc: 'Fluffy egg filling with herbs', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSltzy-sQwFFN2FI-6w2vz4jKplDyL57vK5cg&s' },
    { id: 6, name: 'Veg Puffs', price: '₹30', category: 'savory', desc: 'Fresh vegetables in crispy puff pastry', img: 'https://www.yummytummyaarthi.com/wp-content/uploads/2021/12/1-1.jpg' },
    { id: 7, name: 'Vanilla Cake', price: '₹150', category: 'sweet', desc: 'Classic vanilla with creamy frosting', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_YQHYLyCZ7fplGIzxDmQcuMTtAhRAJ5qsRA&s' },
    { id: 8, name: 'Chocolate Cake', price: '₹160', category: 'sweet', desc: 'Rich & decadent chocolate cake', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop' },
    { id: 9, name: 'Red Velvet Cake', price: '₹170', category: 'sweet', desc: 'Elegant red velvet with cream cheese', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC85O40juAwwR_Me5WkbaVZBtgsodkgPPgJA&s' },
    { id: 10, name: 'Carrot Cake', price: '₹160', category: 'sweet', desc: 'Moist carrot cake with walnuts', img: 'https://www.simplyrecipes.com/thmb/oR-ZM8gn9H0VG2SvXXOM68z-9P8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/simply-recipes-easy-carrot-cake-lead-6-7770d9f1cf51473287ceb635f2c1ebf9.jpg' },
    { id: 11, name: 'Coffee Cake', price: '₹155', category: 'sweet', desc: 'Rich coffee flavored cake', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3aXQ9CrCgjtpE14USwAuMu6_zx6iwmz_QRw&s' },
    { id: 13, name: 'Strawberry Cake', price: '₹170', category: 'sweet', desc: 'Fresh strawberry with cream', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxICoTzD_lF9NEc77D6-7w-mzPZaK-yq1iw&s' },
    { id: 14, name: 'Eggless Cake', price: '₹150', category: 'sweet', desc: 'Moist & delicious eggless', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP1xAh-L9l37INNSfob0eTgZzeSJhSD-XzGg&s' },
    { id: 18, name: 'Sweet Laddu', price: '₹60', category: 'sweet', desc: 'Traditional round sweets made with besan & ghee', img: 'https://bgnaidusweets.com/cdn/shop/products/Mothi-Ladoo-Online-BG-Naidu-Sweets.jpg?v=1673520975' },
    { id: 15, name: 'Mango Smoothie', price: '₹80', category: 'beverages', desc: 'Fresh & creamy mango goodness', img: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/05/mango-smoothie.jpg' },
    { id: 16, name: 'Masala Chai', price: '₹50', category: 'beverages', desc: 'Authentic spiced Indian tea', img: 'https://www.seema.com/wp-content/uploads/2022/07/Masala-Chai.jpg' },
    { id: 17, name: 'Coffee', price: '₹60', category: 'beverages', desc: 'Freshly brewed premium coffee', img: 'data:image/jpeg;base64,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' },
  ];

  const filtered = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  const handleExploreMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="overflow-hidden" style={{ background: '#1a1410' }}>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b" style={{ background: 'rgba(26, 20, 16, 0.98)', borderColor: '#d4a574' }}>
        <style>{`
          @media (max-width: 768px) {
            .nav-desktop-links { display: none !important; }
            .nav-search-icon { display: none !important; }
            .nav-signin-btn { display: none !important; }
            .nav-burger { display: flex !important; }
          }
          .mobile-link:hover { color: #d4a574 !important; }
        `}</style>

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold" style={{ color: '#d4a574' }}>NATURAL CAFE</div>
            <div style={{ width: '1px', height: '30px', background: '#d4a574' }}></div>
            <p className="text-sm" style={{ color: '#d4a574' }}>Cafe & Bakery</p>
          </div>

          {/* Desktop Links */}
          <div className="nav-desktop-links hidden md:flex gap-8">
            {[{ id: 'menu', label: 'Menu' }, { id: 'about', label: 'About' }, { id: 'contact', label: 'Contact' }].map(({ id, label }) => (
              <button key={id} onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                className="font-medium transition" style={{ color: '#e0e0e0', background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px' }}>
                {label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Search size={20} className="nav-search-icon" style={{ color: '#d4a574', cursor: 'pointer' }} />
            <button className="nav-signin-btn px-4 md:px-6 py-2 rounded text-white transition" style={{ background: '#d4a574' }}>
              Sign In
            </button>
            {/* Hamburger Button — hidden on desktop, shown on mobile */}
            <button
              className="nav-burger"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              style={{
                display: 'none', alignItems: 'center', justifyContent: 'center',
                background: 'none', border: 'none', cursor: 'pointer', color: '#d4a574', padding: '4px'
              }}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div style={{
            background: 'rgba(26, 20, 16, 0.98)',
            borderTop: '1px solid rgba(212, 165, 116, 0.3)',
            padding: '12px 24px 20px',
          }}>
            {[
              { id: 'menu', label: 'Menu' },
              { id: 'about', label: 'About' },
              { id: 'contact', label: 'Contact' },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}
                className="mobile-link"
                style={{
                  display: 'block', width: '100%', textAlign: 'left', color: '#e0e0e0',
                  background: 'none', border: 'none', borderBottom: '1px solid rgba(212, 165, 116, 0.15)',
                  fontWeight: '500', padding: '13px 0', fontSize: '16px', cursor: 'pointer',
                  transition: 'color 0.2s',
                }}
              >
                {label}
              </button>
            ))}
            <button
              style={{
                marginTop: '14px', background: '#d4a574', color: 'white',
                padding: '11px', border: 'none', cursor: 'pointer',
                fontWeight: '500', borderRadius: '4px', width: '100%', fontSize: '15px',
              }}
            >
              Sign In
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 relative overflow-hidden min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6" style={{ color: '#ffffff', lineHeight: 1.1, fontFamily: 'Georgia, serif' }}>
              Discover The Art Of <span style={{ color: '#d4a574' }}>Perfect Taste</span>
            </h1>
            <p className="text-lg mb-8" style={{ color: '#c0c0c0', lineHeight: 1.6 }}>
              Experience the rich and bold flavors of our exquisite Indian cuisine and freshly baked goods. Crafted to awaken your senses and start your day right.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="px-8 py-3 font-bold text-lg transition flex items-center gap-2" style={{ background: '#ffffff', color: '#1a1410' }}>
                Order Now <span>→</span>
              </button>
              <button onClick={handleExploreMenu} className="px-8 py-3 font-bold text-lg transition border-2" style={{ borderColor: '#d4a574', color: '#d4a574' }}>
                Explore More
              </button>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2" style={{ color: '#d4a574' }}>50+</div>
                <p style={{ color: '#808080', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Menu Items</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" style={{ color: '#d4a574' }}>20+</div>
                <p style={{ color: '#808080', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Daily Orders</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" style={{ color: '#d4a574' }}>2k+</div>
                <p style={{ color: '#808080', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Happy Customers</p>
              </div>
            </div>
          </div>
          <div className="relative h-96 md:h-full md:min-h-screen hidden md:flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop"
              alt="Featured Food"
              className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
              style={{ animation: 'float 3s ease-in-out infinite', filter: 'drop-shadow(0 20px 40px rgba(212, 165, 116, 0.3))' }}
            />
          </div>
        </div>
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-30px); }
          }
        `}</style>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 md:px-6" style={{ background: '#2a2420' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: '#ffffff', fontFamily: 'Georgia, serif' }}>Our Collections</h2>
            <div style={{ width: '80px', height: '3px', background: '#d4a574', margin: '20px auto' }}></div>
            <p style={{ color: '#c0c0c0' }}>Handcrafted with love and finest ingredients</p>
          </div>
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center mb-16">
            {['all', 'savory', 'sweet', 'beverages'].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-sm font-medium transition text-sm md:text-base ${activeCategory === cat ? 'text-white shadow-lg' : 'text-gray-300'}`}
                style={{
                  background: activeCategory === cat ? '#d4a574' : 'transparent',
                  border: activeCategory !== cat ? '1px solid #d4a574' : 'none',
                  textTransform: 'capitalize'
                }}
              >
                {cat === 'all' ? 'All Items' : cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((item, idx) => (
              <div
                key={item.id}
                className="group cursor-pointer transition-all duration-300 overflow-hidden"
                style={{ background: '#1a1410', border: '1px solid #3a3430', animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both` }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#d4a574'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#3a3430'}
              >
                <div className="relative h-48 overflow-hidden bg-gray-900">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=400&fit=crop'; }}
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-base" style={{ color: '#d4a574' }}>{item.name}</h3>
                    <span className="font-bold" style={{ color: '#d4a574' }}>{item.price}</span>
                  </div>
                  <p className="text-sm mb-4" style={{ color: '#999999' }}>{item.desc}</p>
                  <button className="w-full py-2 transition text-white" style={{ background: '#d4a574' }}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-6" style={{ background: '#1a1410' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=500&fit=crop" alt="Cafe" className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <h2 className="text-5xl font-bold mb-6" style={{ color: '#ffffff', fontFamily: 'Georgia, serif' }}>About NATURAL CAFE</h2>
            <div style={{ width: '60px', height: '2px', background: '#d4a574', marginBottom: '30px' }}></div>
            <p className="mb-6" style={{ color: '#c0c0c0', lineHeight: 1.8 }}>
              We bring you authentic Indian flavors combined with modern bakery excellence. Every item is crafted with passion and premium ingredients.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3" style={{ color: '#c0c0c0' }}><span style={{ color: '#d4a574' }}>✓</span><span>100% Fresh & Handmade every day</span></li>
              <li className="flex gap-3" style={{ color: '#c0c0c0' }}><span style={{ color: '#d4a574' }}>✓</span><span>No artificial colors or preservatives</span></li>
              <li className="flex gap-3" style={{ color: '#c0c0c0' }}><span style={{ color: '#d4a574' }}>✓</span><span>Authentic Indian recipes & flavors</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-6" style={{ background: '#2a2420' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16" style={{ color: '#ffffff', fontFamily: 'Georgia, serif' }}>Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8" style={{ background: '#1a1410', border: '1px solid #3a3430' }}>
              <MapPin size={40} className="mx-auto mb-4" style={{ color: '#d4a574' }} />
              <h3 className="font-bold text-lg mb-2" style={{ color: '#d4a574' }}>Location</h3>
              <p style={{ color: '#c0c0c0' }}>15 Ameeni Magu<br />Maldives, Male</p>
            </div>
            <div className="text-center p-8" style={{ background: '#1a1410', border: '1px solid #3a3430' }}>
              <Phone size={40} className="mx-auto mb-4" style={{ color: '#d4a574' }} />
              <h3 className="font-bold text-lg mb-2" style={{ color: '#d4a574' }}>Phone</h3>
              <p style={{ color: '#c0c0c0' }}><a href="tel:+960-9876587">+960-9876587</a><br /><a href="tel:+960-9876588">+960-9876588</a></p>
            </div>
            <div className="text-center p-8" style={{ background: '#1a1410', border: '1px solid #3a3430' }}>
              <Clock size={40} className="mx-auto mb-4" style={{ color: '#d4a574' }} />
              <h3 className="font-bold text-lg mb-2" style={{ color: '#d4a574' }}>Hours</h3>
              <p style={{ color: '#c0c0c0' }}>Sat-Friday: 7 AM - 9 PM<br /></p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t" style={{ background: '#1a1410', borderColor: '#d4a574' }}>
        <div className="max-w-7xl mx-auto">
          <p style={{ color: '#999999' }}>© 2024 NATURAL CAFE Cafe & Bakery. All rights reserved.</p>
          <p style={{ color: '#666666', marginTop: '8px' }}>Made with ❤️ for your taste buds</p>
        </div>
      </footer>
    </div>
  );
}