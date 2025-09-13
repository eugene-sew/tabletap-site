import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  CreditCard, 
  Settings, 
  Utensils, 
  Tablet, 
  ShoppingCart,
  Package,
  Clock,
  Heart,
  TrendingUp,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <Utensils className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-gray-900">TableTap</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-orange-500 transition-colors">Features</a>
              <a href="#why-us" className="text-gray-700 hover:text-orange-500 transition-colors">Why TableTap</a>
              <a href="#testimonials" className="text-gray-700 hover:text-orange-500 transition-colors">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</a>
            </nav>
            <Link to="/menu" className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-100 via-orange-50 to-orange-25 py-20 relative">
        <div className="absolute inset-0 bg-gray-900 opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                The Future of Dining,
                <span className="text-orange-500 block">One Tap Away</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your restaurant with our complete technology suite: 
                <span className="text-orange-600 font-semibold"> Digital Menus</span> (menu.tabletap), 
                <span className="text-orange-600 font-semibold"> POS</span> (pos.tabletap), and 
                <span className="text-orange-600 font-semibold"> CMS</span> (cms.tabletap).
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/menu" className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg text-center">
                  Get Started Today
                </Link>
                <button className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 hover:text-white transition-all">
                  Book a Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gray-100 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Tablet className="h-8 w-8 text-orange-500" />
                    <span className="text-sm font-medium text-gray-600">Table 12</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Today's Menu</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium">Grilled Salmon</span>
                      <span className="text-orange-500 font-bold">$24</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium">Caesar Salad</span>
                      <span className="text-orange-500 font-bold">$12</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">Pasta Primavera</span>
                      <span className="text-orange-500 font-bold">$18</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20" style={{backgroundColor: '#F4F4F4'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Everything Your Restaurant Needs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three powerful platforms working seamlessly together to revolutionize your dining experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Digital Menu */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Menu className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Digital Menu</h3>
              <p className="text-gray-600 mb-6">
                Modern menus that customers can scan and browse instantly. Update dishes, prices, and availability in real-time.
              </p>
              <Link to="/menu" className="flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                <span>menu.tabletap</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>

            {/* POS */}
            <div className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group" style={{backgroundColor: '#FFF2E9'}}>
              <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CreditCard className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Point of Sale</h3>
              <p className="text-gray-600 mb-6">
                Fast, reliable payments built for restaurants. Process orders, split bills, and handle transactions seamlessly.
              </p>
              <Link to="/pos" className="flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                <span>pos.tabletap</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>

            {/* CMS */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Settings className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Content Management</h3>
              <p className="text-gray-600 mb-6">
                Easily manage menu items, pricing, and inventory in one place. Keep everything synchronized across all platforms.
              </p>
              <Link to="/cms" className="flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                <span>cms.tabletap</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why TableTap Section */}
      <section id="why-us" className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-400 opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose TableTap?</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Join thousands of restaurants already serving smarter and delighting customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Faster Service</h3>
              <p className="opacity-90">
                Reduce wait times by 40% with digital ordering and streamlined kitchen operations.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Better Experience</h3>
              <p className="opacity-90">
                Delight customers with modern, intuitive interfaces and personalized dining experiences.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Smarter Management</h3>
              <p className="opacity-90">
                Get real-time insights, automate inventory, and make data-driven decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20" style={{backgroundColor: '#FFF2E9'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Loved by Restaurants Everywhere</h2>
            <p className="text-xl text-gray-600">From cozy cafes to fine dining, TableTap works for every type of restaurant</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-orange-500">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-orange-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "TableTap transformed our small bistro. Orders are faster, customers love the digital menus, and we've increased revenue by 25%."
              </p>
              <div className="flex items-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Utensils className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Maria Rodriguez</h4>
                  <p className="text-gray-600 text-sm">Owner, Bella Vista Bistro</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-orange-500">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-orange-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The POS system is incredibly fast and the staff learned it in no time. Customer satisfaction has never been higher."
              </p>
              <div className="flex items-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Utensils className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">James Chen</h4>
                  <p className="text-gray-600 text-sm">Manager, Urban Kitchen</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-orange-500">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-orange-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Managing inventory and menus across our 3 locations is now effortless. TableTap is a game-changer for restaurant chains."
              </p>
              <div className="flex items-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Utensils className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Sarah Thompson</h4>
                  <p className="text-gray-600 text-sm">CEO, Green Leaf Restaurants</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Restaurant?</h2>
          <p className="text-2xl mb-8 text-orange-400 font-semibold">Serve Smarter. Dine Better.</p>
          <p className="text-xl opacity-90 mb-12">
            Join the future of dining technology. Get started with TableTap today and see the difference in your first week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className="bg-orange-500 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg">
              Get Started Now
            </Link>
            <button className="border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all">
              Request a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="text-white py-16" style={{backgroundColor: '#333333'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <Utensils className="h-8 w-8 text-orange-400" />
                <span className="text-2xl font-bold">TableTap</span>
              </Link>
              <p className="text-gray-300 mb-6 max-w-md">
                The complete restaurant technology platform. Digital menus, POS systems, and content management all in one place.
              </p>
              <div className="flex space-x-4">
                <Twitter className="h-6 w-6 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
                <Linkedin className="h-6 w-6 text-gray-400 hover:text-orange-400 cursor-pointer transition-colors" />
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/menu" className="hover:text-orange-400 transition-colors">Digital Menus</Link></li>
                <li><Link to="/pos" className="hover:text-orange-400 transition-colors">POS System</Link></li>
                <li><Link to="/cms" className="hover:text-orange-400 transition-colors">CMS Platform</Link></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Analytics</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-orange-400" />
                  <span>1-800-TABLETAP</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-orange-400" />
                  <span>hello@tabletap.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-orange-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2024 TableTap. All rights reserved. Serving the future of dining.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;