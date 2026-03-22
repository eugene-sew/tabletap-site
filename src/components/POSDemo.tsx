import React, { useState } from 'react';
import { Search, CreditCard, User, Receipt, X, Check, Plus, Minus } from 'lucide-react';
import { menuItems, sampleOrders, CartItem, MenuItem, Order } from '../data/demoData';

interface POSDemoProps {
  onClose?: () => void;
}

const POSDemo: React.FC<POSDemoProps> = ({ onClose }) => {
  if (onClose) {
    // Suppress unused var lint issue
  }
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentOrder, setCurrentOrder] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>(sampleOrders);
  const [activeTab, setActiveTab] = useState<'order' | 'orders' | 'payment'>('order');
  const [customerName, setCustomerName] = useState('');
  const [tableNumber, setTableNumber] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'card' | 'mobile'>('card');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Appetizers', 'Mains', 'Pizza', 'Salads', 'Desserts', 'Beverages'];
  
  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch && item.isAvailable;
  });

  const orderTotal = currentOrder.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const addToOrder = (item: MenuItem) => {
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

  const updateOrderQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      setCurrentOrder(prev => prev.filter(item => item.id !== id));
    } else {
      setCurrentOrder(prev => prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const processPayment = () => {
    if (currentOrder.length === 0) return;

    const newOrder: Order = {
      id: `ORD-${String(orders.length + 1).padStart(3, '0')}`,
      tableNumber,
      items: currentOrder,
      total: orderTotal,
      status: 'pending',
      timestamp: new Date(),
      customerName: customerName || undefined,
      paymentMethod: paymentMethod === 'cash' ? 'Cash' : paymentMethod === 'card' ? 'Credit Card' : 'Mobile Pay'
    };

    setOrders(prev => [newOrder, ...prev]);
    setCurrentOrder([]);
    setCustomerName('');
    setShowPaymentModal(false);
    setActiveTab('orders');
  };

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    setOrders(prev => prev.map(order =>
      order.id === orderId ? { ...order, status } : order
    ));
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'preparing': return 'bg-blue-100 text-blue-800';
      case 'ready': return 'bg-green-100 text-green-800';
      case 'served': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="h-screen max-h-[90vh] flex bg-gray-100">
      {/* Left Sidebar - Menu Items */}
      <div className="w-2/3 bg-white border-r flex flex-col">
        {/* Header */}
        <div className="p-4 border-b bg-orange-500 text-white">
          <h1 className="text-xl font-bold">TableTap POS</h1>
          <p className="text-orange-100">Restaurant Management System</p>
        </div>

        {/* Search and Categories */}
        <div className="p-4 border-b">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <div className="flex space-x-2 overflow-x-auto">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-full text-sm whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-3 gap-3">
            {filteredItems.map(item => (
              <button
                key={item.id}
                onClick={() => addToOrder(item)}
                className="bg-white border rounded-lg p-3 hover:shadow-md transition-shadow text-left"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-20 object-cover rounded mb-2"
                />
                <h3 className="font-medium text-sm mb-1 line-clamp-1">{item.name}</h3>
                <p className="text-orange-600 font-bold">${item.price}</p>
                {item.isPopular && (
                  <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full mt-1">
                    Popular
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - Order Management */}
      <div className="w-1/3 flex flex-col">
        {/* Tabs */}
        <div className="flex border-b bg-white">
          <button
            onClick={() => setActiveTab('order')}
            className={`flex-1 py-3 px-4 text-sm font-medium ${
              activeTab === 'order'
                ? 'border-b-2 border-orange-500 text-orange-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Current Order
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`flex-1 py-3 px-4 text-sm font-medium ${
              activeTab === 'orders'
                ? 'border-b-2 border-orange-500 text-orange-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            All Orders
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto bg-white">
          {activeTab === 'order' && (
            <div className="p-4">
              {/* Customer Info */}
              <div className="mb-4 space-y-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Table Number</label>
                  <input
                    type="number"
                    value={tableNumber}
                    onChange={(e) => setTableNumber(parseInt(e.target.value) || 1)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    min="1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name (Optional)</label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Enter customer name"
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Order Items */}
              <div className="space-y-2 mb-4">
                {currentOrder.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No items in current order</p>
                ) : (
                  currentOrder.map(item => (
                    <div key={item.id} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <p className="text-gray-600 text-xs">${item.price} each</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateOrderQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-full hover:bg-gray-200"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateOrderQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-full hover:bg-gray-200"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Order Total */}
              {currentOrder.length > 0 && (
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold">Total: ${orderTotal.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() => setShowPaymentModal(true)}
                    className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                  >
                    Process Payment
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="p-4">
              <h3 className="font-bold mb-4">Recent Orders</h3>
              <div className="space-y-3">
                {orders.map(order => (
                  <div key={order.id} className="border rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{order.id}</span>
                        <span className="text-sm text-gray-600">Table {order.tableNumber}</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      {order.items.length} items • ${order.total.toFixed(2)}
                    </div>
                    <div className="flex space-x-2">
                      {order.status === 'pending' && (
                        <button
                          onClick={() => updateOrderStatus(order.id, 'preparing')}
                          className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600"
                        >
                          Start Preparing
                        </button>
                      )}
                      {order.status === 'preparing' && (
                        <button
                          onClick={() => updateOrderStatus(order.id, 'ready')}
                          className="px-3 py-1 bg-green-500 text-white text-xs rounded hover:bg-green-600"
                        >
                          Mark Ready
                        </button>
                      )}
                      {order.status === 'ready' && (
                        <button
                          onClick={() => updateOrderStatus(order.id, 'served')}
                          className="px-3 py-1 bg-gray-500 text-white text-xs rounded hover:bg-gray-600"
                        >
                          Mark Served
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl max-w-md w-full mx-4">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Process Payment</h2>
                <button
                  onClick={() => setShowPaymentModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Order Summary</h3>
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span>Table {tableNumber}</span>
                    {customerName && <span>{customerName}</span>}
                  </div>
                  <div className="space-y-1 text-sm">
                    {currentOrder.map(item => (
                      <div key={item.id} className="flex justify-between">
                        <span>{item.name} x{item.quantity}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t mt-2 pt-2 flex justify-between font-bold">
                    <span>Total</span>
                    <span>${orderTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-3">Payment Method</h3>
                <div className="space-y-2">
                  {[
                    { id: 'card', label: 'Credit/Debit Card', icon: CreditCard },
                    { id: 'cash', label: 'Cash', icon: Receipt },
                    { id: 'mobile', label: 'Mobile Pay', icon: User }
                  ].map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      onClick={() => setPaymentMethod(id as 'cash' | 'card' | 'mobile')}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg border transition-colors ${
                        paymentMethod === id
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{label}</span>
                      {paymentMethod === id && <Check className="h-5 w-5 text-orange-500 ml-auto" />}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={processPayment}
                className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Complete Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default POSDemo;
