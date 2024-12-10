import { motion } from 'framer-motion';

export function GlowingGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary gradient blob */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-60"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-600/30 via-pink-500/30 to-blue-500/30 blur-3xl" />
      </motion.div>

      {/* Secondary gradient blob */}
      <motion.div
        className="absolute -top-20 -left-20 w-[400px] h-[400px] opacity-40"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-blue-600/30 via-purple-500/30 to-pink-500/30 blur-3xl" />
      </motion.div>
    </div>
  );
}