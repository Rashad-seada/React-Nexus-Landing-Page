import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface BlogTileProps {
  post: {
    title: string;
    excerpt: string;
    image: string;
    category: string;
    readTime: string;
  };
  index: number;
}

export function BlogTile({ post, index }: BlogTileProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="glass-card rounded-2xl overflow-hidden group relative"
    >
      {/* Gradient embellishments */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="relative">
        <div className="aspect-w-16 aspect-h-9 mb-6">
          <img
            src={post.image}
            alt={post.title}
            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm text-primary-400">{post.category}</span>
            <span className="text-sm text-gray-400">{post.readTime}</span>
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-primary-400 transition-colors">
            {post.title}
          </h3>
          
          <p className="text-gray-400 mb-6">{post.excerpt}</p>
          
          <motion.button
            className="flex items-center gap-2 text-primary-400 group-hover:text-primary-300 transition-colors"
            whileHover={{ x: 5 }}
          >
            Read More <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}