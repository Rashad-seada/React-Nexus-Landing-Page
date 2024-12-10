import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GlassCard } from './GlassCard';

export function HeroContent() {
  return (
    <div className="relative z-10 max-w-4xl">
      <GlassCard delay={0.2} className="inline-block mb-6 px-4 py-2 rounded-full">
        <span className="text-primary-400 text-sm font-medium">
          Next-Gen Technology Solutions
        </span>
      </GlassCard>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white neon-glow block mb-2">
            Shape the Future
          </span>
          <span className="gradient-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
            of Technology
          </span>
        </h1>
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-xl text-gray-300 mb-8 max-w-2xl"
      >
        Pioneering the digital frontier with cutting-edge solutions that transform 
        businesses and redefine possibilities in the modern tech landscape.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="flex flex-wrap gap-6"
      >
        <Link to="/services">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="neon-box bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300"
          >
            Explore Solutions
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </Link>
        <Link to="/portfolio">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-effect text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
          >
            View Portfolio
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}