import { motion } from 'framer-motion';
import { Lock, Mail } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function WorkerSignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would validate credentials here
    // For demo purposes, we'll just navigate to the admin dashboard
    navigate('/admin');
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 rounded-2xl"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Employee Portal</h2>
              <p className="text-gray-400">Access your workspace</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-gray-300">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-black/30 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm text-gray-300">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-black/30 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-700 bg-black/30 text-primary-500 focus:ring-primary-500"
                  />
                  <label htmlFor="remember" className="ml-2 text-sm text-gray-300">
                    Remember me
                  </label>
                </div>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  className="text-sm text-primary-400 hover:text-primary-300"
                  href="#"
                >
                  Forgot password?
                </motion.a>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
              >
                Sign in
              </motion.button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Need access? {' '}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  className="text-primary-400 hover:text-primary-300"
                  href="#"
                >
                  Contact IT Support
                </motion.a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}