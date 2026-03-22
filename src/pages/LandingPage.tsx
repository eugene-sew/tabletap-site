import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import {
  ArrowRight, Menu, Phone, Mail, MapPin, Star, Check,
  Zap, Shield, BarChart3, QrCode, Clock, Users, Twitter, Instagram, Linkedin,
  ChevronDown, Sparkles, Globe, Layers
} from 'lucide-react';
import {
  PhoneMockup, LaptopMockup, TabletMockup,
  DigitalMenuContent, POSContent, CMSContent
} from '../components/DeviceMockups';

// ── Scroll-animated section wrapper ─────────────────────────────────────────
const FadeUp: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children, delay = 0, className = ''
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ── Animated counter ─────────────────────────────────────────────────────────
const Counter: React.FC<{ to: number; suffix?: string; prefix?: string }> = ({ to, suffix = '', prefix = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: v => setDisplay(Math.round(v).toLocaleString()),
    });
    return controls.stop;
  }, [inView, to]);

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
};

// ── 3D Tilt Card ─────────────────────────────────────────────────────────────
const TiltCard: React.FC<{ children: React.ReactNode; className?: string; intensity?: number }> = ({
  children, className = '', intensity = 10
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-intensity, intensity]);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ── Marquee (auto-scroll) ────────────────────────────────────────────────────
const Marquee: React.FC<{ children: React.ReactNode; speed?: number }> = ({ children, speed = 30 }) => (
  <div className="overflow-hidden relative">
    <motion.div
      className="flex gap-6 w-max"
      animate={{ x: ['0%', '-50%'] }}
      transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
    >
      {children}{children}
    </motion.div>
  </div>
);

// ── Navbar ───────────────────────────────────────────────────────────────────
const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/95 backdrop-blur-xl border-b border-white/10 shadow-xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:shadow-orange-500/50 transition-shadow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6L12 2z" fill="white" opacity="0.9" />
                <circle cx="12" cy="12" r="3" fill="white" />
              </svg>
            </div>
            <span className="text-white text-xl font-bold tracking-tight">TableTap</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {[['Features', '#features'], ['Products', '#products'], ['Pricing', '#pricing'], ['Contact', '#contact']].map(([label, href]) => (
              <a key={label} href={href} className="text-gray-300 hover:text-white text-sm font-medium transition-colors">{label}</a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#contact" className="text-gray-300 hover:text-white text-sm font-medium transition-colors px-4 py-2">
              Book Demo
            </a>
            <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50">
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden text-gray-300 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="space-y-1.5">
              <div className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-gray-950/98 backdrop-blur-xl border-t border-white/10 px-4 py-6 space-y-4"
        >
          {[['Features', '#features'], ['Products', '#products'], ['Pricing', '#pricing'], ['Contact', '#contact']].map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)} className="block text-gray-300 hover:text-white font-medium py-2 transition-colors">{label}</a>
          ))}
          <a href="#contact" className="block bg-orange-500 text-white font-semibold px-5 py-3 rounded-xl text-center mt-4">
            Get Started Free
          </a>
        </motion.div>
      )}
    </nav>
  );
};

