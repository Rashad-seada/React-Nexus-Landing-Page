import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    expertise: 'Strategy & Innovation',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    expertise: 'Technology & Architecture',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Michael Chen',
    role: 'Lead Developer',
    expertise: 'Full-Stack Development',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    expertise: 'Product Strategy',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  }
];

export function TeamGrid() {
  return (
    <div>
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-white text-center mb-16"
      >
        Meet Our Team
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-2xl relative overflow-hidden group"
            >
              {/* Subtle gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Subtle border glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute inset-px bg-gradient-to-r from-purple-600/10 to-pink-600/10 blur-sm" />
              </div>

              <div className="relative">
                {/* Initial letter with minimal glow */}
                <motion.div
                  className="w-20 h-20 mx-auto mb-6 relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative w-full h-full glass-effect rounded-full flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors duration-300">
                    <span className="text-3xl font-bold text-white/80 group-hover:text-white transition-colors duration-300">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </motion.div>

                <div className="text-center">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {member.name}
                  </h4>
                  <p className="text-primary-400/80 group-hover:text-primary-400 transition-colors duration-300 mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    {member.expertise}
                  </p>

                  {/* Social links with subtle hover effect */}
                  <div className="flex justify-center gap-4">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <motion.a
                        key={platform}
                        href={url}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {platform === 'linkedin' && <Linkedin className="w-5 h-5" />}
                        {platform === 'twitter' && <Twitter className="w-5 h-5" />}
                        {platform === 'github' && <Github className="w-5 h-5" />}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}