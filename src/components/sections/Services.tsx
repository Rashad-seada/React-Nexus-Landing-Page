import { motion } from 'framer-motion';
import { Code2, Cloud, Smartphone, Workflow } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { OrbitingService } from '../ui/OrbitingService';

const services = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'Tailored solutions designed to address your unique business challenges and drive growth.',
    orbitColor: '#a855f7',
  },
  {
    icon: Cloud,
    title: 'Cloud Integration',
    description: 'Seamless cloud solutions that enhance scalability, security, and operational efficiency.',
    orbitColor: '#ec4899',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform apps that deliver exceptional user experiences.',
    orbitColor: '#3b82f6',
  },
  {
    icon: Workflow,
    title: 'Digital Transformation',
    description: 'Strategic implementation of digital solutions to modernize your business processes.',
    orbitColor: '#06b6d4',
  },
];

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Floating background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-purple-600/10 to-pink-600/10"
            animate={{
              x: [Math.random() * 100, Math.random() * -100],
              y: [Math.random() * 100, Math.random() * -100],
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(50px)',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6 neon-glow">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive software solutions tailored to elevate your business in the digital age.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <OrbitingService service={service} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}