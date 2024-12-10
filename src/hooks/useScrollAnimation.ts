import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const { threshold = 0.2, triggerOnce = true, delay = 0 } = options;
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [inView, delay, hasAnimated]);

  return {
    ref,
    inView: hasAnimated || inView,
    hasAnimated,
  };
}