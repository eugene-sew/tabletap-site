import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';
import Header from '../components/Header';
import POSDemo from '../components/POSDemo';
import { 
  Utensils, 
  CreditCard, 
  Zap, 
  Shield, 
  Clock,
  TrendingUp,
  Users,
  Star,
  CheckCircle,
  BarChart3,
  Smartphone,
  Wifi,
  DollarSign,
  Receipt,
  Package,
  Settings,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

function POSSystem() {
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
                <CreditCard className="h-4 w-4 mr-2" />
                pos.tabletap.com
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                POS System
                <span className="text-orange-500 block">Built for Speed</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Lightning-fast point of sale system designed specifically for restaurants. Process orders, payments, 
                and manage your entire operation with the most intuitive POS in the industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg">
                  Start Free Trial
                </button>
                <button 
                  onClick={() => setShowDemo(true)}
                  className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 hover:text-white transition-all"
                >
                  See It In Action
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-600">TableTap POS</span>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <button className="bg-orange-100 text-orange-800 p-3 rounded-lg text-sm font-medium">Salmon $28</button>
                  <button className="bg-gray-100 text-gray-800 p-3 rounded-lg text-sm font-medium">Caesar $16</button>
                  <button className="bg-gray-100 text-gray-800 p-3 rounded-lg text-sm font-medium">Pasta $22</button>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="font-medium">Grilled Salmon x1</span>
                    <span className="text-orange-500 font-bold">$28.00</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Caesar Salad x1</span>
                    <span className="text-orange-500 font-bold">$16.00</span>
                  </div>
                </div>
                <div className="border-t pt-3 mb-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-orange-500">$44.00</span>
                  </div>
                </div>
                <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold">
                  Process Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Restaurants Choose TableTap POS</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built by restaurant experts, for restaurant professionals. Every feature designed to make your life easier.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-orange-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Zap className="h-10 w-10 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Lightning Fast</h3>
              <p className="text-gray-600">
                Process orders in under 3 seconds. Our optimized interface means no waiting, no lag, just pure speed.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-10 w-10 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Bank-Level Security</h3>
              <p className="text-gray-600">
                PCI DSS compliant with end-to-end encryption. Your customers' payment data is always protected.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Wifi className="h-10 w-10 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Works Offline</h3>
              <p className="text-gray-600">
                Never miss a sale. Our POS works even when internet is down, syncing automatically when reconnected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-20" style={{backgroundColor: '#F4F4F4'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Performance That Drives Results</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-orange-500 rounded-full p-2 mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">3x Faster Than Competitors</h4>
                    <p className="text-gray-600">Independent testing shows TableTap processes orders 3x faster than leading POS systems.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-500 rounded-full p-2 mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">99.9% Uptime Guarantee</h4>
                    <p className="text-gray-600">Rock-solid reliability with redundant systems and 24/7 monitoring. Your POS is always ready.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-500 rounded-full p-2 mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">5-Minute Setup</h4>
                    <p className="text-gray-600">Get up and running in minutes, not hours. Our setup wizard handles everything automatically.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <Clock className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-800 mb-2">2.8s</div>
                <div className="text-gray-600">Average Order Time</div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <TrendingUp className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-800 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-800 mb-2">50K+</div>
                <div className="text-gray-600">Happy Restaurants</div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <DollarSign className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-800 mb-2">2.1%</div>
                <div className="text-gray-600">Processing Fee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Everything You Need to Run Your Restaurant</h2>
            <p className="text-xl text-gray-600">Comprehensive POS features designed for the modern restaurant</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <Receipt className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Order Management</h3>
              <p className="text-gray-600">Split bills, modify orders, handle special requests, and manage complex orders with ease.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <Package className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Inventory Tracking</h3>
              <p className="text-gray-600">Real-time inventory updates, low stock alerts, and automatic ingredient deduction.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <BarChart3 className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Sales Analytics</h3>
              <p className="text-gray-600">Detailed reports on sales, popular items, peak hours, and staff performance.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <Users className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Staff Management</h3>
              <p className="text-gray-600">Time tracking, role-based permissions, and performance monitoring for your team.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <Smartphone className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Mobile Ready</h3>
              <p className="text-gray-600">Works on tablets, phones, and desktops. Take orders anywhere in your restaurant.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <Settings className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Easy Integration</h3>
              <p className="text-gray-600">Connects seamlessly with your existing systems, accounting software, and third-party apps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{backgroundColor: '#FFF2E9'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Trusted by Restaurant Professionals</h2>
            <p className="text-xl text-gray-600">See what restaurant owners and managers say about TableTap POS</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-orange-500">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-orange-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "We switched from our old POS to TableTap and immediately saw a 40% improvement in order processing speed. Our staff loves how intuitive it is."
              </p>
              <div className="flex items-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Utensils className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">David Kim</h4>
                  <p className="text-gray-600 text-sm">Owner, Seoul Kitchen</p>
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
                "The offline capability saved us during a power outage. We kept serving customers while our competitors had to turn people away. Absolutely essential."
              </p>
              <div className="flex items-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Utensils className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Jennifer Martinez</h4>
                  <p className="text-gray-600 text-sm">Manager, Coastal Grill</p>
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
                "The analytics dashboard gives us insights we never had before. We've optimized our menu and increased profits by 25% in just 6 months."
              </p>
              <div className="flex items-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Utensils className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Michael Brown</h4>
                  <p className="text-gray-600 text-sm">CEO, Urban Eats Chain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 mb-12">No hidden fees, no long-term contracts. Pay only for what you use.</p>
          
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border-2 border-orange-200">
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-gray-800 mb-2">2.1%</div>
              <div className="text-xl text-gray-600">per transaction</div>
            </div>
            <ul className="text-left space-y-3 mb-8 max-w-md mx-auto">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                <span>No monthly fees</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                <span>Free hardware included</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                <span>24/7 support included</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                <span>All features unlocked</span>
              </li>
            </ul>
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Speed Up Your Service?</h2>
          <p className="text-2xl mb-8 opacity-90">Join 50,000+ restaurants processing millions of orders with TableTap POS</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-white text-orange-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Start Free Trial
            </button>
            <button 
              onClick={() => setShowDemo(true)}
              className="border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all"
            >
              Request Demo
            </button>
          </div>
          <p className="text-sm opacity-75">Free setup • No contracts • 30-day money-back guarantee</p>
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
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/menu" className="hover:text-orange-400 transition-colors">Digital Menus</Link></li>
                <li><Link to="/pos" className="hover:text-orange-400 transition-colors">POS System</Link></li>
                <li><Link to="/cms" className="hover:text-orange-400 transition-colors">CMS Platform</Link></li>
              </ul>
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
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2024 TableTap by DataSight.Inc. All rights reserved. Serving the future of dining in Ghana.</p>
          </div>
        </div>
      </footer>

      {/* Demo Modal */}
      <Modal isOpen={showDemo} onClose={() => setShowDemo(false)} size="full">
        <POSDemo onClose={() => setShowDemo(false)} />
      </Modal>
    </div>
  );
}

export default POSSystem;