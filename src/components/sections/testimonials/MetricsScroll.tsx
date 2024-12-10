import { motion } from 'framer-motion';

const metrics = [
  { value: '40%', label: 'Average Cost Reduction' },
  { value: '65%', label: 'Efficiency Increase' },
  { value: '50%', label: 'Time Saved' },
  { value: '99.9%', label: 'Uptime Guaranteed' },
  { value: '24/7', label: 'Support Available' },
];

export function MetricsScroll() {
  return (
    <div className="relative overflow-hidden py-8">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

      {/* Scrolling container */}
      <div className="flex gap-6">
        <motion.div
          className="flex gap-6 shrink-0"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...metrics, ...metrics].map((metric, index) => (
            <motion.div
              key={index}
              className="glass-card px-6 py-3 rounded-full flex items-center gap-3 shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                className="text-xl font-bold text-primary-400"
                animate={{
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {metric.value}
              </motion.span>
              <span className="text-gray-400 whitespace-nowrap">{metric.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Duplicate for seamless loop */}
        <motion.div
          className="flex gap-6 shrink-0"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...metrics, ...metrics].map((metric, index) => (
            <motion.div
              key={index}
              className="glass-card px-6 py-3 rounded-full flex items-center gap-3 shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                className="text-xl font-bold text-primary-400"
                animate={{
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {metric.value}
              </motion.span>
              <span className="text-gray-400 whitespace-nowrap">{metric.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}