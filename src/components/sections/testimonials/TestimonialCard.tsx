import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: {
    name: string;
    role: string;
    content: string;
    image: string;
    metrics: {
      cost: string;
      efficiency: string;
      time: string;
    };
  };
  index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true }}
      className="glass-card p-6 rounded-2xl"
    >
      <div className="flex items-center gap-4 mb-6">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
          <p className="text-gray-400">{testimonial.role}</p>
        </div>
      </div>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-primary-400 text-primary-400" />
        ))}
      </div>
      <p className="text-gray-300 mb-6">{testimonial.content}</p>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-primary-400 font-bold">{testimonial.metrics.cost}</div>
          <div className="text-sm text-gray-400">Cost Reduction</div>
        </div>
        <div className="text-center">
          <div className="text-primary-400 font-bold">{testimonial.metrics.efficiency}</div>
          <div className="text-sm text-gray-400">Efficiency Increase</div>
        </div>
        <div className="text-center">
          <div className="text-primary-400 font-bold">{testimonial.metrics.time}</div>
          <div className="text-sm text-gray-400">Time Saved</div>
        </div>
      </div>
    </motion.div>
  );
}