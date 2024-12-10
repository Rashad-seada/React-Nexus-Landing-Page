import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { GlowingIcon } from '../ui/GlowingIcon';

export function Contact() {
  const { t } = useTranslation();
  const whatsappNumber = '+1234567890'; // Replace with your actual WhatsApp number

  return (
    <section id="contact-form" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <GlowingIcon icon={Send} className="mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6 neon-glow">Get in Touch</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Let's discuss how we can help bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl" />
                </div>

                <form className="relative space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass-input-container"
                    >
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-primary-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-all duration-300"
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass-input-container"
                    >
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-primary-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-all duration-300"
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-input-container"
                  >
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-primary-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-all duration-300"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-input-container"
                  >
                    <textarea
                      placeholder="Your Message"
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-primary-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-all duration-300"
                    ></textarea>
                  </motion.div>
                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 neon-box"
                    >
                      Send Message
                    </motion.button>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-effect px-6 rounded-lg flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
                    >
                      <MessageCircle className="w-6 h-6" />
                    </motion.a>
                  </div>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { icon: Mail, title: 'Email Us', content: 'contact@nexustech.com' },
                { icon: Phone, title: 'Call Us', content: '+1 (555) 123-4567' },
                { icon: MapPin, title: 'Visit Us', content: '123 Innovation Drive\nTech Valley, CA 94025' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 rounded-2xl relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-300" />
                  <div className="relative flex items-start gap-4">
                    <GlowingIcon icon={item.icon} />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 whitespace-pre-line">{item.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 rounded-2xl overflow-hidden"
              >
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6282365564086!2d-122.08374688439792!3d37.42199997982367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1614308918936!5m2!1sen!2sus"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}