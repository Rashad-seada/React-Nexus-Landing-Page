import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface GlowingIconProps {
  icon: LucideIcon;
  className?: string;
}

export function GlowingIcon({ icon: Icon, className = '' }: GlowingIconProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={`relative w-14 h-14 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
      <div className="relative flex items-center justify-center w-full h-full glass-effect rounded-xl">
        <Icon className="w-7 h-7 text-primary-400" />
      </div>
    </motion.div>
  );
}