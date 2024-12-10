import { motion } from 'framer-motion';
import { BarChart2, Code2, Settings, Users, BookOpen, MessageSquare, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AdminSidebarProps {
  isOpen: boolean;
}

const menuItems = [
  { icon: BarChart2, label: 'Dashboard', path: '/admin' },
  { icon: BookOpen, label: 'Blogs', path: '/admin/blogs' },
  { icon: FileText, label: 'Project Requests', path: '/admin/project-requests' },
  { icon: MessageSquare, label: 'Contact Forms', path: '/admin/contact-forms' },
  { icon: Users, label: 'Employees', path: '/admin/employees' },
  { icon: Settings, label: 'Settings', path: '/admin/settings' },
];

export function AdminSidebar({ isOpen }: AdminSidebarProps) {
  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: isOpen ? 0 : -300 }}
      className="fixed top-0 left-0 h-full w-64 bg-black/30 backdrop-blur-xl border-r border-white/5 z-50"
    >
      <div className="p-6">
        <Link to="/" className="block mb-8">
          <div className="flex items-center gap-2">
            <Code2 className="w-8 h-8 text-primary-400" />
            <span className="text-2xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Nexus
              </span>
              <span className="text-white">Tech</span>
            </span>
          </div>
        </Link>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link key={item.label} to={item.path}>
              <motion.div
                whileHover={{ x: 5, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                className="flex items-center gap-3 text-gray-400 hover:text-white p-3 rounded-lg transition-colors"
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.aside>
  );
}