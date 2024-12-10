import { motion, MotionValue, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface SpotlightCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    metrics: string[];
  };
  index: number;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export function SpotlightCard({ project, index, mouseX, mouseY }: SpotlightCardProps) {
  // Calculate spotlight position relative to card
  const spotlightX = useTransform(mouseX, (value) => {
    return value;
  });

  const spotlightY = useTransform(mouseY, (value) => {
    return value;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="glass-card rounded-2xl overflow-hidden group relative"
    >
      {/* Spotlight effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${spotlightX}px ${spotlightY}px, rgba(168,85,247,0.1), transparent 40%)`,
        }}
      />

      <div className="aspect-w-16 aspect-h-9">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <motion.div 
        className="p-6 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="text-sm px-3 py-1 rounded-full bg-primary-500/20 text-primary-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="space-y-2 mb-6">
          {project.metrics.map((metric, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-400" />
              <span className="text-gray-300">{metric}</span>
            </div>
          ))}
        </div>
        
        <motion.button
          whileHover={{ x: 5 }}
          className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
        >
          View Case Study <ArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}