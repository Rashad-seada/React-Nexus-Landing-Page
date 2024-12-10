import { motion } from 'framer-motion';

export function AnimatedBlob() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary Blob */}
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

      {/* Secondary Blob */}
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

      {/* Accent Particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-400/50 rounded-full blur-sm"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
}