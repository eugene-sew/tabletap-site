import React from 'react';

// ── Phone Mockup ─────────────────────────────────────────────────────────────
export const PhoneMockup: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`relative ${className}`} style={{ width: 240, height: 480 }}>
    {/* Outer shell */}
    <div className="absolute inset-0 rounded-[2.8rem] bg-gradient-to-b from-gray-800 to-gray-900 shadow-2xl shadow-black/60 border border-gray-700" />
    {/* Side buttons */}
    <div className="absolute -right-1 top-24 w-1 h-10 bg-gray-700 rounded-r-sm" />
    <div className="absolute -left-1 top-20 w-1 h-7 bg-gray-700 rounded-l-sm" />
    <div className="absolute -left-1 top-32 w-1 h-12 bg-gray-700 rounded-l-sm" />
    {/* Screen bezel */}
    <div className="absolute inset-[6px] rounded-[2.4rem] bg-black overflow-hidden">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-xl z-10" />
      {/* Status bar */}
      <div className="absolute top-5 left-0 right-0 flex justify-between items-center px-5 z-10">
        <span className="text-white text-[9px] font-semibold">9:41</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5">
            <div className="w-0.5 h-1.5 bg-white rounded-sm opacity-50" />
            <div className="w-0.5 h-2 bg-white rounded-sm opacity-70" />
            <div className="w-0.5 h-2.5 bg-white rounded-sm opacity-90" />
            <div className="w-0.5 h-3 bg-white rounded-sm" />
          </div>
          <div className="w-4 h-2 border border-white rounded-sm ml-1">
            <div className="w-3/4 h-full bg-green-400 rounded-sm" />
          </div>
        </div>
      </div>
      {/* Content area */}
      <div className="absolute inset-0 top-8 overflow-hidden">
        {children}
      </div>
    </div>
  </div>
);

// ── Laptop Mockup ────────────────────────────────────────────────────────────
export const LaptopMockup: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`relative ${className}`} style={{ width: 520 }}>
    {/* Screen */}
    <div className="relative bg-gray-900 rounded-t-xl border border-gray-700 shadow-2xl shadow-black/60 overflow-hidden" style={{ paddingBottom: '62%' }}>
      {/* Camera dot */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gray-600 z-10" />
      {/* Screen content */}
      <div className="absolute inset-0 top-5 overflow-hidden">
        {children}
      </div>
    </div>
    {/* Hinge */}
    <div className="h-2 bg-gradient-to-b from-gray-700 to-gray-800 border-x border-gray-700" />
    {/* Base / keyboard */}
    <div
      className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-2xl border border-t-0 border-gray-700"
      style={{ height: 24, perspective: '200px' }}
    >
      <div className="w-24 h-3 bg-gray-700/60 rounded-full mx-auto mt-2" />
    </div>
  </div>
);

// ── Tablet Mockup ────────────────────────────────────────────────────────────
export const TabletMockup: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`relative ${className}`} style={{ width: 340, height: 240 }}>
    {/* Shell */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 shadow-2xl shadow-black/60 border border-gray-700" />
    {/* Side button */}
    <div className="absolute -top-0.5 right-16 w-10 h-0.5 bg-gray-700 rounded-b-sm" />
    {/* Camera dot */}
    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gray-600 z-10" />
    {/* Screen */}
    <div className="absolute inset-[6px] rounded-xl bg-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {children}
      </div>
    </div>
    {/* Home indicator */}
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full" />
  </div>
);

