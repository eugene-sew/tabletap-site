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
      <section className="bg-gradient-to-br from-orange-100 via-orange-50 to-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Settings className="h-4 w-4 mr-2" />
                cms.tabletap.com
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Content Management
                <span className="text-orange-500 block">Made Simple</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Manage your entire restaurant operation from one powerful dashboard. Update menus, track inventory, 
                analyze performance, and control everything across all your locations with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg">
                  Start Free Trial
                </button>
                <button 
                  onClick={() => setShowDemo(true)}
                  className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 hover:text-white transition-all"
                >
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Restaurant Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">127</div>
                    <div className="text-sm text-gray-600">Orders Today</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">$2,847</div>
                    <div className="text-sm text-gray-600">Revenue</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Salmon Special</span>
                    <span className="text-green-600 text-sm">In Stock</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <span className="font-medium">Truffle Pasta</span>
                    <span className="text-red-600 text-sm">Low Stock</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Everything You Need to Manage Your Restaurant</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              One powerful platform to control your menu, inventory, staff, and analytics across all locations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-orange-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Edit3 className="h-10 w-10 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Menu Management</h3>
              <p className="text-gray-600">
                Update dishes, prices, and descriptions instantly. Changes sync across all platforms in real-time.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Package className="h-10 w-10 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Inventory Control</h3>
              <p className="text-gray-600">
                Track stock levels, set automatic reorder points, and get alerts before you run out of key ingredients.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="h-10 w-10 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Advanced Analytics</h3>
              <p className="text-gray-600">
                Deep insights into sales, customer behavior, and operational efficiency to drive better decisions.
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
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Streamline Operations & Boost Profits</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-orange-500 rounded-full p-2 mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Save 15+ Hours Per Week</h4>
                    <p className="text-gray-600">Automate routine tasks like inventory updates, price changes, and report generation.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-500 rounded-full p-2 mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Reduce Food Waste by 30%</h4>
                    <p className="text-gray-600">Smart inventory tracking and predictive analytics help optimize ordering and reduce waste.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-500 rounded-full p-2 mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Multi-Location Management</h4>
                    <p className="text-gray-600">Control all your restaurants from one dashboard. Perfect for chains and franchises.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <Clock className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-800 mb-2">15+</div>
                <div className="text-gray-600">Hours Saved Weekly</div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <TrendingUp className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-800 mb-2">30%</div>
                <div className="text-gray-600">Less Food Waste</div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <Database className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-800 mb-2">100%</div>
                <div className="text-gray-600">Data Accuracy</div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <Globe className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-800 mb-2">∞</div>
                <div className="text-gray-600">Locations Supported</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Powerful Features for Restaurant Management</h2>
            <p className="text-xl text-gray-600">Comprehensive tools designed for restaurant owners and managers</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <RefreshCw className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Real-Time Sync</h3>
              <p className="text-gray-600">Changes made in the CMS instantly appear on digital menus and POS systems across all locations.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <Users className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Staff Management</h3>
              <p className="text-gray-600">Manage employee access, track performance, and control permissions with role-based security.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <Shield className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Enterprise Security</h3>
              <p className="text-gray-600">Bank-level encryption, secure backups, and compliance with industry standards.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <Smartphone className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Mobile Access</h3>
              <p className="text-gray-600">Manage your restaurant from anywhere with our mobile-optimized dashboard.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <Cloud className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Cloud-Based</h3>
              <p className="text-gray-600">No servers to maintain. Automatic updates, backups, and 99.9% uptime guarantee.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <Zap className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">API Integration</h3>
              <p className="text-gray-600">Connect with accounting software, delivery platforms, and other restaurant tools seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{backgroundColor: '#FFF2E9'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Trusted by Restaurant Chains & Independents</h2>
            <p className="text-xl text-gray-600">See how TableTap CMS transformed these restaurant operations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-orange-500">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-orange-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Managing 12 locations used to be a nightmare. Now I can update all menus, track inventory, and analyze performance from one dashboard. It's incredible."
              </p>
              <div className="flex items-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Utensils className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Rachel Green</h4>
                  <p className="text-gray-600 text-sm">CEO, Green Leaf Restaurant Group</p>
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
                "The inventory management alone has saved us thousands. We reduced food waste by 35% and never run out of popular items anymore."
              </p>
              <div className="flex items-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Utensils className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Tony Ricci</h4>
                  <p className="text-gray-600 text-sm">Owner, Tony's Italian Kitchen</p>
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
                "The analytics dashboard gives us insights we never had before. We've optimized our menu based on data and increased profits by 28%."
              </p>
              <div className="flex items-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Utensils className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Amanda Foster</h4>
                  <p className="text-gray-600 text-sm">Operations Manager, Fusion Bistro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Seamlessly Integrates with Your Existing Tools</h2>
            <p className="text-xl text-gray-600">Connect TableTap CMS with the software you already use</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <Database className="h-8 w-8 text-gray-600" />
              </div>
              <h4 className="font-semibold text-gray-800">Accounting Software</h4>
              <p className="text-sm text-gray-600 mt-2">QuickBooks, Xero, Sage</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <Smartphone className="h-8 w-8 text-gray-600" />
              </div>
              <h4 className="font-semibold text-gray-800">Delivery Platforms</h4>
              <p className="text-sm text-gray-600 mt-2">DoorDash, Uber Eats, Grubhub</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <Users className="h-8 w-8 text-gray-600" />
              </div>
              <h4 className="font-semibold text-gray-800">HR Systems</h4>
              <p className="text-sm text-gray-600 mt-2">BambooHR, Workday, ADP</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <BarChart3 className="h-8 w-8 text-gray-600" />
              </div>
              <h4 className="font-semibold text-gray-800">Analytics Tools</h4>
              <p className="text-sm text-gray-600 mt-2">Google Analytics, Mixpanel</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Take Control of Your Restaurant?</h2>
          <p className="text-2xl mb-8 opacity-90">Join thousands of restaurants managing smarter with TableTap CMS</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-white text-orange-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Start Free Trial
            </button>
            <button 
              onClick={() => setShowDemo(true)}
              className="border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all"
            >
              Book a Demo
            </button>
          </div>
          <p className="text-sm opacity-75">Free 30-day trial • No setup fees • Cancel anytime</p>
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
        <CMSDemo onClose={() => setShowDemo(false)} />
      </Modal>
    </div>
  );
}

export default CMSPlatform;