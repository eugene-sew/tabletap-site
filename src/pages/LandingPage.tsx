import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';
import Header from '../components/Header';
import DigitalMenuDemo from '../components/DigitalMenuDemo';
import POSDemo from '../components/POSDemo';
import CMSDemo from '../components/CMSDemo';
import ContactForm from '../components/ContactForm';
import { 
  Menu, 
  CreditCard, 
  Settings, 
  Utensils, 
  Tablet, 
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
  const [activeDemo, setActiveDemo] = useState<'menu' | 'pos' | 'cms' | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header onDemoClick={setActiveDemo} />

      {/* Hero Section */}
      <section className="bg-white py-20 relative mt-20 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-orange-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-semibold mb-6 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                The complete restaurant operating system
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                The Future of Dining,
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400 block mt-2">One Tap Away</span>
              </h1>
              <p className="text-xl text-gray-500 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Transform your restaurant with our complete technology suite: 
                <span className="text-gray-800 font-semibold"> Digital Menus</span>,
                <span className="text-gray-800 font-semibold"> POS</span>, and
                <span className="text-gray-800 font-semibold"> CMS</span> working perfectly together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/menu" className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5 transition-all text-center">
                  Get Started Today
                </Link>
                <button 
                  onClick={() => setActiveDemo('menu')}
                  className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm"
                >
                  Book a Demo
                </button>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-[2rem] shadow-2xl p-8 transform lg:rotate-2 hover:rotate-0 transition-all duration-500">
                <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="bg-orange-100 p-2 rounded-xl">
                        <Tablet className="h-6 w-6 text-orange-500" />
                      </div>
                      <span className="font-semibold text-gray-800">Table 12</span>
                    </div>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Active</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Today's Menu</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                      <div>
                        <span className="font-semibold block text-gray-800">Grilled Salmon</span>
                        <span className="text-xs text-gray-500">Fresh Atlantic salmon</span>
                      </div>
                      <span className="text-orange-500 font-bold">$24</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                      <div>
                        <span className="font-semibold block text-gray-800">Caesar Salad</span>
                        <span className="text-xs text-gray-500">Crisp romaine, croutons</span>
                      </div>
                      <span className="text-orange-500 font-bold">$12</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                      <div>
                        <span className="font-semibold block text-gray-800">Pasta Primavera</span>
                        <span className="text-xs text-gray-500">Seasonal vegetables</span>
                      </div>
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
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">Everything Your Restaurant Needs</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Three powerful platforms working seamlessly together to revolutionize your dining experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Digital Menu */}
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all group">
              <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Menu className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">Digital Menu</h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Modern menus that customers can scan and browse instantly. Update dishes, prices, and availability in real-time.
              </p>
              <Link to="/menu" className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                <span>Explore menu.tabletap</span>
                <ArrowRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* POS */}
            <div className="bg-orange-50/50 p-10 rounded-[2rem] shadow-sm border border-orange-100/50 hover:shadow-md hover:-translate-y-1 transition-all group">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform border border-gray-50">
                <CreditCard className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">Point of Sale</h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Fast, reliable payments built for restaurants. Process orders, split bills, and handle transactions seamlessly.
              </p>
              <Link to="/pos" className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                <span>Explore pos.tabletap</span>
                <ArrowRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* CMS */}
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all group">
              <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Settings className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">Content Management</h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Easily manage menu items, pricing, and inventory in one place. Keep everything synchronized across all platforms.
              </p>
              <Link to="/cms" className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                <span>Explore cms.tabletap</span>
                <ArrowRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why TableTap Section */}
      <section id="why-us" className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Why Choose TableTap?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join thousands of restaurants already serving smarter and delighting customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-white/5 border border-white/10 w-24 h-24 rounded-[2rem] flex items-center justify-center mx-auto mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                <Clock className="h-10 w-10 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4 text-white">Faster Service</h3>
              <p className="text-gray-400 leading-relaxed">
                Reduce wait times by 40% with digital ordering and streamlined kitchen operations.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-white/5 border border-white/10 w-24 h-24 rounded-[2rem] flex items-center justify-center mx-auto mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                <Heart className="h-10 w-10 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4 text-white">Better Experience</h3>
              <p className="text-gray-400 leading-relaxed">
                Delight customers with modern, intuitive interfaces and personalized dining experiences.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-white/5 border border-white/10 w-24 h-24 rounded-[2rem] flex items-center justify-center mx-auto mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                <TrendingUp className="h-10 w-10 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4 text-white">Smarter Management</h3>
              <p className="text-gray-400 leading-relaxed">
                Get real-time insights, automate inventory, and make data-driven decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-orange-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">Loved by Restaurants Everywhere</h2>
            <p className="text-xl text-gray-500">From cozy cafes to fine dining, TableTap works for every type of restaurant</p>
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
                  "TableTap transformed our small bistro. Orders are faster, customers love the digital menus, and we've increased revenue by 25%."
                </p>
              </div>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4 overflow-hidden">
                  <span className="text-gray-500 font-bold">MR</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Maria Rodriguez</h4>
                  <p className="text-gray-500 text-sm">Owner, Bella Vista Bistro</p>
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
                  "The POS system is incredibly fast and the staff learned it in no time. Customer satisfaction has never been higher."
                </p>
              </div>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4 overflow-hidden">
                  <span className="text-gray-500 font-bold">JC</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">James Chen</h4>
                  <p className="text-gray-500 text-sm">Manager, Urban Kitchen</p>
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
                  "Managing inventory and menus across our 3 locations is now effortless. TableTap is a game-changer for restaurant chains."
                </p>
              </div>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4 overflow-hidden">
                  <span className="text-gray-500 font-bold">ST</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Sarah Thompson</h4>
                  <p className="text-gray-500 text-sm">CEO, Green Leaf</p>
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

            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight relative z-10">Ready to Transform Your Restaurant?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
              Join the future of dining technology. Get started with TableTap today and see the difference in your first week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link to="/menu" className="bg-orange-500 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-orange-600 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                Get Started Now
              </Link>
              <button
                onClick={() => setActiveDemo('menu')}
                className="bg-white/10 border border-white/20 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Join hundreds of restaurants in Ghana already using TableTap to enhance their customer experience and streamline operations.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h3 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Let's Transform Your Restaurant</h3>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Our team is ready to help you implement the perfect TableTap solution for your restaurant. 
                  From digital menus to complete POS systems, we'll guide you every step of the way.
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-white border border-gray-100 shadow-sm">
                      <Phone className="h-6 w-6 text-orange-500" />
                    </div>
                  </div>
                  <div className="ml-5">
                    <h4 className="text-lg font-bold text-gray-900">Call Us</h4>
                    <p className="text-gray-500 mb-1">Speak with our team directly</p>
                    <a href="tel:0537211043" className="text-orange-500 hover:text-orange-600 font-semibold text-lg transition-colors">
                      0537211043
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-white border border-gray-100 shadow-sm">
                      <Mail className="h-6 w-6 text-orange-500" />
                    </div>
                  </div>
                  <div className="ml-5">
                    <h4 className="text-lg font-bold text-gray-900">Email Us</h4>
                    <p className="text-gray-500 mb-1">Get detailed information</p>
                    <a href="mailto:info@datasight.inc" className="text-orange-500 hover:text-orange-600 font-semibold text-lg transition-colors">
                      info@datasight.inc
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-white border border-gray-100 shadow-sm">
                      <MapPin className="h-6 w-6 text-orange-500" />
                    </div>
                  </div>
                  <div className="ml-5">
                    <h4 className="text-lg font-bold text-gray-900">Visit Us</h4>
                    <p className="text-gray-500 mb-1">We're located across Ghana</p>
                    <p className="text-gray-900 font-semibold text-lg">Accra • Ho • Kumasi</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-orange-50/50 border border-orange-100 rounded-[2rem] p-8">
                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <span className="bg-white p-1.5 rounded-lg shadow-sm mr-3">🚀</span>
                  Quick Setup Promise
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Most restaurants are up and running with TableTap in under 24 hours. 
                  Our team handles the entire setup process for you.
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/50 border border-gray-100 p-2 sm:p-4">
               <ContactForm />
            </div>
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

      {/* Demo Modals */}
      <Modal isOpen={activeDemo === 'menu'} onClose={() => setActiveDemo(null)} size="full">
        <DigitalMenuDemo onClose={() => setActiveDemo(null)} />
      </Modal>
      
      <Modal isOpen={activeDemo === 'pos'} onClose={() => setActiveDemo(null)} size="full">
        <POSDemo onClose={() => setActiveDemo(null)} />
      </Modal>
      
      <Modal isOpen={activeDemo === 'cms'} onClose={() => setActiveDemo(null)} size="full">
        <CMSDemo onClose={() => setActiveDemo(null)} />
      </Modal>
    </div>
  );
}

export default LandingPage;