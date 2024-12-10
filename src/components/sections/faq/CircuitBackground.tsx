import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CircuitBackgroundProps {
  focusedIndex: number | null;
}

export function CircuitBackground({ focusedIndex }: CircuitBackgroundProps) {
  const [lines, setLines] = useState<{ id: number; path: string; length: number }[]>([]);

  useEffect(() => {
    const generateLines = () => {
      const newLines = [];
      const numLines = 15;

      for (let i = 0; i < numLines; i++) {
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const path = generatePath(startX, startY);
        const length = calculatePathLength(path);

        newLines.push({
          id: i,
          path,
          length,
        });
      }

      setLines(newLines);
    };

    generateLines();
  }, []);

  const generatePath = (startX: number, startY: number) => {
    let path = `M ${startX} ${startY}`;
    let currentX = startX;
    let currentY = startY;
    const segments = Math.floor(Math.random() * 3) + 2;

    for (let i = 0; i < segments; i++) {
      const newX = currentX + (Math.random() * 40 - 20);
      const newY = currentY + (Math.random() * 40 - 20);
      path += ` L ${newX} ${newY}`;
      currentX = newX;
      currentY = newY;
    }

    return path;
  };

  const calculatePathLength = (path: string) => {
    const points = path.split(' ').filter(p => p !== 'M' && p !== 'L');
    let length = 0;
    
    for (let i = 2; i < points.length; i += 2) {
      const x1 = parseFloat(points[i - 2]);
      const y1 = parseFloat(points[i - 1]);
      const x2 = parseFloat(points[i]);
      const y2 = parseFloat(points[i + 1]);
      
      length += Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
    
    return length;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full">
        {lines.map((line) => (
          <motion.path
            key={line.id}
            d={line.path}
            stroke="url(#circuit-gradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: focusedIndex !== null ? 1 : [0, 1],
              opacity: focusedIndex !== null ? 0.6 : [0.2, 0.4, 0.2],
            }}
            transition={{
              pathLength: {
                duration: line.length * 0.01,
                ease: "linear",
                repeat: focusedIndex !== null ? 0 : Infinity,
              },
              opacity: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          />
        ))}
        
        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}