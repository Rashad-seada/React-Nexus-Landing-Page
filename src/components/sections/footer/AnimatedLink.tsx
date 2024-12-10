import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface AnimatedLinkProps {
  to: string;
  children: React.ReactNode;
}

export function AnimatedLink({ to, children }: AnimatedLinkProps) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="relative group inline-block"
    >
      <Link
        to={to}
        className="text-gray-400 group-hover:text-primary-400 transition-colors"
      >
        {children}
        <motion.div
          className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"
          whileHover={{ width: "100%" }}
        />
      </Link>
    </motion.div>
  );
}