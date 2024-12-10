import { motion } from 'framer-motion';

export function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          background: 'linear-gradient(90deg, rgba(168,85,247,0.1) 0%, rgba(236,72,153,0.1) 50%, rgba(168,85,247,0.1) 100%)',
          filter: 'blur(100px)',
        }}
      />
    </div>
  );
}