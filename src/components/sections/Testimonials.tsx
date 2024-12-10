import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { TestimonialCard } from './testimonials/TestimonialCard';
import { MetricsScroll } from './testimonials/MetricsScroll';
import { RippleBackground } from '../ui/RippleBackground';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp',
    content: 'The team delivered an exceptional solution that transformed our business operations. Their expertise in AI and cloud technologies is unmatched.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    metrics: {
      cost: '40%',
      efficiency: '65%',
      time: '50%',
    },
  },
  {
    name: 'Michael Chen',
    role: 'CEO, InnovateCo',
    content: 'Working with this team was a game-changer for our startup. They understood our vision and delivered beyond our expectations.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    metrics: {
      cost: '35%',
      efficiency: '55%',
      time: '45%',
    },
  },
  {
    name: 'Emily Rodriguez',
    role: 'Director of Operations, GlobalTech',
    content: 'Their software solutions helped us achieve remarkable improvements in our operations. The ROI has been incredible.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    metrics: {
      cost: '45%',
      efficiency: '70%',
      time: '60%',
    },
  },
];

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 relative overflow-hidden">
      <RippleBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6 neon-glow">What Our Clients Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say about working with us.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        <MetricsScroll />
      </div>
    </section>
  );
}