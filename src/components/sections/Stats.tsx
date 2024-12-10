import { motion } from 'framer-motion';
import { Award, Users, Code, Star } from 'lucide-react';
import { StatCard } from '../ui/StatCard';

const stats = [
  {
    icon: Users,
    value: '200+',
    label: 'Clients Worldwide',
  },
  {
    icon: Code,
    value: '500+',
    label: 'Projects Completed',
  },
  {
    icon: Award,
    value: '15+',
    label: 'Years Experience',
  },
  {
    icon: Star,
    value: '98%',
    label: 'Client Satisfaction',
  },
];

export function Stats() {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}