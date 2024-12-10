import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useState } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      className="relative max-w-xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Glowing border effect */}
      <motion.div
        className="absolute -inset-0.5 rounded-lg opacity-75"
        animate={{
          opacity: isFocused ? 0.9 : 0.5,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200" />
      </motion.div>

      <div className="relative flex items-center">
        <div className="relative w-full">
          <motion.div
            className="absolute inset-0 rounded-lg"
            animate={{
              boxShadow: isFocused
                ? '0 0 20px rgba(168, 85, 247, 0.4)'
                : '0 0 0px rgba(168, 85, 247, 0)',
            }}
            transition={{ duration: 0.3 }}
          />
          
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search questions..."
            className="w-full px-6 py-4 bg-black/30 backdrop-blur-xl text-white placeholder-gray-400 rounded-lg focus:outline-none border border-white/5 focus:border-primary-500/50 transition-colors duration-300"
          />
        </div>
        
        <motion.div
          className="absolute right-4"
          animate={{
            scale: isFocused ? 1.1 : 1,
            rotate: isFocused ? 360 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <Search className={`w-5 h-5 ${isFocused ? 'text-primary-400' : 'text-gray-400'} transition-colors duration-300`} />
        </motion.div>

        {/* Animated cursor glow */}
        {isFocused && (
          <motion.div
            className="absolute right-14 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-primary-400"
            animate={{
              opacity: [1, 0],
              height: ['24px', '20px'],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <div className="absolute inset-0 blur-sm bg-primary-400" />
          </motion.div>
        )}

        {/* Subtle gradient animation */}
        <motion.div
          className="absolute inset-0 rounded-lg opacity-0 pointer-events-none"
          animate={{
            background: [
              'radial-gradient(circle at 0% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 0% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </motion.div>
  );
}