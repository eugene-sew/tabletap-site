import React, { useState } from 'react';
import { BarChart3, Users, Package, Settings, Plus, Edit3, Trash2, X, Save, TrendingUp, DollarSign, Clock, AlertTriangle } from 'lucide-react';
import { menuItems, staffMembers, analyticsData, MenuItem, StaffMember } from '../data/demoData';

interface CMSDemoProps {
  onClose: () => void;
}

const CMSDemo: React.FC<CMSDemoProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'menu' | 'staff' | 'analytics'>('dashboard');
  const [menuItemsState, setMenuItemsState] = useState<MenuItem[]>(menuItems);
  const [staffState, setStaffState] = useState<StaffMember[]>(staffMembers);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [editingStaff, setEditingStaff] = useState<StaffMember | null>(null);
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [showAddStaffModal, setShowAddStaffModal] = useState(false);

  const handleUpdateMenuItem = (updatedItem: MenuItem) => {
    setMenuItemsState(prev => prev.map(item => 
      item.id === updatedItem.id ? updatedItem : item
    ));
    setEditingItem(null);
  };

  const handleDeleteMenuItem = (id: string) => {
    setMenuItemsState(prev => prev.filter(item => item.id !== id));
  };

  const handleUpdateStaff = (updatedStaff: StaffMember) => {
    setStaffState(prev => prev.map(staff => 
      staff.id === updatedStaff.id ? updatedStaff : staff
    ));
    setEditingStaff(null);
  };

  const handleDeleteStaff = (id: string) => {
    setStaffState(prev => prev.filter(staff => staff.id !== id));
  };

  const TabButton = ({ id, label, icon: Icon }: { id: string; label: string; icon: any }) => (
    <button
      onClick={() => setActiveTab(id as any)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
        activeTab === id
          ? 'bg-orange-500 text-white'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="h-screen max-h-[90vh] flex bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r flex flex-col">
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold text-gray-900">TableTap CMS</h1>
          <p className="text-sm text-gray-600">Restaurant Management</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <TabButton id="dashboard" label="Dashboard" icon={BarChart3} />
          <TabButton id="menu" label="Menu Management" icon={Package} />
          <TabButton id="staff" label="Staff Management" icon={Users} />
          <TabButton id="analytics" label="Analytics" icon={TrendingUp} />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'dashboard' && (
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Overview</h2>
              <p className="text-gray-600">Today's restaurant performance at a glance</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{analyticsData.todayStats.orders}</div>
                <div className="text-sm text-gray-600">Orders Today</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">${analyticsData.todayStats.revenue.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Revenue Today</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{analyticsData.todayStats.customerCount}</div>
                <div className="text-sm text-gray-600">Customers Served</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">${analyticsData.todayStats.averageOrderValue.toFixed(2)}</div>
                <div className="text-sm text-gray-600">Avg Order Value</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Popular Items */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Popular Items Today</h3>
                <div className="space-y-3">
                  {analyticsData.popularItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-600">{item.orders} orders</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-green-600">${item.revenue}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inventory Alerts */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Inventory Alerts</h3>
                <div className="space-y-3">
                  {analyticsData.inventoryAlerts.map((alert, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-red-50">
                      <div className="flex items-center space-x-3">
                        <AlertTriangle className="h-5 w-5 text-red-500" />
                        <div>
                          <div className="font-medium">{alert.item}</div>
                          <div className="text-sm text-gray-600">{alert.quantity} remaining</div>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        alert.status === 'low' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {alert.status} stock
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'menu' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Menu Management</h2>
                <p className="text-gray-600">Manage your restaurant's menu items and pricing</p>
              </div>
              <button
                onClick={() => setShowAddItemModal(true)}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>Add Item</span>
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {menuItemsState.map(item => (
                      <tr key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img src={item.image} alt={item.name} className="h-10 w-10 rounded-lg object-cover mr-3" />
                            <div>
                              <div className="text-sm font-medium text-gray-900">{item.name}</div>
                              <div className="text-sm text-gray-500 max-w-xs truncate">{item.description}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.category}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${item.price}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            item.isAvailable
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {item.isAvailable ? 'Available' : 'Unavailable'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                          <button
                            onClick={() => setEditingItem(item)}
                            className="text-orange-600 hover:text-orange-900"
                          >
                            <Edit3 className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteMenuItem(item.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'staff' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Staff Management</h2>
                <p className="text-gray-600">Manage your restaurant staff and permissions</p>
              </div>
              <button
                onClick={() => setShowAddStaffModal(true)}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>Add Staff</span>
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {staffState.map(staff => (
                      <tr key={staff.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{staff.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{staff.role}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{staff.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            staff.status === 'active'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {staff.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {staff.lastLogin.toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                          <button
                            onClick={() => setEditingStaff(staff)}
                            className="text-orange-600 hover:text-orange-900"
                          >
                            <Edit3 className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteStaff(staff.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Analytics & Reports</h2>
              <p className="text-gray-600">Detailed insights into your restaurant's performance</p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {/* Weekly Revenue Chart */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Weekly Revenue</h3>
                <div className="space-y-2">
                  {analyticsData.weeklyStats.days.map((day, index) => (
                    <div key={day} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{day}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-orange-500 h-2 rounded-full"
                            style={{
                              width: `${(analyticsData.weeklyStats.revenue[index] / Math.max(...analyticsData.weeklyStats.revenue)) * 100}%`
                            }}
                          />
                        </div>
                        <span className="text-sm font-medium">${analyticsData.weeklyStats.revenue[index]}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly Orders Chart */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Weekly Orders</h3>
                <div className="space-y-2">
                  {analyticsData.weeklyStats.days.map((day, index) => (
                    <div key={day} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{day}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{
                              width: `${(analyticsData.weeklyStats.orders[index] / Math.max(...analyticsData.weeklyStats.orders)) * 100}%`
                            }}
                          />
                        </div>
                        <span className="text-sm font-medium">{analyticsData.weeklyStats.orders[index]}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">↑ 15%</div>
                  <div className="text-sm text-gray-600">Revenue Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">↑ 8%</div>
                  <div className="text-sm text-gray-600">Order Volume</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">↑ 12%</div>
                  <div className="text-sm text-gray-600">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Edit Menu Item Modal */}
      {editingItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl max-w-md w-full mx-4">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Edit Menu Item</h2>
                <button
                  onClick={() => setEditingItem(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    value={editingItem.name}
                    onChange={(e) => setEditingItem({...editingItem, name: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                  <input
                    type="number"
                    value={editingItem.price}
                    onChange={(e) => setEditingItem({...editingItem, price: parseFloat(e.target.value)})}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Available</label>
                  <input
                    type="checkbox"
                    checked={editingItem.isAvailable}
                    onChange={(e) => setEditingItem({...editingItem, isAvailable: e.target.checked})}
                    className="rounded"
                  />
                </div>
              </div>
              <div className="flex space-x-3 mt-6">
                <button
                  onClick={() => handleUpdateMenuItem(editingItem)}
                  className="flex-1 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setEditingItem(null)}
                  className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CMSDemo;
