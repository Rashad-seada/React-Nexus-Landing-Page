import { motion } from 'framer-motion';
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AuroraBackground } from './footer/AuroraBackground';
import { GlowingIcon } from './footer/GlowingIcon';
import { AnimatedLink } from './footer/AnimatedLink';

const links = {
  company: [
    { id: 'about', label: 'About', path: '/about' },
    { id: 'careers', label: 'Careers', path: '/careers' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ],
  services: [
    { id: 'web-dev', label: 'Web Development', path: '/services#web-development' },
    { id: 'mobile-apps', label: 'Mobile Apps', path: '/services#mobile-apps' },
    { id: 'cloud', label: 'Cloud Solutions', path: '/services#cloud' },
    { id: 'ai', label: 'AI Integration', path: '/services#ai' },
  ],
  resources: [
    { id: 'blog', label: 'Blog', path: '/blog' },
    { id: 'portfolio', label: 'Portfolio', path: '/portfolio' },
  ],
  social: [
    { id: 'twitter', icon: Twitter, href: '#', label: 'Twitter' },
    { id: 'facebook', icon: Facebook, href: '#', label: 'Facebook' },
    { id: 'instagram', icon: Instagram, href: '#', label: 'Instagram' },
    { id: 'linkedin', icon: Linkedin, href: '#', label: 'LinkedIn' },
    { id: 'github', icon: Github, href: '#', label: 'GitHub' },
  ],
};

export function Footer() {
  return (
    <footer className="py-12 relative overflow-hidden">
      <AuroraBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/">
              <h3 className="text-2xl font-bold text-white mb-6">
                <span className="text-primary-400">Nexus</span>Tech
              </h3>
            </Link>
            <p className="text-gray-400 mb-6">
              Transforming businesses through innovative software solutions.
            </p>
            <div className="flex gap-4">
              {links.social.map((social) => (
                <GlowingIcon
                  key={social.id}
                  href={social.href}
                  icon={social.icon}
                  label={social.label}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.id}>
                  <AnimatedLink to={link.path}>{link.label}</AnimatedLink>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {links.services.map((link) => (
                <li key={link.id}>
                  <AnimatedLink to={link.path}>{link.label}</AnimatedLink>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {links.resources.map((link) => (
                <li key={link.id}>
                  <AnimatedLink to={link.path}>{link.label}</AnimatedLink>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© 2024 NexusTech. All rights reserved.</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <Link
                to="/contact"
                className="text-primary-400 font-semibold group-hover:text-primary-300 transition-colors"
              >
                Let's Build Something Amazing
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"
                  whileHover={{ width: "100%" }}
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}