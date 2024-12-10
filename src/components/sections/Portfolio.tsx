import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { ParticlesBackground } from '../ui/ParticlesBackground';
import { SpotlightCard } from '../ui/SpotlightCard';

const projects = [
  {
    title: 'AI-Powered Analytics Platform',
    description: 'Reduced data processing time by 75% for a Fortune 500 company.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['AI/ML', 'Big Data', 'Cloud'],
    metrics: ['75% faster processing', '40% cost reduction', '2M+ daily transactions'],
  },
  {
    title: 'Enterprise Resource Planning System',
    description: 'Streamlined operations for a global manufacturing company.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['ERP', 'Cloud', 'Analytics'],
    metrics: ['30% efficiency increase', '50% less paperwork', '99.9% uptime'],
  },
  {
    title: 'IoT Fleet Management Solution',
    description: 'Increased fleet efficiency by 40% for a logistics company.',
    image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=800',
    tags: ['IoT', 'Real-time Analytics', 'Mobile'],
    metrics: ['40% efficiency gain', '60% fuel savings', '24/7 monitoring'],
  },
];

export function Portfolio() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top } = ref.current?.getBoundingClientRect() ?? { left: 0, top: 0 };
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <ParticlesBackground />
      
      <div 
        ref={ref}
        onMouseMove={handleMouseMove}
        className="container mx-auto px-4 relative"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6 neon-glow">Our Success Stories</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover how we've helped businesses transform their operations and achieve remarkable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <SpotlightCard
              key={project.title}
              project={project}
              index={index}
              mouseX={mouseX}
              mouseY={mouseY}
            />
          ))}
        </div>
      </div>
    </section>
  );
}