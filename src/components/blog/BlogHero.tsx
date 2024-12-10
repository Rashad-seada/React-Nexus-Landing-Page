import { motion } from 'framer-motion';
import { Book, BookOpen, Bookmark, Lightbulb } from 'lucide-react';
import { GlowingGradient } from '../solutions/GlowingGradient';

const categories = [
  { icon: Lightbulb, label: 'Innovation', count: '25+' },
  { icon: Book, label: 'Technology', count: '40+' },
  { icon: BookOpen, label: 'Development', count: '35+' },
  { icon: Bookmark, label: 'Best Practices', count: '30+' },
];

export function BlogHero() {
  return (
    <section className="min-h-[80vh] relative flex items-center overflow-hidden pt-48">
      <GlowingGradient />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white neon-glow block mb-2">
                Latest Insights &
              </span>
              <span className="gradient-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                Tech Trends
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
              Stay ahead of the curve with our expert insights, industry analysis, 
              and deep dives into emerging technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 rounded-2xl group-hover:from-purple-600/20 group-hover:to-pink-600/20 transition-all duration-500 blur-sm" />
                
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 rounded-2xl relative cursor-pointer"
                >
                  <motion.div
                    className="w-12 h-12 mx-auto mb-4 relative"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center justify-center w-full h-full">
                      <category.icon className="w-6 h-6 text-primary-400" />
                    </div>
                  </motion.div>

                  <h2 className="text-lg font-semibold text-white mb-2">
                    {category.label}
                  </h2>
                  <motion.span
                    className="text-primary-400 font-bold"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    {category.count} Articles
                  </motion.span>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12"
          >
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-xl" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-6 py-4 bg-black/30 backdrop-blur-xl text-white placeholder-gray-400 rounded-full focus:outline-none border border-white/5 focus:border-primary-500/50 transition-colors duration-300 relative"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}