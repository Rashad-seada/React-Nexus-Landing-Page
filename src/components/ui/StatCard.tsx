import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  stat: {
    icon: LucideIcon;
    value: string;
    label: string;
  };
  index: number;
}

export function StatCard({ stat, index }: StatCardProps) {
  const { icon: Icon, value, label } = stat;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card p-6 rounded-2xl text-center"
    >
      <div className="flex justify-center mb-4">
        <Icon className="w-8 h-8 text-primary-400" />
      </div>
      <div className="text-3xl font-bold text-white mb-2">{value}</div>
      <div className="text-gray-400">{label}</div>
    </motion.div>
  );
}