import { motion } from 'framer-motion';
import { Code2, Cloud, Database, Lock, Smartphone, Zap } from 'lucide-react';
import { FloatingIcons } from './FloatingIcons';
import { GlowingGradient } from './GlowingGradient';

const technologies = [
  { icon: Code2, label: 'Custom Development' },
  { icon: Cloud, label: 'Cloud Solutions' },
  { icon: Database, label: 'Data Analytics' },
  { icon: Lock, label: 'Cybersecurity' },
  { icon: Smartphone, label: 'Mobile Apps' },
  { icon: Zap, label: 'Performance' },
];

export function SolutionsHero() {
  return (
    <section className="min-h-[80vh] relative flex items-center overflow-hidden pt-48">
      <GlowingGradient />
      <FloatingIcons icons={technologies} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white neon-glow block mb-2">
                Transform Your Business
              </span>
              <span className="gradient-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                With Our Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge software solutions designed to elevate your business 
              and drive innovation in the digital era.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.label}
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
                      <tech.icon className="w-6 h-6 text-primary-400" />
                    </div>
                  </motion.div>

                  <span className="text-white/80 group-hover:text-white font-medium text-center block transition-colors duration-300">
                    {tech.label}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}