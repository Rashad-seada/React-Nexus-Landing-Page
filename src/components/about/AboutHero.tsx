import { motion } from 'framer-motion';
import { Award, Globe, Lightbulb, Users } from 'lucide-react';
import { GlowingGradient } from '../solutions/GlowingGradient';

const highlights = [
  {
    icon: Users,
    value: '200+',
    label: 'Global Clients',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    icon: Globe,
    value: '15+',
    label: 'Countries',
    gradient: 'from-pink-600 to-blue-600',
  },
  {
    icon: Award,
    value: '50+',
    label: 'Awards',
    gradient: 'from-blue-600 to-purple-600',
  },
  {
    icon: Lightbulb,
    value: '500+',
    label: 'Projects',
    gradient: 'from-purple-600 to-pink-600',
  },
];

export function AboutHero() {
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
                Innovating the Future
              </span>
              <span className="gradient-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                One Solution at a Time
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
              We're a team of passionate innovators dedicated to transforming businesses 
              through cutting-edge software solutions and unwavering commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
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
                      <item.icon className="w-6 h-6 text-primary-400" />
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
                    {item.value}
                  </motion.h2>
                  <p className="text-gray-400">{item.label}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}