import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FloatingIconsProps {
  icons: Array<{ icon: LucideIcon; label: string }>;
}

export function FloatingIcons({ icons }: FloatingIconsProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((tech, index) => {
        const Icon = tech.icon;
        return (
          <motion.div
            key={tech.label}
            className="absolute text-primary-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          >
            <Icon className="w-12 h-12" />
          </motion.div>
        );
      })}
    </div>
  );
}