import { motion } from 'framer-motion';
import { LucideIcon, ArrowUp, ArrowDown } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  trend?: string;
  isPositive?: boolean;
}

export function StatsCard({ icon: Icon, label, value, trend, isPositive }: StatsCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="glass-card p-6 rounded-xl relative group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500" />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
            className="p-3 rounded-lg bg-primary-500/20"
          >
            <Icon className="w-6 h-6 text-primary-400" />
          </motion.div>
          {trend && (
            <div className={`flex items-center gap-1 text-sm ${
              isPositive ? 'text-green-400' : 'text-red-400'
            }`}>
              {isPositive ? (
                <ArrowUp className="w-4 h-4" />
              ) : (
                <ArrowDown className="w-4 h-4" />
              )}
              {trend}
            </div>
          )}
        </div>
        <p className="text-gray-400 mb-1">{label}</p>
        <p className="text-2xl font-bold text-white">{value}</p>
      </div>
    </motion.div>
  );
}