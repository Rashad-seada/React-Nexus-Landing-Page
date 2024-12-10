import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Solutions', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between py-6">
        <Link to="/">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Logo />
          </motion.div>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative group ${
                isActive(item.path)
                  ? 'text-primary-400'
                  : 'text-white hover:text-primary-400'
              } transition-colors duration-300`}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                {item.label}
              </motion.span>
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"
                whileHover={{ width: "100%" }}
              />
            </Link>
          ))}
          <Link to="/contact">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group px-6 py-2 rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition-colors duration-300" />
              <span className="relative text-white">Get Started</span>
            </motion.button>
          </Link>
        </div>
        
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-black/10 backdrop-blur-xl border-b border-white/5 py-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-2 ${
                isActive(item.path)
                  ? 'text-primary-400'
                  : 'text-white hover:text-primary-400'
              } transition-colors duration-300`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block px-4 py-2 mt-2 text-primary-400 hover:text-primary-300 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </Link>
        </motion.div>
      )}
    </div>
  );
}