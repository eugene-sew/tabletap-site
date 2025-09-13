import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Utensils, 
  ArrowLeft, 
  Search, 
  CreditCard, 
  DollarSign,
  Clock,
  Users,
  TrendingUp,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  Receipt,
  Printer,
  Wifi,
  Battery,
  Settings
} from 'lucide-react';

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  category: string;
  notes?: string;
}

interface Table {
  id: number;
  number: string;
  status: 'available' | 'occupied' | 'reserved';
  guests: number;
  server: string;
  orderTotal: number;
}

const quickItems = [
  { id: 1, name: "Caesar Salad", price: 16, category: "Salads" },
  { id: 2, name: "Grilled Salmon", price: 28, category: "Mains" },
  { id: 3, name: "Pasta Primavera", price: 22, category: "Mains" },
  { id: 4, name: "Chocolate Cake", price: 12, category: "Desserts" },
  { id: 5, name: "Coffee", price: 4, category: "Beverages" },
  { id: 6, name: "Wine Glass", price: 12, category: "Beverages" },
  { id: 7, name: "Truffle Risotto", price: 24, category: "Mains" },
  { id: 8, name: "Craft Beer", price: 8, category: "Beverages" }
];

const tables: Table[] = [
  { id: 1, number: "T1", status: "occupied", guests: 4, server: "Alice", orderTotal: 85.50 },
  { id: 2, number: "T2", status: "available", guests: 0, server: "", orderTotal: 0 },
  { id: 3, number: "T3", status: "occupied", guests: 2, server: "Bob", orderTotal: 42.00 },
  { id: 4, number: "T4", status: "reserved", guests: 6, server: "Carol", orderTotal: 0 },
  { id: 5, number: "T5", status: "occupied", guests: 3, server: "Alice", orderTotal: 67.25 },
  { id: 6, number: "T6", status: "available", guests: 0, server: "", orderTotal: 0 }
];

