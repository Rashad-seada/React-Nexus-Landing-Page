import { motion } from 'framer-motion';
import { ExternalLink, Eye, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { AdminHeader } from '../../components/admin/AdminHeader';
import { AdminSidebar } from '../../components/admin/AdminSidebar';
import { GlowingGradient } from '../../components/solutions/GlowingGradient';

const initialRequests = [
  {
    id: 1,
    clientName: 'Tech Solutions Inc.',
    projectType: 'Web Application',
    budget: '$50,000 - $100,000',
    status: 'New',
    date: '2024-03-15',
    description: 'E-commerce platform with integrated payment system',
  },
  {
    id: 2,
    clientName: 'Global Innovations',
    projectType: 'Mobile App',
    budget: '$25,000 - $50,000',
    status: 'In Review',
    date: '2024-03-14',
    description: 'Cross-platform mobile application for inventory management',
  },
];

export function AdminProjectRequestsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [requests] = useState(initialRequests);

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
            <h1 className="text-2xl font-bold text-white">Project Requests</h1>
          </div>

          <div className="glass-card rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-4 text-left text-sm text-gray-300">Client</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-300">Project Type</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-300">Budget</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-300">Status</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-300">Date</th>
                    <th className="px-6 py-4 text-right text-sm text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((request) => (
                    <motion.tr
                      key={request.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="border-b border-white/5 hover:bg-white/5"
                    >
                      <td className="px-6 py-4 text-white">{request.clientName}</td>
                      <td className="px-6 py-4 text-gray-300">{request.projectType}</td>
                      <td className="px-6 py-4 text-gray-300">{request.budget}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          request.status === 'New'
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {request.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{request.date}</td>
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
                            <ExternalLink className="w-4 h-4" />
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