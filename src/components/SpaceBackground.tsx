import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const generateStars = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));
};

export function SpaceBackground() {
  const [stars] = useState(() => generateStars(200));

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Space video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-30"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Animated stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}

      {/* Shooting stars */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white"
            initial={{ x: "-10%", y: "-10%" }}
            animate={{
              x: ["0%", "100%"],
              y: ["0%", "100%"],
            }}
            transition={{
              duration: 2,
              delay: i * 3,
              repeat: Infinity,
              repeatDelay: 7,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: "0 0 20px 2px rgba(255, 255, 255, 0.4)",
            }}
          />
        ))}
      </div>
    </div>
  );
}