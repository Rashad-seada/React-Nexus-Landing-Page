import { motion } from 'framer-motion';
import { Code2, Laptop, LineChart, Rocket } from 'lucide-react';
import { GlowingGradient } from '../solutions/GlowingGradient';

const stats = [
  { value: '500+', label: 'Projects Delivered', icon: Code2 },
  { value: '98%', label: 'Client Satisfaction', icon: LineChart },
  { value: '85%', label: 'Return Clients', icon: Laptop },
  { value: '50+', label: 'Industry Awards', icon: Rocket },
];

export function PortfolioHero() {
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
                Our Success Stories
              </span>
              <span className="gradient-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                Transforming Ideas into Reality
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
              Explore our portfolio of innovative solutions that have helped businesses 
              across industries achieve remarkable digital transformations.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 rounded-2xl group-hover:from-purple-600/20 group-hover:to-pink-600/20 transition-all duration-500 blur-sm" />
                
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 rounded-2xl relative"
                >
                  <motion.div
                    className="w-12 h-12 mx-auto mb-4 relative"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center justify-center w-full h-full">
                      <stat.icon className="w-6 h-6 text-primary-400" />
                    </div>
                  </motion.div>

                  <motion.h2
                    className="text-3xl font-bold text-white mb-1"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    {stat.value}
                  </motion.h2>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}