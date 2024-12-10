import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function GridBackground() {
  const [flashingCell, setFlashingCell] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlashingCell({
        x: Math.floor(Math.random() * 20),
        y: Math.floor(Math.random() * 20),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)]">
        {[...Array(400)].map((_, index) => {
          const x = index % 20;
          const y = Math.floor(index / 20);
          const isFlashing = flashingCell?.x === x && flashingCell?.y === y;

          return (
            <motion.div
              key={index}
              className="border border-primary-500/10"
              animate={isFlashing ? {
                backgroundColor: ['rgba(168,85,247,0)', 'rgba(168,85,247,0.2)', 'rgba(168,85,247,0)'],
              } : {}}
              transition={{ duration: 1 }}
            />
          );
        })}
      </div>
    </div>
  );
}