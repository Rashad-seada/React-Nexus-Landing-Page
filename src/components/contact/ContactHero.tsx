import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { GlowingGradient } from '../solutions/GlowingGradient';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@nexustech.com',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    gradient: 'from-pink-600 to-blue-600',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
    gradient: 'from-blue-600 to-purple-600',
  },
  {
    icon: MessageCircle,
    label: 'Live Chat',
    value: '24/7 Support',
    gradient: 'from-purple-600 to-pink-600',
  },
];

export function ContactHero() {
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
    <section className="min-h-[80vh] relative flex items-center overflow-hidden pt-48">
      <GlowingGradient />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white neon-glow block mb-2">
                Let's Build Something
              </span>
              <span className="gradient-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                Amazing Together
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
              Have a project in mind? We'd love to discuss how we can help bring your ideas to life.
              Reach out to us through any of these channels.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 rounded-2xl group-hover:from-purple-600/20 group-hover:to-pink-600/20 transition-all duration-500 blur-sm" />
                
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 rounded-2xl relative cursor-pointer"
                >
                  <motion.div
                    className="w-12 h-12 mx-auto mb-4 relative"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center justify-center w-full h-full">
                      <method.icon className="w-6 h-6 text-primary-400" />
                    </div>
                  </motion.div>

                  <h2 className="text-lg font-semibold text-white mb-2">
                    {method.label}
                  </h2>
                  <motion.span
                    className="text-gray-400"
                    whileHover={{ color: '#c084fc' }}
                  >
                    {method.value}
                  </motion.span>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12"
          >
            <div className="relative inline-block">
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <motion.button
                onClick={scrollToForm}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold"
              >
                Start Your Project Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}