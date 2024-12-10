import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface OrbitingServiceProps {
  service: {
    icon: LucideIcon;
    title: string;
    description: string;
    orbitColor: string;
  };
  index: number;
}

export function OrbitingService({ service, index }: OrbitingServiceProps) {
  const { icon: Icon, title, description, orbitColor } = service;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="glass-card p-8 rounded-2xl relative group"
    >
      {/* Orbiting circles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{
            border: `1px solid ${orbitColor}`,
            borderRadius: '50%',
            opacity: 0.2,
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Light burst effect */}
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div
          className="w-full h-full rounded-2xl"
          style={{
            background: `radial-gradient(circle, ${orbitColor}20 0%, transparent 70%)`,
          }}
        />
      </motion.div>

      <div className="relative">
        <motion.div
          className="relative w-16 h-16 mx-auto mb-6"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-lg" />
          <div className="relative flex items-center justify-center w-full h-full glass-effect rounded-xl">
            <Icon className="w-8 h-8 text-primary-400" />
          </div>
        </motion.div>

        <h3 className="text-xl font-semibold text-white mb-4 text-center">{title}</h3>
        <p className="text-gray-400 text-center">{description}</p>
      </div>
    </motion.div>
  );
}