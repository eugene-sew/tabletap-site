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
      <section className="bg-white py-24 mt-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-orange-50 border border-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
                <CreditCard className="h-4 w-4 mr-2" />
                pos.tabletap.com
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                POS System
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400 block mt-2">Built for Speed</span>
              </h1>
              <p className="text-xl text-gray-500 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Lightning-fast point of sale system designed specifically for restaurants. Process orders, payments, 
                and manage your entire operation with the most intuitive POS in the industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  Start Free Trial
                </button>
                <button 
                  onClick={() => setShowDemo(true)}
                  className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full text-lg font-bold hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm"
                >
                  See It In Action
                </button>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="bg-white/90 backdrop-blur-xl border border-gray-100 rounded-[2rem] shadow-2xl p-6 transform -rotate-1 hover:rotate-0 transition-all duration-500">
                <div className="bg-gray-50/50 rounded-[1.5rem] p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-sm font-bold text-gray-500">TableTap POS</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <button className="bg-orange-50 border border-orange-100 text-orange-700 p-3 rounded-xl text-sm font-bold shadow-sm hover:shadow transition-all">Salmon $28</button>
                    <button className="bg-white border border-gray-200 text-gray-700 p-3 rounded-xl text-sm font-bold shadow-sm hover:shadow transition-all">Caesar $16</button>
                    <button className="bg-white border border-gray-200 text-gray-700 p-3 rounded-xl text-sm font-bold shadow-sm hover:shadow transition-all">Pasta $22</button>
                  </div>
                  <div className="space-y-3 mb-6 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-50">
                      <span className="font-semibold text-gray-800">Grilled Salmon <span className="text-gray-400 text-xs ml-1">x1</span></span>
                      <span className="text-gray-900 font-bold">$28.00</span>
                    </div>
                    <div className="flex justify-between items-center pt-1">
                      <span className="font-semibold text-gray-800">Caesar Salad <span className="text-gray-400 text-xs ml-1">x1</span></span>
                      <span className="text-gray-900 font-bold">$16.00</span>
                    </div>
                  </div>
                  <div className="pt-2 mb-6">
                    <div className="flex justify-between font-extrabold text-xl">
                      <span className="text-gray-900">Total</span>
                      <span className="text-orange-500">$44.00</span>
                    </div>
                  </div>
                  <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold shadow-md hover:bg-gray-800 transition-colors">
                    Process Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">Why Restaurants Choose TableTap POS</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Built by restaurant experts, for restaurant professionals. Every feature designed to make your life easier.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all group">
              <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-500 leading-relaxed">
                Process orders in under 3 seconds. Our optimized interface means no waiting, no lag, just pure speed.
              </p>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all group">
              <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">Bank-Level Security</h3>
              <p className="text-gray-500 leading-relaxed">
                PCI DSS compliant with end-to-end encryption. Your customers' payment data is always protected.
              </p>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all group">
              <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Wifi className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">Works Offline</h3>
              <p className="text-gray-500 leading-relaxed">
                Never miss a sale. Our POS works even when internet is down, syncing automatically when reconnected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-8">Performance That Drives Results</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-orange-50 border border-orange-100 rounded-xl p-2 mr-5 mt-1">
                    <CheckCircle className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">3x Faster Than Competitors</h4>
                    <p className="text-gray-500 leading-relaxed">Independent testing shows TableTap processes orders 3x faster than leading POS systems.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-50 border border-orange-100 rounded-xl p-2 mr-5 mt-1">
                    <CheckCircle className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">99.9% Uptime Guarantee</h4>
                    <p className="text-gray-500 leading-relaxed">Rock-solid reliability with redundant systems and 24/7 monitoring. Your POS is always ready.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-50 border border-orange-100 rounded-xl p-2 mr-5 mt-1">
                    <CheckCircle className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">5-Minute Setup</h4>
                    <p className="text-gray-500 leading-relaxed">Get up and running in minutes, not hours. Our setup wizard handles everything automatically.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 text-center">
                <Clock className="h-10 w-10 text-orange-500 mx-auto mb-4" />
                <div className="text-4xl font-extrabold tracking-tight text-gray-900 mb-2">2.8s</div>
                <div className="text-gray-500 font-medium">Average Order Time</div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 text-center">
                <TrendingUp className="h-10 w-10 text-orange-500 mx-auto mb-4" />
                <div className="text-4xl font-extrabold tracking-tight text-gray-900 mb-2">99.9%</div>
                <div className="text-gray-500 font-medium">Uptime Guarantee</div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 text-center">
                <Users className="h-10 w-10 text-orange-500 mx-auto mb-4" />
                <div className="text-4xl font-extrabold tracking-tight text-gray-900 mb-2">50K+</div>
                <div className="text-gray-500 font-medium">Happy Restaurants</div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 text-center">
                <DollarSign className="h-10 w-10 text-orange-500 mx-auto mb-4" />
                <div className="text-4xl font-extrabold tracking-tight text-gray-900 mb-2">2.1%</div>
                <div className="text-gray-500 font-medium">Processing Fee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">Everything You Need to Run Your Restaurant</h2>
            <p className="text-xl text-gray-500">Comprehensive POS features designed for the modern restaurant</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all">
              <Receipt className="h-10 w-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">Order Management</h3>
              <p className="text-gray-500 leading-relaxed">Split bills, modify orders, handle special requests, and manage complex orders with ease.</p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all">
              <Package className="h-10 w-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">Inventory Tracking</h3>
              <p className="text-gray-500 leading-relaxed">Real-time inventory updates, low stock alerts, and automatic ingredient deduction.</p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all">
              <BarChart3 className="h-10 w-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">Sales Analytics</h3>
              <p className="text-gray-500 leading-relaxed">Detailed reports on sales, popular items, peak hours, and staff performance.</p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all">
              <Users className="h-10 w-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">Staff Management</h3>
              <p className="text-gray-500 leading-relaxed">Time tracking, role-based permissions, and performance monitoring for your team.</p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all">
              <Smartphone className="h-10 w-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">Mobile Ready</h3>
              <p className="text-gray-500 leading-relaxed">Works on tablets, phones, and desktops. Take orders anywhere in your restaurant.</p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all">
              <Settings className="h-10 w-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">Easy Integration</h3>
              <p className="text-gray-500 leading-relaxed">Connects seamlessly with your existing systems, accounting software, and third-party apps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-orange-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">Trusted by Restaurant Professionals</h2>
            <p className="text-xl text-gray-500">See what restaurant owners and managers say about TableTap POS</p>
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
                  "We switched from our old POS to TableTap and immediately saw a 40% improvement in order processing speed. Our staff loves how intuitive it is."
                </p>
              </div>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4 overflow-hidden">
                  <span className="text-gray-500 font-bold">DK</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">David Kim</h4>
                  <p className="text-gray-500 text-sm">Owner, Seoul Kitchen</p>
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
                  "The offline capability saved us during a power outage. We kept serving customers while our competitors had to turn people away. Absolutely essential."
                </p>
              </div>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4 overflow-hidden">
                  <span className="text-gray-500 font-bold">JM</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Jennifer Martinez</h4>
                  <p className="text-gray-500 text-sm">Manager, Coastal Grill</p>
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
                  "The analytics dashboard gives us insights we never had before. We've optimized our menu and increased profits by 25% in just 6 months."
                </p>
              </div>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4 overflow-hidden">
                  <span className="text-gray-500 font-bold">MB</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Michael Brown</h4>
                  <p className="text-gray-500 text-sm">CEO, Urban Eats Chain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-500 mb-12">No hidden fees, no long-term contracts. Pay only for what you use.</p>
          
          <div className="bg-white p-10 md:p-12 rounded-[3rem] ring-1 ring-gray-100 shadow-xl shadow-gray-200/50 border border-gray-50 max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-orange-500"></div>
            <div className="text-center mb-10">
              <div className="text-6xl font-extrabold tracking-tight text-gray-900 mb-3">2.1%</div>
              <div className="text-xl text-gray-500 font-medium">per transaction</div>
            </div>
            <ul className="text-left space-y-5 mb-10 max-w-sm mx-auto">
              <li className="flex items-center text-lg text-gray-700">
                <CheckCircle className="h-6 w-6 text-orange-500 mr-4 flex-shrink-0" />
                <span className="font-medium">No monthly fees</span>
              </li>
              <li className="flex items-center text-lg text-gray-700">
                <CheckCircle className="h-6 w-6 text-orange-500 mr-4 flex-shrink-0" />
                <span className="font-medium">Free hardware included</span>
              </li>
              <li className="flex items-center text-lg text-gray-700">
                <CheckCircle className="h-6 w-6 text-orange-500 mr-4 flex-shrink-0" />
                <span className="font-medium">24/7 support included</span>
              </li>
              <li className="flex items-center text-lg text-gray-700">
                <CheckCircle className="h-6 w-6 text-orange-500 mr-4 flex-shrink-0" />
                <span className="font-medium">All features unlocked</span>
              </li>
            </ul>
            <button className="w-full sm:w-auto bg-orange-500 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-orange-600 transition-all hover:shadow-lg hover:-translate-y-0.5">
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px] pointer-events-none"></div>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight relative z-10">Ready to Speed Up Your Service?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
              Join 50,000+ restaurants processing millions of orders with TableTap POS
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="bg-orange-500 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                Start Free Trial
              </button>
              <button
                onClick={() => setShowDemo(true)}
                className="bg-white/10 border border-white/20 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                Request Demo
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-6 relative z-10">Free setup • No contracts • 30-day money-back guarantee</p>
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