import { motion } from 'framer-motion';
import { Brain, Cloud, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Solutions',
    description: 'Harness the power of artificial intelligence to automate and optimize your business processes.',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Scale your applications effortlessly with our robust cloud-native architecture.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Protect your data with military-grade encryption and advanced security protocols.',
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Experience lightning-fast performance with our optimized software solutions.',
  },
];

export function Features() {
  return (
    <div className="py-24 bg-gradient-to-b from-black to-primary-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We deliver innovative solutions that help businesses transform and grow in the digital era.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-primary-500/20 hover:border-primary-500/40 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-primary-400 mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}