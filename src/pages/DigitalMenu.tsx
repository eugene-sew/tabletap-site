import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Utensils, 
  ArrowLeft, 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Leaf, 
  Flame,
  ShoppingCart,
  Plus,
  Minus,
  Heart
} from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  prepTime: string;
  dietary: string[];
  spiceLevel?: number;
  popular?: boolean;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Grilled Atlantic Salmon",
    description: "Fresh Atlantic salmon grilled to perfection, served with seasonal vegetables and lemon herb butter",
    price: 28,
    category: "Mains",
    image: "https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg",
    rating: 4.8,
    prepTime: "15-20 min",
    dietary: ["gluten-free", "keto"],
    popular: true
  },
  {
    id: 2,
    name: "Truffle Mushroom Risotto",
    description: "Creamy arborio rice with wild mushrooms, truffle oil, and aged parmesan cheese",
    price: 24,
    category: "Mains",
    image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
    rating: 4.6,
    prepTime: "20-25 min",
    dietary: ["vegetarian", "gluten-free"]
  },
  {
    id: 3,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce, house-made croutons, parmesan cheese, and our signature Caesar dressing",
    price: 16,
    category: "Salads",
    image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg",
    rating: 4.4,
    prepTime: "5-10 min",
    dietary: ["vegetarian"]
  },
  {
    id: 4,
    name: "Spicy Thai Curry",
    description: "Aromatic red curry with coconut milk, fresh vegetables, and jasmine rice",
    price: 22,
    category: "Mains",
    image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg",
    rating: 4.7,
    prepTime: "15-20 min",
    dietary: ["vegan", "gluten-free"],
    spiceLevel: 3
  },
  {
    id: 5,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
    price: 12,
    category: "Desserts",
    image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
    rating: 4.9,
    prepTime: "10-15 min",
    dietary: ["vegetarian"]
  },
  {
    id: 6,
    name: "Craft Beer Selection",
    description: "Local IPA, Wheat Beer, or Stout - Ask your server for today's selection",
    price: 8,
    category: "Beverages",
    image: "https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg",
    rating: 4.3,
    prepTime: "Immediate",
    dietary: []
  }
];

function DigitalMenu() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState<{[key: number]: number}>({});
  const [favorites, setFavorites] = useState<number[]>([]);

  const categories = ['All', 'Mains', 'Salads', 'Desserts', 'Beverages'];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (itemId: number) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId: number) => {
    setCart(prev => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0)
    }));
  };

  const toggleFavorite = (itemId: number) => {
    setFavorites(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((sum, [itemId, count]) => {
      const item = menuItems.find(item => item.id === parseInt(itemId));
      return sum + (item ? item.price * count : 0);
    }, 0);
  };

  const getDietaryIcon = (dietary: string) => {
    switch (dietary) {
      case 'vegetarian':
      case 'vegan':
        return <Leaf className="h-4 w-4 text-green-500" />;
      case 'gluten-free':
        return <span className="text-xs font-bold text-blue-500">GF</span>;
      case 'keto':
        return <span className="text-xs font-bold text-purple-500">K</span>;
      default:
        return null;
    }
  };

  const getSpiceIcons = (level: number) => {
    return Array.from({ length: 3 }, (_, i) => (
      <Flame 
        key={i} 
        className={`h-4 w-4 ${i < level ? 'text-red-500' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center text-gray-600 hover:text-orange-500 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back
              </Link>
              <div className="flex items-center space-x-2">
                <Utensils className="h-8 w-8 text-orange-500" />
                <span className="text-2xl font-bold text-gray-900">TableTap Menu</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Table 12</span>
              {getTotalItems() > 0 && (
                <div className="relative">
                  <ShoppingCart className="h-6 w-6 text-orange-500" />
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Bella Vista Bistro</h3>
              <p className="text-gray-600 text-sm mb-6">Authentic Italian cuisine with a modern twist</p>
              
              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search menu..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? 'bg-orange-500 text-white'
                          : 'text-gray-600 hover:bg-orange-50 hover:text-orange-600'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cart Summary */}
              {getTotalItems() > 0 && (
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-800 mb-3">Order Summary</h4>
                  <div className="space-y-2 mb-4">
                    {Object.entries(cart).map(([itemId, count]) => {
                      if (count === 0) return null;
                      const item = menuItems.find(item => item.id === parseInt(itemId));
                      if (!item) return null;
                      return (
                        <div key={itemId} className="flex justify-between text-sm">
                          <span>{item.name} x{count}</span>
                          <span>${(item.price * count).toFixed(2)}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="border-t pt-2 mb-4">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${getTotalPrice().toFixed(2)}</span>
                    </div>
                  </div>
                  <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                    Place Order
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Menu Items */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {selectedCategory === 'All' ? 'Full Menu' : selectedCategory}
              </h2>
              <p className="text-gray-600">
                {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''} available
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredItems.map(item => (
                <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                    {item.popular && (
                      <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </div>
                    )}
                    <button
                      onClick={() => toggleFavorite(item.id)}
                      className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
                    >
                      <Heart 
                        className={`h-5 w-5 ${
                          favorites.includes(item.id) 
                            ? 'text-red-500 fill-current' 
                            : 'text-gray-400'
                        }`} 
                      />
                    </button>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                      <span className="text-2xl font-bold text-orange-500">${item.price}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-orange-400 fill-current mr-1" />
                          <span className="text-sm font-medium">{item.rating}</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="text-sm">{item.prepTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {item.dietary.map(diet => (
                          <div key={diet} className="flex items-center">
                            {getDietaryIcon(diet)}
                          </div>
                        ))}
                        {item.spiceLevel && (
                          <div className="flex">
                            {getSpiceIcons(item.spiceLevel)}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                          disabled={!cart[item.id]}
                        >
                          <Minus className="h-4 w-4 text-gray-600" />
                        </button>
                        <span className="w-8 text-center font-medium">
                          {cart[item.id] || 0}
                        </span>
                        <button
                          onClick={() => addToCart(item.id)}
                          className="p-1 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors"
                        >
                          <Plus className="h-4 w-4 text-white" />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => addToCart(item.id)}
                        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium"
                      >
                        Add to Order
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalMenu;