import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';
import Header from '../components/Header';
import CMSDemo from '../components/CMSDemo';
import { 
  Utensils, 
  Settings, 
  Edit3, 
  Database, 
  BarChart3,
  TrendingUp,
  Users,
  Star,
  CheckCircle,
  Zap,
  Globe,
  RefreshCw,
  Package,
  Clock,
  Shield,
  Smartphone,
  Cloud,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

function CMSPlatform() {
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
                <Settings className="h-4 w-4 mr-2" />
                cms.tabletap.com
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                Content Management
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400 block mt-2">Made Simple</span>
              </h1>
              <p className="text-xl text-gray-500 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Manage your entire restaurant operation from one powerful dashboard. Update menus, track inventory, 
                analyze performance, and control everything across all your locations with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  Start Free Trial
                </button>
                <button 
                  onClick={() => setShowDemo(true)}
                  className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full text-lg font-bold hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm"
                >
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="bg-white/90 backdrop-blur-xl border border-gray-100 rounded-[2rem] shadow-2xl p-6 transform rotate-1 hover:rotate-0 transition-all duration-500">
                <div className="bg-gray-50/50 rounded-[1.5rem] p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900">Restaurant Dashboard</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                      <div className="text-3xl font-extrabold tracking-tight text-orange-500 mb-1">127</div>
                      <div className="text-sm font-semibold text-gray-500">Orders Today</div>
                    </div>
                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                      <div className="text-3xl font-extrabold tracking-tight text-green-500 mb-1">$2.8k</div>
                      <div className="text-sm font-semibold text-gray-500">Revenue</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
                      <span className="font-bold text-gray-800">Salmon Special</span>
                      <span className="text-green-600 text-xs font-bold bg-green-50 px-2.5 py-1 rounded-lg">In Stock</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white border border-red-100 rounded-2xl shadow-sm relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-400"></div>
                      <span className="font-bold text-gray-800">Truffle Pasta</span>
                      <span className="text-red-600 text-xs font-bold bg-red-50 px-2.5 py-1 rounded-lg">Low Stock</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">Everything You Need to Manage Your Restaurant</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              One powerful platform to control your menu, inventory, staff, and analytics across all locations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all group">
              <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Edit3 className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">Menu Management</h3>
              <p className="text-gray-500 leading-relaxed">
                Update dishes, prices, and descriptions instantly. Changes sync across all platforms in real-time.
              </p>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all group">
              <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Package className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">Inventory Control</h3>
              <p className="text-gray-500 leading-relaxed">
                Track stock levels, set automatic reorder points, and get alerts before you run out of key ingredients.
              </p>
            </div>

            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all group">
              <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <BarChart3 className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">Advanced Analytics</h3>
              <p className="text-gray-500 leading-relaxed">
                Deep insights into sales, customer behavior, and operational efficiency to drive better decisions.
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
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-8">Streamline Operations & Boost Profits</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-orange-50 border border-orange-100 rounded-xl p-2 mr-5 mt-1">
                    <CheckCircle className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Save 15+ Hours Per Week</h4>
                    <p className="text-gray-500 leading-relaxed">Automate routine tasks like inventory updates, price changes, and report generation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-50 border border-orange-100 rounded-xl p-2 mr-5 mt-1">
                    <CheckCircle className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Reduce Food Waste by 30%</h4>
                    <p className="text-gray-500 leading-relaxed">Smart inventory tracking and predictive analytics help optimize ordering and reduce waste.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-50 border border-orange-100 rounded-xl p-2 mr-5 mt-1">
                    <CheckCircle className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Multi-Location Management</h4>
                    <p className="text-gray-500 leading-relaxed">Control all your restaurants from one dashboard. Perfect for chains and franchises.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 text-center">
                <Clock className="h-10 w-10 text-orange-500 mx-auto mb-4" />
                <div className="text-4xl font-extrabold tracking-tight text-gray-900 mb-2">15+</div>
                <div className="text-gray-500 font-medium">Hours Saved Weekly</div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 text-center">
                <TrendingUp className="h-10 w-10 text-orange-500 mx-auto mb-4" />
                <div className="text-4xl font-extrabold tracking-tight text-gray-900 mb-2">30%</div>
                <div className="text-gray-500 font-medium">Less Food Waste</div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 text-center">
                <Database className="h-10 w-10 text-orange-500 mx-auto mb-4" />
                <div className="text-4xl font-extrabold tracking-tight text-gray-900 mb-2">100%</div>
                <div className="text-gray-500 font-medium">Data Accuracy</div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 text-center">
                <Globe className="h-10 w-10 text-orange-500 mx-auto mb-4" />
                <div className="text-4xl font-extrabold tracking-tight text-gray-900 mb-2">∞</div>
                <div className="text-gray-500 font-medium">Locations Supported</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">Powerful Features for Restaurant Management</h2>
            <p className="text-xl text-gray-500">Comprehensive tools designed for restaurant owners and managers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all md:col-span-2">
              <RefreshCw className="h-10 w-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">Real-Time Sync</h3>
              <p className="text-gray-500 leading-relaxed">Changes made in the CMS instantly appear on digital menus and POS systems across all locations.</p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all md:col-span-2">
              <Users className="h-10 w-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">Staff Management</h3>
              <p className="text-gray-500 leading-relaxed">Manage employee access, track performance, and control permissions with role-based security.</p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all md:col-span-2 lg:col-span-1">
              <Shield className="h-10 w-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">Enterprise Security</h3>
              <p className="text-gray-500 leading-relaxed">Bank-level encryption, secure backups, and compliance with industry standards.</p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all md:col-span-2 lg:col-span-1">
              <Smartphone className="h-10 w-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">Mobile Access</h3>
              <p className="text-gray-500 leading-relaxed">Manage your restaurant from anywhere with our mobile-optimized dashboard.</p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all md:col-span-2 lg:col-span-1">
              <Cloud className="h-10 w-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">Cloud-Based</h3>
              <p className="text-gray-500 leading-relaxed">No servers to maintain. Automatic updates, backups, and 99.9% uptime guarantee.</p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all md:col-span-2 lg:col-span-1">
              <Zap className="h-10 w-10 text-orange-500 mb-6" />
              <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">API Integration</h3>
              <p className="text-gray-500 leading-relaxed">Connect with accounting software, delivery platforms, and other restaurant tools seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-orange-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">Trusted by Restaurant Chains & Independents</h2>
            <p className="text-xl text-gray-500">See how TableTap CMS transformed these restaurant operations</p>
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
                  "Managing 12 locations used to be a nightmare. Now I can update all menus, track inventory, and analyze performance from one dashboard. It's incredible."
                </p>
              </div>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4 overflow-hidden">
                  <span className="text-gray-500 font-bold">RG</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Rachel Green</h4>
                  <p className="text-gray-500 text-sm">CEO, Green Leaf Restaurant Group</p>
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
                  "The inventory management alone has saved us thousands. We reduced food waste by 35% and never run out of popular items anymore."
                </p>
              </div>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4 overflow-hidden">
                  <span className="text-gray-500 font-bold">TR</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Tony Ricci</h4>
                  <p className="text-gray-500 text-sm">Owner, Tony's Italian Kitchen</p>
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
                  "The analytics dashboard gives us insights we never had before. We've optimized our menu based on data and increased profits by 28%."
                </p>
              </div>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4 overflow-hidden">
                  <span className="text-gray-500 font-bold">AF</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Amanda Foster</h4>
                  <p className="text-gray-500 text-sm">Operations Manager, Fusion Bistro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">Seamlessly Integrates with Your Existing Tools</h2>
            <p className="text-xl text-gray-500">Connect TableTap CMS with the software you already use</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-gray-50">
                <Database className="h-8 w-8 text-orange-500" />
              </div>
              <h4 className="font-bold text-gray-900 text-lg">Accounting Software</h4>
              <p className="text-sm text-gray-500 mt-2">QuickBooks, Xero, Sage</p>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-gray-50">
                <Smartphone className="h-8 w-8 text-orange-500" />
              </div>
              <h4 className="font-bold text-gray-900 text-lg">Delivery Platforms</h4>
              <p className="text-sm text-gray-500 mt-2">DoorDash, Uber Eats, Grubhub</p>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-gray-50">
                <Users className="h-8 w-8 text-orange-500" />
              </div>
              <h4 className="font-bold text-gray-900 text-lg">HR Systems</h4>
              <p className="text-sm text-gray-500 mt-2">BambooHR, Workday, ADP</p>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-gray-50">
                <BarChart3 className="h-8 w-8 text-orange-500" />
              </div>
              <h4 className="font-bold text-gray-900 text-lg">Analytics Tools</h4>
              <p className="text-sm text-gray-500 mt-2">Google Analytics, Mixpanel</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px] pointer-events-none"></div>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight relative z-10">Ready to Take Control of Your Restaurant?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
              Join thousands of restaurants managing smarter with TableTap CMS
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="bg-orange-500 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                Start Free Trial
              </button>
              <button
                onClick={() => setShowDemo(true)}
                className="bg-white/10 border border-white/20 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                Book a Demo
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-6 relative z-10">Free 30-day trial • No setup fees • Cancel anytime</p>
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
        <CMSDemo onClose={() => setShowDemo(false)} />
      </Modal>
    </div>
  );
}

export default CMSPlatform;