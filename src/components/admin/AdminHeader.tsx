import { motion } from 'framer-motion';
import { Bell, Menu, Search } from 'lucide-react';

interface AdminHeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}

export function AdminHeader({ isSidebarOpen, setIsSidebarOpen }: AdminHeaderProps) {
  return (
    <header className="bg-black/30 backdrop-blur-xl border-b border-white/5">
      <div className="flex items-center justify-between p-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-white p-2 hover:bg-white/5 rounded-lg"
        >
          <Menu className="w-6 h-6" />
        </motion.button>
        
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <input
              type="text"
              placeholder="Search..."
              className="w-64 px-4 py-2 bg-white/5 border border-primary-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </motion.div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative text-white p-2 hover:bg-white/5 rounded-lg"
          >
            <Bell className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full" />
          </motion.button>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
}