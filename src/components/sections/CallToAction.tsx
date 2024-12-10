import { motion } from 'framer-motion';
import { MessageCircle, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { GlowingIcon } from '../ui/GlowingIcon';
import { GlowingGradient } from '../solutions/GlowingGradient';

export function CallToAction() {
  const { t } = useTranslation();
  const whatsappNumber = '+1234567890'; // Replace with your actual WhatsApp number

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <GlowingGradient />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-card max-w-4xl mx-auto p-12 rounded-2xl relative overflow-hidden"
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <GlowingIcon icon={Sparkles} className="mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6 neon-glow">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's discuss how our custom software solutions can help you achieve your business goals.
              </p>
            </motion.div>

            <div className="max-w-md mx-auto">
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
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
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-input-container"
                >
                  <textarea
                    placeholder="Project Brief"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-primary-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-all duration-300"
                  ></textarea>
                </motion.div>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToForm}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 neon-box"
                  >
                    Get Started Now
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
              </motion.form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}