// ── Hero Section ─────────────────────────────────────────────────────────────
const Hero: React.FC = () => (
  <section className="relative min-h-screen bg-gray-950 flex items-center overflow-hidden pt-20">
    {/* Background mesh */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-600/8 rounded-full blur-[100px]" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* Left — copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold mb-8">
              <Sparkles className="w-3.5 h-3.5" />
              Complete Restaurant OS · Built for Africa
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6"
          >
            Run Your Restaurant.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-400">
              Tap by Tap.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 leading-relaxed mb-10 max-w-lg"
          >
            Digital menus, POS, and a management console — three platforms working as one. From Accra to Lagos to Nairobi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 text-center text-lg flex items-center justify-center gap-2">
              Get Started Free <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#products" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-4 rounded-2xl transition-all text-center text-lg">
              See the Products
            </a>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-6 text-sm text-gray-500"
          >
            {['✓ Free to start', '✓ No hardware required', '✓ 24h setup'].map(t => (
              <span key={t} className="text-gray-400">{t}</span>
            ))}
          </motion.div>
        </div>

        {/* Right — 3D device scene */}
        <div className="relative flex items-center justify-center" style={{ perspective: '1200px', minHeight: 520 }}>
          {/* Laptop — center, slightly back */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotateX: 15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute"
            style={{ zIndex: 2, transform: 'translateX(20px) translateY(10px) rotateY(-6deg)' }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <LaptopMockup><CMSContent /></LaptopMockup>
            </motion.div>
          </motion.div>

          {/* Phone — left front */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute"
            style={{ zIndex: 3, left: -10, bottom: 0 }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <PhoneMockup><DigitalMenuContent /></PhoneMockup>
            </motion.div>
          </motion.div>

          {/* Tablet — right front */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute"
            style={{ zIndex: 3, right: -20, bottom: 20 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <TabletMockup><POSContent /></TabletMockup>
            </motion.div>
          </motion.div>

          {/* Glow under devices */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-80 h-20 bg-orange-500/20 blur-3xl rounded-full" />
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="flex justify-center mt-12"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#features" className="flex flex-col items-center gap-2 text-gray-600 hover:text-gray-400 transition-colors">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </motion.div>
    </div>
  </section>
);

// ── Stats Bar ────────────────────────────────────────────────────────────────
const StatsBar: React.FC = () => (
  <section className="py-16 bg-gray-900 border-y border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {[
          { value: 500, suffix: '+', label: 'Restaurants' },
          { value: 50000, suffix: '+', label: 'Orders Processed' },
          { value: 98, suffix: '%', label: 'Uptime SLA' },
          { value: 24, suffix: 'h', label: 'Setup Time' },
        ].map(stat => (
          <FadeUp key={stat.label}>
            <div>
              <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

// ── Features Section ─────────────────────────────────────────────────────────
const Features: React.FC = () => (
  <section id="features" className="py-28 bg-gray-950">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeUp className="text-center mb-20">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold mb-4">
          <Layers className="w-3.5 h-3.5" />
          Platform Features
        </span>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-4 mb-4">
          Everything under one roof
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Three interconnected platforms that share data in real-time — no duplication, no integration headaches.
        </p>
      </FadeUp>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: QrCode,
            title: 'QR Digital Menu',
            desc: 'Customers scan and order from their own phone. Live updates, beautiful UI, zero app downloads.',
            features: ['Instant QR generation per table', 'Real-time price/availability updates', 'Multi-language support', 'Photo-rich item display'],
            color: 'from-orange-500 to-red-500',
            delay: 0,
          },
          {
            icon: Zap,
            title: 'POS Terminal',
            desc: 'A blazing-fast point of sale built for high-volume restaurant environments.',
            features: ['Touch-optimised cashier interface', 'Split bills & payment methods', 'Instant kitchen printer routing', 'Offline-capable'],
            color: 'from-blue-500 to-cyan-500',
            delay: 0.1,
          },
          {
            icon: BarChart3,
            title: 'Console CMS',
            desc: 'Manage your entire operation from one dashboard — menus, staff, analytics, and more.',
            features: ['Real-time revenue analytics', 'Staff roles & permissions', 'Audit logging', 'Multi-location support'],
            color: 'from-purple-500 to-pink-500',
            delay: 0.2,
          },
        ].map(({ icon: Icon, title, desc, features, color, delay }) => (
          <FadeUp key={title} delay={delay}>
            <TiltCard intensity={6} className="h-full">
              <div className="bg-gray-900 border border-white/8 rounded-3xl p-8 h-full hover:border-white/15 transition-colors">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{desc}</p>
                <ul className="space-y-2.5">
                  {features.map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-orange-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

// ── Product Showcases ────────────────────────────────────────────────────────
const ProductShowcase: React.FC = () => {
  const products = [
    {
      tag: 'Digital Menu',
      headline: 'Scan. Browse. Order.',
      sub: 'Give every table a restaurant-grade digital menu. Customers browse, customize and submit orders from their phone — no app, no friction.',
      bullets: [
        { icon: QrCode, text: 'Unique QR per table, generated in seconds' },
        { icon: Globe, text: 'Works on any phone, no app download' },
        { icon: Zap, text: 'Orders appear in the console instantly' },
        { icon: Clock, text: 'Menu updates propagate in real-time' },
      ],
      device: <PhoneMockup><DigitalMenuContent /></PhoneMockup>,
      align: 'left',
      accent: 'orange',
    },
    {
      tag: 'POS Terminal',
      headline: 'Checkout in seconds, not minutes.',
      sub: 'A POS designed for the pace of restaurants. Process orders, split bills, handle cash and mobile money — all from a touch screen.',
      bullets: [
        { icon: Zap, text: 'Average checkout under 15 seconds' },
        { icon: Users, text: 'Per-staff session tracking' },
        { icon: Shield, text: 'Offline mode for connectivity gaps' },
        { icon: BarChart3, text: 'End-of-day sales reports' },
      ],
      device: <TabletMockup><POSContent /></TabletMockup>,
      align: 'right',
      accent: 'blue',
    },
    {
      tag: 'Console & Analytics',
      headline: 'Your entire restaurant on one screen.',
      sub: 'The command centre for restaurant owners and managers. Track revenue, manage staff, update menus, and read the data that drives decisions.',
      bullets: [
        { icon: BarChart3, text: 'Revenue trends, top items, peak hours' },
        { icon: Users, text: 'Role-based staff permissions' },
        { icon: Shield, text: 'Full audit log of every action' },
        { icon: Globe, text: 'Multi-location ready' },
      ],
      device: <LaptopMockup><CMSContent /></LaptopMockup>,
      align: 'left',
      accent: 'purple',
    },
  ];

  return (
    <section id="products" className="py-28 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {products.map(({ tag, headline, sub, bullets, device, align, accent }) => (
          <div key={tag} className={`grid lg:grid-cols-2 gap-16 items-center ${align === 'right' ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}>
            {/* Copy */}
            <FadeUp>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4
                ${accent === 'orange' ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' :
                  accent === 'blue' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                    'bg-purple-500/10 text-purple-400 border border-purple-500/20'}`}>
                {tag}
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">{headline}</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">{sub}</p>
              <ul className="space-y-4">
                {bullets.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5
                      ${accent === 'orange' ? 'bg-orange-500/15' : accent === 'blue' ? 'bg-blue-500/15' : 'bg-purple-500/15'}`}>
                      <Icon className={`w-4 h-4 ${accent === 'orange' ? 'text-orange-400' : accent === 'blue' ? 'text-blue-400' : 'text-purple-400'}`} />
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed pt-1">{text}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>

            {/* Device */}
            <FadeUp delay={0.15}>
              <div className="flex items-center justify-center relative">
                <div className={`absolute inset-0 blur-3xl opacity-20 rounded-full
                  ${accent === 'orange' ? 'bg-orange-500' : accent === 'blue' ? 'bg-blue-500' : 'bg-purple-500'}`} />
                <TiltCard intensity={5} className="relative z-10">
                  {device}
                </TiltCard>
              </div>
            </FadeUp>
          </div>
        ))}
      </div>
    </section>
  );
};

// ── How it Works ─────────────────────────────────────────────────────────────
const HowItWorks: React.FC = () => (
  <section className="py-28 bg-gray-900 border-y border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeUp className="text-center mb-20">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">Up and running in 24 hours</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">We handle the setup. You focus on the food.</p>
      </FadeUp>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-12 left-[33%] right-[33%] h-px bg-gradient-to-r from-orange-500/50 via-orange-500 to-orange-500/50" />

        {[
          { step: '01', title: 'Sign Up', desc: 'Create your account and your restaurant workspace is provisioned instantly — schema, settings, and all.', icon: '🚀' },
          { step: '02', title: 'Configure', desc: "Add your menu items, set your table layout, and invite your team. We've designed every step to take under 10 minutes.", icon: '⚙️' },
          { step: '03', title: 'Go Live', desc: "Print your QR codes, open the POS on any device, and you're live. Orders flow from table to kitchen in seconds.", icon: '✅' },
        ].map(({ step, title, desc, icon }, i) => (
          <FadeUp key={step} delay={i * 0.15}>
            <div className="text-center relative">
              <div className="w-24 h-24 bg-gray-800 border border-white/10 rounded-3xl flex items-center justify-center mx-auto mb-6 relative z-10 text-3xl shadow-2xl">
                {icon}
              </div>
              <div className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-2">{step}</div>
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

// ── Pricing ──────────────────────────────────────────────────────────────────
const Pricing: React.FC = () => {
  const [annual, setAnnual] = useState(false);
  const plans = [
    {
      name: 'Starter',
      tag: 'Free forever',
      monthly: 0,
      desc: 'Perfect for new or small restaurants testing the waters.',
      color: 'border-white/10',
      highlight: false,
      features: ['Up to 3 staff members', 'Digital menu + QR codes', 'Basic POS', '1 location', 'Email support'],
    },
    {
      name: 'Growth',
      tag: 'Most popular',
      monthly: 199,
      desc: 'For restaurants ready to scale operations and gain deeper insights.',
      color: 'border-orange-500',
      highlight: true,
      features: ['Up to 10 staff members', 'All Starter features', 'Audit log & analytics', 'Priority support', 'Custom branding'],
    },
    {
      name: 'Pro',
      tag: 'Multi-location',
      monthly: 499,
      desc: 'Full power for restaurant groups and enterprise operations.',
      color: 'border-white/10',
      highlight: false,
      features: ['Unlimited staff', 'Up to 5 locations', 'Advanced analytics', 'Dedicated onboarding', 'SLA guarantee'],
    },
  ];

  return (
    <section id="pricing" className="py-28 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">Simple, transparent pricing</h2>
          <p className="text-xl text-gray-400 mb-8">Start free. Scale when you're ready.</p>

          {/* Annual toggle */}
          <div className="inline-flex items-center gap-4 bg-gray-900 border border-white/10 rounded-2xl p-1.5">
            <button onClick={() => setAnnual(false)} className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${!annual ? 'bg-white text-gray-900' : 'text-gray-400 hover:text-white'}`}>Monthly</button>
            <button onClick={() => setAnnual(true)} className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${annual ? 'bg-white text-gray-900' : 'text-gray-400 hover:text-white'}`}>
              Annual <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">-17%</span>
            </button>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map(({ name, tag, monthly, desc, color, highlight, features }, i) => {
            const price = annual ? Math.round(monthly * 0.83) : monthly;
            return (
              <FadeUp key={name} delay={i * 0.1}>
                <div className={`relative rounded-3xl border-2 ${color} p-8 h-full flex flex-col ${highlight ? 'bg-orange-500/5' : 'bg-gray-900'}`}>
                  {highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-white">{name}</h3>
                      <span className="text-xs text-gray-500 font-medium">{tag}</span>
                    </div>
                    <div className="flex items-end gap-1 mb-3">
                      {monthly === 0 ? (
                        <span className="text-4xl font-extrabold text-white">Free</span>
                      ) : (
                        <>
                          <span className="text-gray-500 text-lg self-start mt-1">₵</span>
                          <span className="text-4xl font-extrabold text-white">{price.toLocaleString()}</span>
                          <span className="text-gray-500 text-sm mb-1">/mo</span>
                        </>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm">{desc}</p>
                  </div>

                  <ul className="space-y-3 flex-1 mb-8">
                    {features.map(f => (
                      <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                        <Check className={`w-4 h-4 flex-shrink-0 ${highlight ? 'text-orange-400' : 'text-gray-500'}`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`block text-center font-bold py-3.5 rounded-2xl transition-all text-sm ${highlight
                      ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30'
                      : 'bg-white/8 hover:bg-white/15 text-white border border-white/10'}`}
                  >
                    {monthly === 0 ? 'Get Started Free' : 'Start Trial'}
                  </a>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  { quote: "TableTap transformed our small bistro. Orders are faster and we've increased revenue by 25%.", name: 'Akosua Mensah', title: 'Owner, Chop Life Kitchen', initials: 'AM' },
  { quote: "The POS system is incredibly fast and staff learned it in hours. Customer satisfaction is up.", name: 'Kwame Darko', title: 'Manager, Urban Grille Accra', initials: 'KD' },
  { quote: "Managing our 3 locations is now effortless. The analytics alone are worth every pesewa.", name: 'Sarah Thompson', title: 'CEO, Green Leaf Group', initials: 'ST' },
  { quote: "QR menus reduced our ordering errors to near zero. Guests love the experience.", name: 'Ama Asante', title: 'F&B Director, Grand Palace Hotel', initials: 'AA' },
  { quote: "Setup was done in a day. The team was incredibly supportive throughout.", name: 'Yaw Boateng', title: "Owner, Yaw's Spot", initials: 'YB' },
  { quote: "Real-time sales data helps us make smarter decisions about staffing and inventory.", name: 'Efua Agyeman', title: 'Operations, Kempinski Accra', initials: 'EA' },
];

const Testimonials: React.FC = () => (
  <section className="py-28 bg-gray-900 border-y border-white/5 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <FadeUp className="text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">Loved by restaurants</h2>
        <div className="flex items-center justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-orange-400 fill-current" />)}
          <span className="ml-2 text-gray-400 text-sm">4.9/5 from 200+ reviews</span>
        </div>
      </FadeUp>
    </div>

    <Marquee speed={40}>
      {testimonials.map(t => (
        <div key={t.name} className="w-80 flex-shrink-0 bg-gray-800 border border-white/8 rounded-3xl p-6">
          <div className="flex gap-0.5 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-orange-400 fill-current" />)}
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-5">"{t.quote}"</p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              {t.initials}
            </div>
            <div>
              <div className="text-white text-sm font-semibold">{t.name}</div>
              <div className="text-gray-500 text-xs">{t.title}</div>
            </div>
          </div>
        </div>
      ))}
    </Marquee>
  </section>
);

// ── Contact / CTA ────────────────────────────────────────────────────────────
const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', restaurant: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Big CTA headline */}
        <FadeUp className="text-center mb-20">
          <div className="inline-block bg-orange-500/10 border border-orange-500/20 rounded-3xl px-12 py-14 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Ready to transform your restaurant?
            </h2>
            <p className="text-gray-400 text-xl mb-8">Join hundreds of restaurants already running smarter on TableTap.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact-form" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-2xl shadow-orange-500/30 text-center">
                Book a Free Demo
              </a>
              <a href="tel:0537211043" className="bg-white/8 hover:bg-white/15 border border-white/10 text-white font-semibold px-8 py-4 rounded-2xl transition-all text-center flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> Call Us Now
              </a>
            </div>
          </div>
        </FadeUp>

        {/* Contact details + form */}
        <div id="contact-form" className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeUp>
            <h3 className="text-3xl font-bold text-white mb-4">Let's get you set up</h3>
            <p className="text-gray-400 leading-relaxed mb-10">
              Our team will reach out within a few hours to walk you through setup. Most restaurants go live within 24 hours.
            </p>
            <div className="space-y-6">
              {[
                { icon: Phone, label: 'Call Us', value: '0537211043', href: 'tel:0537211043' },
                { icon: Mail, label: 'Email Us', value: 'info@datasight.inc', href: 'mailto:info@datasight.inc' },
                { icon: MapPin, label: 'Offices', value: 'Accra · Ho · Kumasi', href: '#' },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-800 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm">{label}</div>
                    <a href={href} className="text-white font-semibold hover:text-orange-400 transition-colors">{value}</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-orange-500/8 border border-orange-500/20 rounded-2xl p-6">
              <p className="text-orange-400 font-semibold mb-1">⚡ 24-hour setup promise</p>
              <p className="text-gray-400 text-sm">Our team handles everything — from configuring your menu to training your first cashier.</p>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="bg-gray-900 border border-white/10 rounded-3xl p-8">
              {sent ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">🎉</div>
                  <h4 className="text-2xl font-bold text-white mb-2">We'll be in touch!</h4>
                  <p className="text-gray-400">Expect a call or email within a few hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h4 className="text-xl font-bold text-white mb-6">Get started today</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">Your Name</label>
                      <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-gray-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-orange-500/50 transition-colors"
                        placeholder="John Mensah" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">Email</label>
                      <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-gray-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-orange-500/50 transition-colors"
                        placeholder="john@restaurant.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">Restaurant Name</label>
                      <input required value={form.restaurant} onChange={e => setForm({ ...form, restaurant: e.target.value })}
                        className="w-full bg-gray-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-orange-500/50 transition-colors"
                        placeholder="Savanna Kitchen" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">Phone</label>
                      <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-gray-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-orange-500/50 transition-colors"
                        placeholder="050 000 0000" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">Tell us about your restaurant</label>
                    <textarea rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-gray-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
                      placeholder="How many tables? Any specific needs?" />
                  </div>
                  <button type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 text-sm">
                    Book My Free Demo →
                  </button>
                  <p className="text-center text-gray-600 text-xs">No credit card required. We'll set up everything for you.</p>
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

// ── Footer ───────────────────────────────────────────────────────────────────
const Footer: React.FC = () => (
  <footer className="bg-gray-950 border-t border-white/5 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-2">
          <Link to="/" className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6L12 2z" fill="white" opacity="0.9" />
                <circle cx="12" cy="12" r="3" fill="white" />
              </svg>
            </div>
            <span className="text-white text-lg font-bold">TableTap</span>
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-xs">
            A product of DataSight.Inc — the complete restaurant technology platform built for African restaurants.
          </p>
          <div className="flex gap-4">
            {[Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 bg-gray-800 hover:bg-gray-700 border border-white/8 rounded-xl flex items-center justify-center transition-colors group">
                <Icon className="w-4 h-4 text-gray-500 group-hover:text-orange-400 transition-colors" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h5 className="text-white font-semibold text-sm mb-4">Products</h5>
          <ul className="space-y-2.5">
            {['Digital Menu', 'POS System', 'CMS Console', 'Analytics'].map(p => (
              <li key={p}><a href="#products" className="text-gray-500 hover:text-white text-sm transition-colors">{p}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-white font-semibold text-sm mb-4">Company</h5>
          <ul className="space-y-2.5">
            {[['About', '#'], ['Pricing', '#pricing'], ['Contact', '#contact'], ['Support', '#']].map(([l, h]) => (
              <li key={l}><a href={h} className="text-gray-500 hover:text-white text-sm transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm">© 2026 TableTap by DataSight.Inc. All rights reserved.</p>
        <p className="text-gray-700 text-xs">Built for restaurants across Ghana, Nigeria, and East Africa.</p>
      </div>
    </div>
  </footer>
);

// ── Main Export ──────────────────────────────────────────────────────────────
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <Hero />
      <StatsBar />
      <Features />
      <ProductShowcase />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
