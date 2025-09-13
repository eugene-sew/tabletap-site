import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';
import Header from '../components/Header';
import DigitalMenuDemo from '../components/DigitalMenuDemo';
import { 
  Utensils,
  Smartphone, 
  QrCode, 
  Clock, 
  TrendingUp,
  Users,
  Star,
  CheckCircle,
  Zap,
  Globe,
  BarChart3,
  Heart,
  Wifi,
  RefreshCw,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

function DigitalMenu() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header onDemoClick={() => setShowDemo(true)} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-100 via-orange-50 to-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Smartphone className="h-4 w-4 mr-2" />
                menu.tabletap.com
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Digital Menus
                <span className="text-orange-500 block">Reimagined</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your restaurant's dining experience with interactive digital menus that customers love. 
                No more printed menus, instant updates, and seamless ordering - all accessible with a simple QR code scan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg">
                  Start Free Trial
                </button>
                <button 
                  onClick={() => setShowDemo(true)}
                  className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 hover:text-white transition-all"
                >
                  View Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-orange-400" />
                  <span>Accra • Ho • Kumasi, Ghana</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bella Vista Menu</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-800">Truffle Pasta</h4>
                      <p className="text-sm text-gray-600">Creamy, aromatic, perfect</p>
                    </div>
                    <span className="text-orange-500 font-bold">$24</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-800">Grilled Salmon</h4>
                      <p className="text-sm text-gray-600">Fresh Atlantic, herb butter</p>
                    </div>
                    <span className="text-orange-500 font-bold">$28</span>
                  </div>
                  <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                    Add to Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Digital Menus Are the Future</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Say goodbye to outdated printed menus and hello to dynamic, interactive dining experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-orange-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <QrCode className="h-10 w-10 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Instant Access</h3>
              <p className="text-gray-600">
                Customers simply scan a QR code to access your full menu instantly on their phone. No app downloads required.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <RefreshCw className="h-10 w-10 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Real-Time Updates</h3>
              <p className="text-gray-600">
                Update prices, add new dishes, or mark items as sold out instantly. Changes appear immediately for all customers.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Globe className="h-10 w-10 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Multi-Language</h3>
              <p className="text-gray-600">
                Serve international customers with automatic translation and currency conversion built right in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20" style={{backgroundColor: '#F4F4F4'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Boost Revenue & Customer Satisfaction</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-orange-500 rounded-full p-2 mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Increase Order Value by 23%</h4>
                    <p className="text-gray-600">Interactive menus with high-quality photos and detailed descriptions encourage customers to order more.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-500 rounded-full p-2 mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Reduce Wait Times by 40%</h4>
                    <p className="text-gray-600">Customers can browse and decide before staff arrives, speeding up the entire ordering process.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-500 rounded-full p-2 mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Zero Printing Costs</h4>
                    <p className="text-gray-600">Save thousands annually on menu printing, reprinting, and design costs. Update instantly, print never.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <TrendingUp className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-800 mb-2">23%</div>
                <div className="text-gray-600">Higher Order Value</div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <Clock className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-800 mb-2">40%</div>
                <div className="text-gray-600">Faster Service</div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-800 mb-2">95%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <BarChart3 className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-800 mb-2">$3.2K</div>
                <div className="text-gray-600">Annual Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Powerful Features Built for Restaurants</h2>
            <p className="text-xl text-gray-600">Everything you need to create the perfect digital dining experience</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <Zap className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Lightning Fast</h3>
              <p className="text-gray-600">Optimized for speed with instant loading and smooth scrolling, even on slower connections.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <Heart className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Customer Favorites</h3>
              <p className="text-gray-600">Let customers save favorites and build personalized dining experiences that keep them coming back.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <Star className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Reviews & Ratings</h3>
              <p className="text-gray-600">Built-in review system helps customers discover your best dishes and builds social proof.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <Wifi className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Works Offline</h3>
              <p className="text-gray-600">Smart caching ensures your menu works even when WiFi is spotty or customers have poor signal.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <BarChart3 className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Analytics Dashboard</h3>
              <p className="text-gray-600">Track what customers view most, popular items, and optimize your menu for maximum revenue.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <Users className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Group Ordering</h3>
              <p className="text-gray-600">Perfect for large tables - everyone can add to the same order from their own device.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{backgroundColor: '#FFF2E9'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Loved by Restaurants Everywhere</h2>
            <p className="text-xl text-gray-600">See how digital menus transformed these businesses</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-orange-500">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-orange-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Our customers love the digital menus! We've seen a 30% increase in dessert orders since adding photos and descriptions. The QR code system is so simple."
              </p>
              <div className="flex items-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Utensils className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Sarah Chen</h4>
                  <p className="text-gray-600 text-sm">Owner, Garden Bistro</p>
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
                "The real-time updates are a game changer. When we run out of the daily special, we just mark it unavailable instantly. No more disappointed customers."
              </p>
              <div className="flex items-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Utensils className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Marco Rodriguez</h4>
                  <p className="text-gray-600 text-sm">Chef, Coastal Kitchen</p>
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
                "We saved over $2,000 in printing costs in the first year alone. Plus, our international customers love the translation feature."
              </p>
              <div className="flex items-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Utensils className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Lisa Thompson</h4>
                  <p className="text-gray-600 text-sm">Manager, Downtown Deli</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Go Digital?</h2>
          <p className="text-2xl mb-8 opacity-90">Join 10,000+ restaurants already using TableTap Digital Menus</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-white text-orange-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Start Free Trial
            </button>
            <button 
              onClick={() => setShowDemo(true)}
              className="border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all"
            >
              Schedule Demo
            </button>
          </div>
          <p className="text-sm opacity-75">No credit card required • Setup in under 5 minutes • 30-day free trial</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-16" style={{backgroundColor: '#333333'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <Utensils className="h-8 w-8 text-orange-400" />
                <span className="text-2xl font-bold">TableTap</span>
              </Link>
              <p className="text-gray-300 mb-6 max-w-md">
                A product of DataSight.Inc - The complete restaurant technology platform. Digital menus, POS systems, and content management all in one place.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-orange-400" />
                  <span>0537211043</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-orange-400" />
                  <span>info@datasight.inc</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-orange-400" />
                  <span>Accra • Ho • Kumasi, Ghana</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/menu" className="hover:text-orange-400 transition-colors">Digital Menus</Link></li>
                <li><Link to="/pos" className="hover:text-orange-400 transition-colors">POS System</Link></li>
                <li><Link to="/cms" className="hover:text-orange-400 transition-colors">CMS Platform</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2024 TableTap by DataSight.Inc. All rights reserved. Serving the future of dining in Ghana.</p>
          </div>
        </div>
      </footer>

      {/* Demo Modal */}
      <Modal isOpen={showDemo} onClose={() => setShowDemo(false)} size="full">
        <DigitalMenuDemo onClose={() => setShowDemo(false)} />
      </Modal>
    </div>
  );
}

export default DigitalMenu;