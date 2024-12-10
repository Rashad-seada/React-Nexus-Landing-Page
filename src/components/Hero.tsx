import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GlowingGradient } from './solutions/GlowingGradient';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-32">
      <GlowingGradient />

      {/* Animated grid background */}
      <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-20">
        {[...Array(400)].map((_, index) => (
          <motion.div
            key={index}
            className="border border-primary-500/10"
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            }}
            className="text-center mb-12"
          >
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span 
                className="block text-white neon-glow mb-4"
                animate={{
                  textShadow: [
                    "0 0 10px #a855f7, 0 0 20px #a855f7",
                    "0 0 20px #a855f7, 0 0 40px #a855f7",
                    "0 0 10px #a855f7, 0 0 20px #a855f7",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Shape the Future
              </motion.span>
              <motion.span 
                className="gradient-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                of Technology
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Pioneering the digital frontier with cutting-edge solutions that transform 
              businesses and redefine possibilities in the modern tech landscape.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group px-8 py-4 rounded-full overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute inset-px rounded-full bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                  <span className="relative text-white font-semibold">
                    Explore Solutions
                  </span>
                </motion.button>
              </Link>

              <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group px-8 py-4 rounded-full overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-300" />
                  <span className="relative text-white font-semibold">
                    View Portfolio
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}