import React, { useState, useMemo } from 'react';
import { Search, ShoppingCart, Plus, Minus, Heart, X } from 'lucide-react';
import { menuItems, categories, CartItem, MenuItem } from '../data/demoData';

interface DigitalMenuDemoProps {
  onClose?: () => void;
}

const DigitalMenuDemo: React.FC<DigitalMenuDemoProps> = ({ onClose }) => {
  if (onClose) {
    // Suppress unused var lint issue
  }
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>(['1', '2', '5']);
  const [showCart, setShowCart] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch && item.isAvailable;
    });
  }, [selectedCategory, searchTerm]);

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(cartItem => cartItem.id === item.id);
      if (existing) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateCartQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      setCart(prev => prev.filter(item => item.id !== id));
    } else {
      setCart(prev => prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const toggleFavorite = (id: string) => {
    setFavorites(prev =>
      prev.includes(id)
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="h-screen max-h-[90vh] flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Bella Vista Menu</h1>
              <p className="text-gray-600">Table 12 • Scan & Order</p>
            </div>
            <button
              onClick={() => setShowCart(true)}
              className="relative bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-orange-600 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="px-6 pb-4">
          <div className="flex space-x-2 overflow-x-auto">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
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
      </div>

      {/* Menu Items */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <div className="grid gap-4">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                />
                <div className="flex-1 p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        {item.isPopular && (
                          <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm mb-2 line-clamp-2">{item.description}</p>
                      <div className="flex items-center space-x-4">
                        <span className="text-xl font-bold text-orange-600">${item.price}</span>
                        {item.nutritionInfo && (
                          <span className="text-sm text-gray-500">{item.nutritionInfo.calories} cal</span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2 ml-4">
                      <button
                        onClick={() => toggleFavorite(item.id)}
                        className={`p-2 rounded-full transition-colors ${
                          favorites.includes(item.id)
                            ? 'text-red-500 bg-red-50'
                            : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                        }`}
                      >
                        <Heart className={`h-5 w-5 ${favorites.includes(item.id) ? 'fill-current' : ''}`} />
                      </button>
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-1"
                      >
                        <Plus className="h-4 w-4" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl max-w-md w-full mx-4 max-h-[80vh] overflow-hidden">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Your Order</h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="p-6 max-h-96 overflow-y-auto">
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Your cart is empty</p>
              ) : (
                <div className="space-y-4">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-600">${item.price} each</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-full hover:bg-gray-100"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-full hover:bg-gray-100"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {cart.length > 0 && (
              <div className="p-6 border-t">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold">Total: ${cartTotal.toFixed(2)}</span>
                </div>
                <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                  Send to Kitchen
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Item Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl max-w-lg w-full mx-4 max-h-[80vh] overflow-hidden">
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{selectedItem.name}</h2>
                  <p className="text-gray-600 mb-4">{selectedItem.description}</p>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              {selectedItem.nutritionInfo && (
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h3 className="font-semibold mb-2">Nutrition Information</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Calories: {selectedItem.nutritionInfo.calories}</div>
                    <div>Protein: {selectedItem.nutritionInfo.protein}g</div>
                    <div>Carbs: {selectedItem.nutritionInfo.carbs}g</div>
                    <div>Fat: {selectedItem.nutritionInfo.fat}g</div>
                  </div>
                </div>
              )}

              {selectedItem.allergens && selectedItem.allergens.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Allergens</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.allergens.map(allergen => (
                      <span key={allergen} className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                        {allergen}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-orange-600">${selectedItem.price}</span>
                <button
                  onClick={() => {
                    addToCart(selectedItem);
                    setSelectedItem(null);
                  }}
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DigitalMenuDemo;
