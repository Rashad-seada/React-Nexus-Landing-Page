import { motion, AnimatePresence } from 'framer-motion';
import { Edit2, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { AdminHeader } from '../../components/admin/AdminHeader';
import { AdminSidebar } from '../../components/admin/AdminSidebar';
import { BlogForm } from '../../components/admin/blogs/BlogForm';
import { GlowingGradient } from '../../components/solutions/GlowingGradient';

const initialBlogs = [
  {
    id: 1,
    title: '5 Benefits of Custom Software for Startups',
    category: 'Technology',
    date: '2024-03-15',
    status: 'Published',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'The Future of AI in Enterprise Software',
    category: 'Innovation',
    date: '2024-03-14',
    status: 'Draft',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
  },
];

export function AdminBlogsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [blogs, setBlogs] = useState(initialBlogs);

  const handleCreateBlog = (blog: any) => {
    setBlogs([
      ...blogs,
      {
        id: blogs.length + 1,
        ...blog,
        date: new Date().toISOString().split('T')[0],
        status: 'Draft',
      },
    ]);
  };

  const handleDeleteBlog = (id: number) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

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
            <h1 className="text-2xl font-bold text-white">Blog Posts</h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFormOpen(true)}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              New Post
            </motion.button>
          </div>

          <div className="glass-card rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-4 text-left text-sm text-gray-300">Title</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-300">Category</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-300">Date</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-300">Status</th>
                    <th className="px-6 py-4 text-right text-sm text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map((blog) => (
                    <motion.tr
                      key={blog.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="border-b border-white/5 hover:bg-white/5"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <span className="text-white">{blog.title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{blog.category}</td>
                      <td className="px-6 py-4 text-gray-300">{blog.date}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          blog.status === 'Published'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {blog.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 text-gray-400 hover:text-white"
                          >
                            <Edit2 className="w-4 h-4" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleDeleteBlog(blog.id)}
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

      <AnimatePresence>
        {isFormOpen && (
          <BlogForm
            onClose={() => setIsFormOpen(false)}
            onSubmit={handleCreateBlog}
          />
        )}
      </AnimatePresence>
    </div>
  );
}