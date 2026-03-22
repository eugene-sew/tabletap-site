// Demo data for all three applications

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isAvailable: boolean;
  isPopular?: boolean;
  allergens?: string[];
  nutritionInfo?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

export interface CartItem extends MenuItem {
  quantity: number;
  specialInstructions?: string;
}

export interface Order {
  id: string;
  tableNumber: number;
  items: CartItem[];
  total: number;
  status: 'pending' | 'preparing' | 'ready' | 'served';
  timestamp: Date;
  customerName?: string;
  paymentMethod?: string;
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  email: string;
  status: 'active' | 'inactive';
  lastLogin: Date;
}

// Sample menu items with high-quality food descriptions
export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Truffle Risotto',
    description: 'Creamy Arborio rice with wild mushrooms, black truffle shavings, and aged Parmesan',
    price: 28,
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop',
    isAvailable: true,
    isPopular: true,
    allergens: ['dairy', 'gluten'],
    nutritionInfo: { calories: 520, protein: 18, carbs: 65, fat: 22 }
  },
  {
    id: '2',
    name: 'Grilled Atlantic Salmon',
    description: 'Fresh salmon fillet with herb butter, roasted vegetables, and lemon quinoa',
    price: 32,
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop',
    isAvailable: true,
    isPopular: true,
    allergens: ['fish'],
    nutritionInfo: { calories: 420, protein: 35, carbs: 25, fat: 18 }
  },
  {
    id: '3',
    name: 'Caesar Salad',
    description: 'Crisp romaine lettuce, house-made croutons, aged Parmesan, and classic Caesar dressing',
    price: 16,
    category: 'Salads',
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=400&h=300&fit=crop',
    isAvailable: true,
    allergens: ['dairy', 'gluten', 'eggs'],
    nutritionInfo: { calories: 280, protein: 12, carbs: 15, fat: 22 }
  },
  {
    id: '4',
    name: 'Margherita Pizza',
    description: 'Wood-fired pizza with San Marzano tomatoes, fresh mozzarella, and basil',
    price: 22,
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop',
    isAvailable: true,
    allergens: ['dairy', 'gluten'],
    nutritionInfo: { calories: 650, protein: 25, carbs: 75, fat: 28 }
  },
  {
    id: '5',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with molten center, vanilla ice cream, and berry compote',
    price: 12,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop',
    isAvailable: true,
    isPopular: true,
    allergens: ['dairy', 'gluten', 'eggs'],
    nutritionInfo: { calories: 480, protein: 8, carbs: 55, fat: 26 }
  },
  {
    id: '6',
    name: 'Craft Beer Selection',
    description: 'Rotating selection of local craft beers on tap',
    price: 8,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=300&fit=crop',
    isAvailable: true,
    allergens: ['gluten'],
    nutritionInfo: { calories: 150, protein: 2, carbs: 12, fat: 0 }
  },
  {
    id: '7',
    name: 'Pan-Seared Duck Breast',
    description: 'Five-spice duck breast with cherry gastrique and roasted root vegetables',
    price: 36,
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
    isAvailable: false,
    allergens: [],
    nutritionInfo: { calories: 580, protein: 42, carbs: 18, fat: 38 }
  },
  {
    id: '8',
    name: 'Burrata Caprese',
    description: 'Creamy burrata cheese with heirloom tomatoes, basil oil, and balsamic reduction',
    price: 18,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400&h=300&fit=crop',
    isAvailable: true,
    allergens: ['dairy'],
    nutritionInfo: { calories: 320, protein: 16, carbs: 12, fat: 24 }
  }
];

// Sample orders for POS demo
export const sampleOrders: Order[] = [
  {
    id: 'ORD-001',
    tableNumber: 12,
    items: [
      { ...menuItems[0], quantity: 1 },
      { ...menuItems[2], quantity: 2 }
    ],
    total: 60,
    status: 'preparing',
    timestamp: new Date(Date.now() - 15 * 60000),
    customerName: 'Sarah Johnson',
    paymentMethod: 'Credit Card'
  },
  {
    id: 'ORD-002',
    tableNumber: 8,
    items: [
      { ...menuItems[1], quantity: 1 },
      { ...menuItems[4], quantity: 1 }
    ],
    total: 44,
    status: 'ready',
    timestamp: new Date(Date.now() - 25 * 60000),
    customerName: 'Mike Chen'
  },
  {
    id: 'ORD-003',
    tableNumber: 5,
    items: [
      { ...menuItems[3], quantity: 2 },
      { ...menuItems[5], quantity: 3 }
    ],
    total: 68,
    status: 'pending',
    timestamp: new Date(Date.now() - 5 * 60000),
    customerName: 'Emma Davis'
  }
];

// Sample staff data for CMS demo
export const staffMembers: StaffMember[] = [
  {
    id: 'STAFF-001',
    name: 'Alex Rodriguez',
    role: 'Manager',
    email: 'alex@restaurant.com',
    status: 'active',
    lastLogin: new Date(Date.now() - 2 * 60 * 60000)
  },
  {
    id: 'STAFF-002',
    name: 'Maria Garcia',
    role: 'Chef',
    email: 'maria@restaurant.com',
    status: 'active',
    lastLogin: new Date(Date.now() - 30 * 60000)
  },
  {
    id: 'STAFF-003',
    name: 'John Smith',
    role: 'Server',
    email: 'john@restaurant.com',
    status: 'active',
    lastLogin: new Date(Date.now() - 4 * 60 * 60000)
  },
  {
    id: 'STAFF-004',
    name: 'Lisa Wong',
    role: 'Server',
    email: 'lisa@restaurant.com',
    status: 'inactive',
    lastLogin: new Date(Date.now() - 24 * 60 * 60000)
  }
];

// Analytics data for CMS demo
export const analyticsData = {
  todayStats: {
    orders: 127,
    revenue: 2847,
    averageOrderValue: 22.42,
    customerCount: 89
  },
  weeklyStats: {
    orders: [45, 52, 38, 67, 73, 89, 127],
    revenue: [1200, 1450, 980, 1890, 2100, 2450, 2847],
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  popularItems: [
    { name: 'Truffle Risotto', orders: 23, revenue: 644 },
    { name: 'Grilled Salmon', orders: 19, revenue: 608 },
    { name: 'Chocolate Lava Cake', orders: 31, revenue: 372 },
    { name: 'Margherita Pizza', orders: 15, revenue: 330 }
  ],
  inventoryAlerts: [
    { item: 'Truffle Oil', status: 'low', quantity: 2 },
    { item: 'Salmon Fillets', status: 'medium', quantity: 8 },
    { item: 'Mozzarella', status: 'low', quantity: 3 }
  ]
};

export const categories = ['All', 'Appetizers', 'Salads', 'Mains', 'Pizza', 'Desserts', 'Beverages'];
