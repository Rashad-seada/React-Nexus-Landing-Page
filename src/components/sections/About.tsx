import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { JourneyTimeline } from './about/JourneyTimeline';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-black/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6 neon-glow">Our Journey</h2>
          <p className="text-gray-400 mb-12">
            From humble beginnings to industry leadership, our journey has been defined by innovation,
            growth, and unwavering commitment to excellence.
          </p>
        </motion.div>

        <div ref={ref}>
          <JourneyTimeline inView={inView} />
        </div>
      </div>
    </section>
  );
}