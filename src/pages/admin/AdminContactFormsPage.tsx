import { motion } from 'framer-motion';
import { Eye, Mail, MessageSquare, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { AdminHeader } from '../../components/admin/AdminHeader';
import { AdminSidebar } from '../../components/admin/AdminSidebar';
import { GlowingGradient } from '../../components/solutions/GlowingGradient';

const initialMessages = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john@example.com',
    subject: 'Partnership Opportunity',
    message: 'Interested in discussing potential collaboration...',
    status: 'Unread',
    date: '2024-03-15',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    subject: 'Project Inquiry',
    message: 'Looking for a custom software solution...',
    status: 'Read',
    date: '2024-03-14',
  },
];

export function AdminContactFormsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [messages] = useState(initialMessages);

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
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-white">Contact Form Submissions</h1>
          </div>

          <div className="glass-card rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-4 text-left text-sm text-gray-300">Name</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-300">Email</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-300">Subject</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-300">Status</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-300">Date</th>
                    <th className="px-6 py-4 text-right text-sm text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map((message) => (
                    <motion.tr
                      key={message.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="border-b border-white/5 hover:bg-white/5"
                    >
                      <td className="px-6 py-4 text-white">{message.name}</td>
                      <td className="px-6 py-4 text-gray-300">{message.email}</td>
                      <td className="px-6 py-4 text-gray-300">{message.subject}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          message.status === 'Unread'
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'bg-green-500/20 text-green-400'
                        }`}>
                          {message.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{message.date}</td>
                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 text-gray-400 hover:text-white"
                          >
                            <Eye className="w-4 h-4" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 text-primary-400 hover:text-primary-300"
                          >
                            <Mail className="w-4 h-4" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 text-red-400 hover:text-red-300"
                          >
                            <Trash2 className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}