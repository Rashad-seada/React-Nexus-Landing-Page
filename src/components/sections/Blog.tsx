import { motion } from 'framer-motion';
import { ArrowRight, Book, Lightbulb } from 'lucide-react';
import { GridBackground } from './blog/GridBackground';
import { FloatingIcons } from './blog/FloatingIcons';
import { BlogTile } from './blog/BlogTile';

const posts = [
  {
    title: '5 Benefits of Custom Software for Startups',
    excerpt: 'Discover how custom software can drive growth and efficiency for your startup.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    category: 'Business',
    readTime: '5 min read',
  },
  {
    title: 'The Future of AI in Enterprise Software',
    excerpt: 'Exploring how artificial intelligence is reshaping enterprise solutions.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    category: 'Technology',
    readTime: '8 min read',
  },
  {
    title: 'Cloud Migration: A Step-by-Step Guide',
    excerpt: 'Learn the best practices for seamless cloud migration.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    category: 'Cloud',
    readTime: '10 min read',
  },
];

export function Blog() {
  return (
    <section className="py-24 relative overflow-hidden">
      <GridBackground />
      <FloatingIcons />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6 neon-glow">Latest Insights</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest trends and insights in software development and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <BlogTile key={post.title} post={post} index={index} />
          ))}
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card inline-block p-8 rounded-2xl relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl group-hover:from-purple-600/20 group-hover:to-pink-600/20 transition-all duration-300" />
            
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400 mb-6">Get the latest insights delivered to your inbox.</p>
              
              <div className="flex gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative flex-1"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-75 blur group-hover:opacity-100 transition duration-300" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="relative w-full px-4 py-2 rounded-lg bg-black/50 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
                  />
                </motion.div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-colors neon-box"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}