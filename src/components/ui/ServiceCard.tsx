import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  service: {
    icon: LucideIcon;
    title: string;
    description: string;
  };
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const { icon: Icon, title, description } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="glass-card p-8 rounded-2xl h-full transition-all duration-300 hover:translate-y-[-5px]">
        <div className="relative mb-6 w-14 h-14">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
          <div className="relative flex items-center justify-center w-full h-full glass-effect rounded-xl">
            <Icon className="w-7 h-7 text-primary-400" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}