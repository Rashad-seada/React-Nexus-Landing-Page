import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className = '',
  threshold = 0.2,
}: ScrollRevealProps) {
  const { ref, inView } = useScrollAnimation({ threshold, delay });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 50 };
      case 'down':
        return { opacity: 0, y: -50 };
      case 'left':
        return { opacity: 0, x: 50 };
      case 'right':
        return { opacity: 0, x: -50 };
      default:
        return { opacity: 0, y: 50 };
    }
  };

  const getFinalPosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 };
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={getInitialPosition()}
        animate={inView ? getFinalPosition() : getInitialPosition()}
        transition={{
          duration,
          ease: [0.25, 0.1, 0.25, 1], // Custom easing curve
          delay: delay * 0.1,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}