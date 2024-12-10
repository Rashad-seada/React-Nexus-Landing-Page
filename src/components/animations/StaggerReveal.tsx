import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface StaggerRevealProps {
  children: React.ReactNode[];
  staggerDelay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export function StaggerReveal({
  children,
  staggerDelay = 0.1,
  duration = 0.5,
  className = '',
  threshold = 0.2,
}: StaggerRevealProps) {
  const { ref, inView } = useScrollAnimation({ threshold });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div ref={ref} className={className}>
      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {children.map((child, index) => (
          <motion.div key={index} variants={item}>
            {child}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}