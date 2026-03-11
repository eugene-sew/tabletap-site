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
      <section className="bg-white py-24 mt-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-orange-50 border border-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
                <Smartphone className="h-4 w-4 mr-2" />
                menu.tabletap.com
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                Digital Menus
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400 block mt-2">Reimagined</span>
              </h1>
              <p className="text-xl text-gray-500 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Transform your restaurant's dining experience with interactive digital menus that customers love. 
                No more printed menus, instant updates, and seamless ordering - all accessible with a simple QR code scan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  Start Free Trial
                </button>
                <button 
                  onClick={() => setShowDemo(true)}
                  className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full text-lg font-bold hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm"
                >
                  View Demo
                </button>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
              <div className="bg-white/90 backdrop-blur-xl border border-gray-100 rounded-[2.5rem] shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-all duration-500">
                <div className="bg-gray-50/50 rounded-3xl p-6 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <MapPin className="h-5 w-5 mr-3 text-orange-400" />
                    <span className="text-sm font-semibold text-gray-700">Accra • Ho • Kumasi, Ghana</span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">Bella Vista Menu</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-white rounded-2xl shadow-sm border border-orange-100/50">
                      <div>
                        <h4 className="font-bold text-gray-900">Truffle Pasta</h4>
                        <p className="text-sm text-gray-500">Creamy, aromatic, perfect</p>
                      </div>
                      <span className="text-orange-500 font-bold bg-orange-50 px-3 py-1 rounded-lg">$24</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                      <div>
                        <h4 className="font-bold text-gray-900">Grilled Salmon</h4>
                        <p className="text-sm text-gray-500">Fresh Atlantic, herb butter</p>
                      </div>
                      <span className="text-orange-500 font-bold bg-orange-50 px-3 py-1 rounded-lg">$28</span>
                    </div>
                    <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold hover:bg-orange-600 transition-colors shadow-sm">
                      Add to Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">Why Digital Menus Are the Future</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Say goodbye to outdated printed menus and hello to dynamic, interactive dining experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all group">
              <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <QrCode className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">Instant Access</h3>
              <p className="text-gray-500 leading-relaxed">
                Customers simply scan a QR code to access your full menu instantly on their phone. No app downloads required.
              </p>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all group">
              <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <RefreshCw className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">Real-Time Updates</h3>
              <p className="text-gray-500 leading-relaxed">
                Update prices, add new dishes, or mark items as sold out instantly. Changes appear immediately for all customers.
              </p>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all group">
              <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Globe className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">Multi-Language</h3>
              <p className="text-gray-500 leading-relaxed">
                Serve international customers with automatic translation and currency conversion built right in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-8">Boost Revenue & Customer Satisfaction</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-orange-50 border border-orange-100 rounded-xl p-2 mr-5 mt-1">
                    <CheckCircle className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Increase Order Value by 23%</h4>
                    <p className="text-gray-500 leading-relaxed">Interactive menus with high-quality photos and detailed descriptions encourage customers to order more.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-50 border border-orange-100 rounded-xl p-2 mr-5 mt-1">
                    <CheckCircle className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Reduce Wait Times by 40%</h4>
                    <p className="text-gray-500 leading-relaxed">Customers can browse and decide before staff arrives, speeding up the entire ordering process.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-50 border border-orange-100 rounded-xl p-2 mr-5 mt-1">
                    <CheckCircle className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Zero Printing Costs</h4>
                    <p className="text-gray-500 leading-relaxed">Save thousands annually on menu printing, reprinting, and design costs. Update instantly, print never.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 text-center">
                <TrendingUp className="h-10 w-10 text-orange-500 mx-auto mb-4" />
                <div className="text-4xl font-extrabold tracking-tight text-gray-900 mb-2">23%</div>
                <div className="text-gray-500 font-medium">Higher Order Value</div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 text-center">
                <Clock className="h-10 w-10 text-orange-500 mx-auto mb-4" />
                <div className="text-4xl font-extrabold tracking-tight text-gray-900 mb-2">40%</div>
                <div className="text-gray-500 font-medium">Faster Service</div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 text-center">
                <Users className="h-10 w-10 text-orange-500 mx-auto mb-4" />
                <div className="text-4xl font-extrabold tracking-tight text-gray-900 mb-2">95%</div>
                <div className="text-gray-500 font-medium">Customer Satisfaction</div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 text-center">
                <BarChart3 className="h-10 w-10 text-orange-500 mx-auto mb-4" />
                <div className="text-4xl font-extrabold tracking-tight text-gray-900 mb-2">$3.2K</div>
                <div className="text-gray-500 font-medium">Annual Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">Powerful Features Built for Restaurants</h2>
            <p className="text-xl text-gray-500">Everything you need to create the perfect digital dining experience</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all">
              <Zap className="h-10 w-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-gray-500 leading-relaxed">Optimized for speed with instant loading and smooth scrolling, even on slower connections.</p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all">
              <Heart className="h-10 w-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">Customer Favorites</h3>
              <p className="text-gray-500 leading-relaxed">Let customers save favorites and build personalized dining experiences that keep them coming back.</p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all">
              <Star className="h-10 w-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">Reviews & Ratings</h3>
              <p className="text-gray-500 leading-relaxed">Built-in review system helps customers discover your best dishes and builds social proof.</p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all">
              <Wifi className="h-10 w-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">Works Offline</h3>
              <p className="text-gray-500 leading-relaxed">Smart caching ensures your menu works even when WiFi is spotty or customers have poor signal.</p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all">
              <BarChart3 className="h-10 w-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">Analytics Dashboard</h3>
              <p className="text-gray-500 leading-relaxed">Track what customers view most, popular items, and optimize your menu for maximum revenue.</p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all">
              <Users className="h-10 w-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">Group Ordering</h3>
              <p className="text-gray-500 leading-relaxed">Perfect for large tables - everyone can add to the same order from their own device.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-orange-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">Loved by Restaurants Everywhere</h2>
            <p className="text-xl text-gray-500">See how digital menus transformed these businesses</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-orange-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  "Our customers love the digital menus! We've seen a 30% increase in dessert orders since adding photos and descriptions. The QR code system is so simple."
                </p>
              </div>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4 overflow-hidden">
                  <span className="text-gray-500 font-bold">SC</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Sarah Chen</h4>
                  <p className="text-gray-500 text-sm">Owner, Garden Bistro</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-orange-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  "The real-time updates are a game changer. When we run out of the daily special, we just mark it unavailable instantly. No more disappointed customers."
                </p>
              </div>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4 overflow-hidden">
                  <span className="text-gray-500 font-bold">MR</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Marco Rodriguez</h4>
                  <p className="text-gray-500 text-sm">Chef, Coastal Kitchen</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-orange-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  "We saved over $2,000 in printing costs in the first year alone. Plus, our international customers love the translation feature."
                </p>
              </div>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4 overflow-hidden">
                  <span className="text-gray-500 font-bold">LT</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Lisa Thompson</h4>
                  <p className="text-gray-500 text-sm">Manager, Downtown Deli</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px] pointer-events-none"></div>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight relative z-10">Ready to Go Digital?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
              Join 10,000+ restaurants already using TableTap Digital Menus
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="bg-orange-500 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                Start Free Trial
              </button>
              <button
                onClick={() => setShowDemo(true)}
                className="bg-white/10 border border-white/20 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                Schedule Demo
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-6 relative z-10">No credit card required • Setup in under 5 minutes • 30-day free trial</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-16">
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