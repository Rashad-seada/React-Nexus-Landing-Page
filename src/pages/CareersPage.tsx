import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Heart, Rocket } from 'lucide-react';
import { GlowingGradient } from '../components/solutions/GlowingGradient';
import { WorkerSignIn } from '../components/careers/WorkerSignIn';

const benefits = [
  {
    icon: Users,
    title: 'Collaborative Environment',
    description: 'Work with talented individuals in a supportive team setting.',
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health coverage and wellness programs.',
  },
  {
    icon: Rocket,
    title: 'Growth Opportunities',
    description: 'Continuous learning and career advancement paths.',
  },
];

const openings = [
  {
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'San Francisco, CA',
    type: 'Full-time',
  },
  {
    title: 'DevOps Engineer',
    department: 'Operations',
    location: 'Remote',
    type: 'Full-time',
  },
];

export function CareersPage() {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <GlowingGradient />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white neon-glow block mb-2">
                Join Our Team
              </span>
              <span className="gradient-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                Shape the Future
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Be part of a team that's revolutionizing the tech industry with innovative solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold"
              >
                View Open Positions
              </motion.button>
              <motion.a
                href="#employee-signin"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-colors"
              >
                Employee Sign In
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Why Join Us</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer more than just a job - we provide an environment where you can grow, innovate, and make an impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-8 rounded-2xl text-center"
              >
                <benefit.icon className="w-12 h-12 text-primary-400 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Open Positions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join our team of passionate innovators and help shape the future of technology.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="text-primary-400">{job.department}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400">{job.location}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400">{job.type}</span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold"
                  >
                    Apply Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Sign In Section */}
      <div id="employee-signin">
        <WorkerSignIn />
      </div>
    </div>
  );
}