function POSSystem() {
  const [currentOrder, setCurrentOrder] = useState<OrderItem[]>([]);
  const [selectedTable, setSelectedTable] = useState<Table | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'order' | 'tables' | 'reports'>('order');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash' | 'split'>('card');

  const filteredItems = quickItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToOrder = (item: typeof quickItems[0]) => {
    setCurrentOrder(prev => {
      const existing = prev.find(orderItem => orderItem.id === item.id);
      if (existing) {
        return prev.map(orderItem =>
          orderItem.id === item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      setCurrentOrder(prev => prev.filter(item => item.id !== id));
    } else {
      setCurrentOrder(prev =>
        prev.map(item => item.id === id ? { ...item, quantity } : item)
      );
    }
  };

  const removeFromOrder = (id: number) => {
    setCurrentOrder(prev => prev.filter(item => item.id !== id));
  };

  const getOrderTotal = () => {
    return currentOrder.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const getTax = () => {
    return getOrderTotal() * 0.08; // 8% tax
  };

  const getFinalTotal = () => {
    return getOrderTotal() + getTax();
  };

  const clearOrder = () => {
    setCurrentOrder([]);
    setSelectedTable(null);
  };

  const processPayment = () => {
    // Simulate payment processing
    alert(`Payment of $${getFinalTotal().toFixed(2)} processed successfully via ${paymentMethod}!`);
    clearOrder();
  };

  const getTableStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'occupied':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'reserved':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center text-gray-600 hover:text-orange-500 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back
              </Link>
              <div className="flex items-center space-x-2">
                <Utensils className="h-8 w-8 text-orange-500" />
                <span className="text-2xl font-bold text-gray-900">TableTap POS</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Wifi className="h-4 w-4 text-green-500" />
                <Battery className="h-4 w-4 text-green-500" />
                <span>Server: Alice Johnson</span>
              </div>
              <Settings className="h-6 w-6 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg w-fit">
          <button
            onClick={() => setActiveTab('order')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'order'
                ? 'bg-white text-orange-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            New Order
          </button>
          <button
            onClick={() => setActiveTab('tables')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'tables'
                ? 'bg-white text-orange-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Tables
          </button>
          <button
            onClick={() => setActiveTab('reports')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'reports'
                ? 'bg-white text-orange-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Reports
          </button>
        </div>

        {/* Order Tab */}
        {activeTab === 'order' && (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Menu Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Menu Items</h2>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search items..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filteredItems.map(item => (
                    <button
                      key={item.id}
                      onClick={() => addToOrder(item)}
                      className="p-4 border border-gray-200 rounded-xl hover:border-orange-500 hover:shadow-md transition-all text-left group"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-lg font-bold text-orange-500">
                          ${item.price}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">{item.category}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Current Order */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-800">Current Order</h2>
                  {selectedTable && (
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                      {selectedTable.number}
                    </span>
                  )}
                </div>

                {currentOrder.length === 0 ? (
                  <div className="text-center py-8">
                    <ShoppingCart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No items in order</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                      {currentOrder.map(item => (
                        <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-800">{item.name}</h4>
                            <p className="text-sm text-gray-500">${item.price} each</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors"
                            >
                              <Plus className="h-4 w-4 text-white" />
                            </button>
                            <button
                              onClick={() => removeFromOrder(item.id)}
                              className="p-1 rounded-full bg-red-100 hover:bg-red-200 transition-colors ml-2"
                            >
                              <Trash2 className="h-4 w-4 text-red-600" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>${getOrderTotal().toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax (8%):</span>
                        <span>${getTax().toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg border-t pt-2">
                        <span>Total:</span>
                        <span>${getFinalTotal().toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setPaymentMethod('card')}
                          className={`flex-1 p-3 rounded-lg border-2 transition-colors ${
                            paymentMethod === 'card'
                              ? 'border-orange-500 bg-orange-50 text-orange-700'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <CreditCard className="h-5 w-5 mx-auto mb-1" />
                          <span className="text-sm font-medium">Card</span>
                        </button>
                        <button
                          onClick={() => setPaymentMethod('cash')}
                          className={`flex-1 p-3 rounded-lg border-2 transition-colors ${
                            paymentMethod === 'cash'
                              ? 'border-orange-500 bg-orange-50 text-orange-700'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <DollarSign className="h-5 w-5 mx-auto mb-1" />
                          <span className="text-sm font-medium">Cash</span>
                        </button>
                        <button
                          onClick={() => setPaymentMethod('split')}
                          className={`flex-1 p-3 rounded-lg border-2 transition-colors ${
                            paymentMethod === 'split'
                              ? 'border-orange-500 bg-orange-50 text-orange-700'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <Users className="h-5 w-5 mx-auto mb-1" />
                          <span className="text-sm font-medium">Split</span>
                        </button>
                      </div>

                      <button
                        onClick={processPayment}
                        className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
                      >
                        Process Payment
                      </button>

                      <div className="flex space-x-2">
                        <button
                          onClick={clearOrder}
                          className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          Clear
                        </button>
                        <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center">
                          <Printer className="h-4 w-4 mr-2" />
                          Print
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tables Tab */}
        {activeTab === 'tables' && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Table Management</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tables.map(table => (
                <div
                  key={table.id}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all hover:shadow-md ${getTableStatusColor(table.status)} ${
                    selectedTable?.id === table.id ? 'ring-2 ring-orange-500' : ''
                  }`}
                  onClick={() => setSelectedTable(table)}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{table.number}</h3>
                    <span className="capitalize text-sm font-medium px-2 py-1 rounded-full bg-white bg-opacity-50">
                      {table.status}
                    </span>
                  </div>
                  
                  {table.status !== 'available' && (
                    <>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          <span>{table.guests} guests</span>
                        </div>
                        {table.server && (
                          <div className="flex items-center">
                            <span className="w-4 h-4 mr-2 bg-current rounded-full opacity-60"></span>
                            <span>Server: {table.server}</span>
                          </div>
                        )}
                        {table.orderTotal > 0 && (
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-2" />
                            <span>${table.orderTotal.toFixed(2)}</span>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === 'reports' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Today's Sales</p>
                    <p className="text-2xl font-bold text-gray-900">$2,847</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-green-500" />
                </div>
                <p className="text-sm text-green-600 mt-2">+12% from yesterday</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Orders</p>
                    <p className="text-2xl font-bold text-gray-900">127</p>
                  </div>
                  <Receipt className="h-8 w-8 text-blue-500" />
                </div>
                <p className="text-sm text-blue-600 mt-2">+8% from yesterday</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Avg Order</p>
                    <p className="text-2xl font-bold text-gray-900">$22.40</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-orange-500" />
                </div>
                <p className="text-sm text-orange-600 mt-2">+3% from yesterday</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Peak Hour</p>
                    <p className="text-2xl font-bold text-gray-900">7-8 PM</p>
                  </div>
                  <Clock className="h-8 w-8 text-purple-500" />
                </div>
                <p className="text-sm text-purple-600 mt-2">42 orders</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Top Selling Items Today</h3>
              <div className="space-y-4">
                {[
                  { name: "Grilled Salmon", orders: 23, revenue: 644 },
                  { name: "Caesar Salad", orders: 19, revenue: 304 },
                  { name: "Truffle Risotto", orders: 15, revenue: 360 },
                  { name: "Chocolate Cake", orders: 12, revenue: 144 },
                  { name: "Craft Beer", orders: 28, revenue: 224 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-800">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.orders} orders</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-800">${item.revenue}</p>
                      <p className="text-sm text-gray-500">revenue</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default POSSystem;