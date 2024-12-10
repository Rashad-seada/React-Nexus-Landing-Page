import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface GlowingIconProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export function GlowingIcon({ href, icon: Icon, label }: GlowingIconProps) {
  return (
    <motion.a
      href={href}
      className="relative group"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/50 to-pink-600/50 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
      
      <div className="relative">
        <Icon className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors" />
      </div>
    </motion.a>
  );
}