import { motion } from 'framer-motion';
import { Bell, Globe, Lock, Mail, Moon, Shield, User } from 'lucide-react';
import { useState } from 'react';
import { AdminHeader } from '../../components/admin/AdminHeader';
import { AdminSidebar } from '../../components/admin/AdminSidebar';
import { GlowingGradient } from '../../components/solutions/GlowingGradient';

export function AdminSettingsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState('en');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/20 to-black relative">
      <GlowingGradient />
      
      <AdminSidebar isOpen={isSidebarOpen} />

      <div className={`${isSidebarOpen ? 'ml-64' : 'ml-0'} transition-all duration-300 relative`}>
        <AdminHeader 
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <main className="p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">Settings</h1>
            <p className="text-gray-400">Manage your account and application preferences</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Settings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-6 rounded-xl col-span-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <User className="w-6 h-6 text-primary-400" />
                <h2 className="text-xl font-semibold text-white">Profile Settings</h2>
              </div>

              <form className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
                    />
                    <button className="absolute bottom-0 right-0 p-2 bg-primary-500 rounded-full text-white">
                      <User className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 bg-black/30 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
                          defaultValue="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 bg-black/30 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
                          defaultValue="Smith"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 bg-black/30 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
                        defaultValue="john@nexustech.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg"
                  >
                    Save Changes
                  </motion.button>
                </div>
              </form>
            </motion.div>

            {/* Preferences */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              {/* Notifications */}
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-6">
                  <Bell className="w-6 h-6 text-primary-400" />
                  <h2 className="text-xl font-semibold text-white">Notifications</h2>
                </div>
                <div className="space-y-4">
                  <label className="flex items-center justify-between">
                    <span className="text-gray-300">Email Notifications</span>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setEmailNotifications(!emailNotifications)}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        emailNotifications ? 'bg-primary-500' : 'bg-gray-600'
                      }`}
                    >
                      <motion.div
                        className="w-5 h-5 bg-white rounded-full shadow-lg"
                        animate={{ x: emailNotifications ? 28 : 4 }}
                      />
                    </motion.button>
                  </label>
                </div>
              </div>

              {/* Appearance */}
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-6">
                  <Moon className="w-6 h-6 text-primary-400" />
                  <h2 className="text-xl font-semibold text-white">Appearance</h2>
                </div>
                <div className="space-y-4">
                  <label className="flex items-center justify-between">
                    <span className="text-gray-300">Dark Mode</span>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setDarkMode(!darkMode)}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        darkMode ? 'bg-primary-500' : 'bg-gray-600'
                      }`}
                    >
                      <motion.div
                        className="w-5 h-5 bg-white rounded-full shadow-lg"
                        animate={{ x: darkMode ? 28 : 4 }}
                      />
                    </motion.button>
                  </label>
                </div>
              </div>

              {/* Language */}
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-6">
                  <Globe className="w-6 h-6 text-primary-400" />
                  <h2 className="text-xl font-semibold text-white">Language</h2>
                </div>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full px-4 py-2 bg-black/30 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                </select>
              </div>

              {/* Security */}
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-6">
                  <Shield className="w-6 h-6 text-primary-400" />
                  <h2 className="text-xl font-semibold text-white">Security</h2>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-4 py-2 bg-white/5 text-white rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4" />
                  Change Password
                </motion.button>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}