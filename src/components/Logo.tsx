import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export function Logo() {
  return (
    <motion.div
      className="flex items-center gap-2 relative group"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glowing background effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icon with animation */}
      <motion.div
        className="relative"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg blur-lg" />
        <Code2 className="w-8 h-8 text-primary-400 relative" />
      </motion.div>

      {/* Text with gradient and glow */}
      <span className="text-2xl font-bold relative">
        <motion.span
          className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-primary-400"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Nexus
        </motion.span>
        <motion.span
          className="text-white ml-1"
          animate={{
            textShadow: [
              '0 0 5px rgba(168,85,247,0.5)',
              '0 0 20px rgba(168,85,247,0.5)',
              '0 0 5px rgba(168,85,247,0.5)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Tech
        </motion.span>
      </span>
    </motion.div>
  );
}