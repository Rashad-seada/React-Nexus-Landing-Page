import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function RippleBackground() {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRipples(current => {
        // Remove old ripples
        const filtered = current.filter(ripple => ripple.id > Date.now() - 4000);
        
        // Add new ripple
        return [...filtered, {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 100,
        }];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {ripples.map(ripple => (
        <motion.div
          key={ripple.id}
          className="absolute w-32 h-32 rounded-full"
          style={{
            left: `${ripple.x}%`,
            top: `${ripple.y}%`,
            background: 'radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)',
          }}
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 4, ease: "easeOut" }}
          onAnimationComplete={() => {
            setRipples(current => current.filter(r => r.id !== ripple.id));
          }}
        />
      ))}
    </div>
  );
}