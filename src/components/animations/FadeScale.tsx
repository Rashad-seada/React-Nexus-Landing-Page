import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface FadeScaleProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export function FadeScale({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
  threshold = 0.2,
}: FadeScaleProps) {
  const { ref, inView } = useScrollAnimation({ threshold, delay });

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{
          duration,
          ease: [0.25, 0.1, 0.25, 1],
          delay: delay * 0.1,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}