// ── Digital Menu Content ─────────────────────────────────────────────────────
export const DigitalMenuContent: React.FC = () => (
  <div className="bg-gray-950 h-full text-white overflow-hidden">
    {/* Header */}
    <div className="bg-orange-500 px-4 pt-2 pb-3">
      <div className="text-center">
        <p className="text-orange-100 text-[9px] font-medium">TABLE 5</p>
        <h3 className="text-white font-bold text-sm">Savanna Kitchen</h3>
      </div>
    </div>
    {/* Category pills */}
    <div className="flex gap-1.5 px-3 py-2 overflow-x-hidden">
      {['All', 'Mains', 'Drinks', 'Sides'].map((c, i) => (
        <span key={c} className={`px-2.5 py-0.5 rounded-full text-[9px] font-semibold whitespace-nowrap ${i === 0 ? 'bg-orange-500 text-white' : 'bg-gray-800 text-gray-400'}`}>{c}</span>
      ))}
    </div>
    {/* Menu items */}
    <div className="px-3 space-y-2">
      {[
        { name: 'Jollof Rice', desc: 'Party style', price: '₵35', color: 'from-orange-500 to-red-500' },
        { name: 'Grilled Tilapia', desc: 'With banku', price: '₵55', color: 'from-blue-500 to-teal-500' },
        { name: 'Fufu & Soup', desc: 'Goat light soup', price: '₵45', color: 'from-green-500 to-emerald-500' },
      ].map(item => (
        <div key={item.name} className="flex items-center gap-2 bg-gray-900 rounded-xl p-2">
          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex-shrink-0`} />
          <div className="flex-1 min-w-0">
            <p className="text-white text-[10px] font-semibold truncate">{item.name}</p>
            <p className="text-gray-500 text-[9px] truncate">{item.desc}</p>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-orange-400 text-[10px] font-bold">{item.price}</span>
            <button className="bg-orange-500 text-white text-[8px] px-1.5 py-0.5 rounded-md mt-0.5">+Add</button>
          </div>
        </div>
      ))}
    </div>
    {/* Cart bar */}
    <div className="absolute bottom-0 left-0 right-0 bg-orange-500 mx-3 mb-2 rounded-xl px-3 py-2 flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center">
          <span className="text-white text-[9px] font-bold">2</span>
        </div>
        <span className="text-white text-[10px] font-semibold">View Cart</span>
      </div>
      <span className="text-white text-[10px] font-bold">₵90.00</span>
    </div>
  </div>
);

// ── POS Content ──────────────────────────────────────────────────────────────
export const POSContent: React.FC = () => (
  <div className="h-full bg-gray-950 flex text-white text-[9px]">
    {/* Order panel */}
    <div className="w-2/5 border-r border-gray-800 flex flex-col">
      <div className="px-2 py-1.5 border-b border-gray-800">
        <p className="font-semibold text-[10px]">Table 7</p>
        <p className="text-gray-500">3 items</p>
      </div>
      <div className="flex-1 px-2 py-1 space-y-1 overflow-hidden">
        {[['Jollof Rice', '×2', '₵70'], ['Tilapia', '×1', '₵55'], ['Malt', '×2', '₵16']].map(([n, q, p]) => (
          <div key={n} className="flex justify-between py-1 border-b border-gray-800/50">
            <span className="text-gray-300">{n}</span>
            <div className="flex gap-2">
              <span className="text-gray-500">{q}</span>
              <span className="text-orange-400 font-semibold">{p}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="px-2 py-2 border-t border-gray-800 bg-gray-900">
        <div className="flex justify-between mb-1"><span className="text-gray-400">Total</span><span className="text-white font-bold">₵141</span></div>
        <button className="w-full bg-orange-500 text-white font-semibold py-1.5 rounded-lg text-[9px]">Charge ₵141</button>
      </div>
    </div>
    {/* Menu grid */}
    <div className="flex-1 p-2">
      <div className="grid grid-cols-3 gap-1.5">
        {[
          { n: 'Jollof', c: 'bg-orange-500/20 text-orange-400', p: '₵35' },
          { n: 'Tilapia', c: 'bg-blue-500/20 text-blue-400', p: '₵55' },
          { n: 'Fufu', c: 'bg-green-500/20 text-green-400', p: '₵45' },
          { n: 'Malt', c: 'bg-purple-500/20 text-purple-400', p: '₵8' },
          { n: 'Waakye', c: 'bg-red-500/20 text-red-400', p: '₵30' },
          { n: 'Kelewele', c: 'bg-yellow-500/20 text-yellow-400', p: '₵20' },
        ].map(item => (
          <button key={item.n} className={`${item.c} rounded-lg py-2 px-1 text-center`}>
            <p className="font-semibold">{item.n}</p>
            <p className="text-gray-400 mt-0.5">{item.p}</p>
          </button>
        ))}
      </div>
    </div>
  </div>
);

// ── CMS Dashboard Content ─────────────────────────────────────────────────────
export const CMSContent: React.FC = () => (
  <div className="h-full bg-gradient-to-br from-gray-100 to-orange-50/30 overflow-hidden p-3">
    {/* Stat cards */}
    <div className="grid grid-cols-4 gap-2 mb-3">
      {[
        { label: 'Revenue', value: '₵12,450', up: true },
        { label: 'Orders', value: '284', up: true },
        { label: 'Avg Order', value: '₵43.84', up: false },
        { label: 'Top Item', value: 'Jollof', up: true },
      ].map(s => (
        <div key={s.label} className="bg-white rounded-xl p-2 shadow-sm border border-gray-100">
          <p className="text-gray-400 text-[7px] font-medium">{s.label}</p>
          <p className="text-gray-900 font-bold text-[9px] mt-0.5 truncate">{s.value}</p>
          <span className={`text-[7px] font-semibold ${s.up ? 'text-green-500' : 'text-gray-400'}`}>{s.up ? '↑ 12%' : '→ flat'}</span>
        </div>
      ))}
    </div>
    {/* Chart area */}
    <div className="bg-white rounded-xl p-2.5 shadow-sm border border-gray-100 mb-2">
      <p className="text-gray-500 text-[8px] font-semibold mb-2">Revenue Trend — Last 14 Days</p>
      <div className="flex items-end gap-1 h-12">
        {[30, 50, 40, 70, 55, 80, 60, 90, 75, 95, 70, 85, 100, 88].map((h, i) => (
          <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: i >= 10 ? '#f97316' : '#fed7aa' }} />
        ))}
      </div>
    </div>
    {/* Top items */}
    <div className="bg-white rounded-xl p-2.5 shadow-sm border border-gray-100">
      <p className="text-gray-500 text-[8px] font-semibold mb-1.5">Top Menu Items</p>
      {[['Jollof Rice', 85], ['Grilled Tilapia', 72], ['Fufu & Soup', 58]].map(([n, pct]) => (
        <div key={n as string} className="mb-1">
          <div className="flex justify-between mb-0.5">
            <span className="text-gray-700 text-[7px]">{n}</span>
            <span className="text-orange-500 text-[7px] font-semibold">{pct}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-1">
            <div className="bg-orange-500 h-1 rounded-full" style={{ width: `${pct}%` }} />
          </div>
        </div>
      ))}
    </div>
  </div>
);
