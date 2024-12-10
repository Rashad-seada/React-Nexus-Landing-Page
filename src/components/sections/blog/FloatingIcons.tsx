import { motion } from 'framer-motion';
import { Book, Lightbulb } from 'lucide-react';

export function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, index) => {
        const Icon = index % 2 === 0 ? Book : Lightbulb;
        return (
          <motion.div
            key={index}
            className="absolute text-primary-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 2,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          >
            <Icon className="w-8 h-8" />
          </motion.div>
        );
      })}
    </div>
  );
}