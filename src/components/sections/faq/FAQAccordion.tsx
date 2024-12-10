import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQAccordionProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  focusedIndex: number | null;
  setFocusedIndex: (index: number | null) => void;
}

export function FAQAccordion({ faqs, focusedIndex, setFocusedIndex }: FAQAccordionProps) {
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="glass-card rounded-lg overflow-hidden"
        >
          <motion.button
            onClick={() => setFocusedIndex(focusedIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left relative group"
            whileHover={{ scale: 1.01 }}
          >
            {/* Glowing line effect */}
            <motion.div
              className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-purple-600 to-pink-600"
              initial={{ width: "0%" }}
              animate={{ width: focusedIndex === index ? "100%" : "0%" }}
              transition={{ duration: 0.3 }}
            />

            <span className="text-lg font-semibold text-white">{faq.question}</span>
            <motion.div
              animate={{ rotate: focusedIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-primary-400" />
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {focusedIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4">
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}