import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { CircuitBackground } from './faq/CircuitBackground';
import { FAQAccordion } from './faq/FAQAccordion';
import { SearchBar } from './faq/SearchBar';

const faqs = [
  {
    question: 'What types of software solutions do you provide?',
    answer: 'We offer a comprehensive range of software solutions including custom application development, enterprise software, cloud solutions, AI/ML integration, and mobile app development.',
  },
  {
    question: 'How long does a typical project take to complete?',
    answer: 'Project timelines vary based on complexity and requirements. Simple projects may take 2-3 months, while enterprise solutions can take 6-12 months. We provide a detailed timeline during our initial consultation.',
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Yes, we offer comprehensive support and maintenance packages to ensure your software continues to perform optimally. This includes regular updates, bug fixes, and technical support.',
  },
  {
    question: 'What is your development process?',
    answer: 'We follow an agile development methodology with regular sprints and client check-ins. This ensures transparency, flexibility, and allows for continuous feedback throughout the development process.',
  },
  {
    question: 'How do you ensure the security of our data?',
    answer: 'We implement industry-standard security protocols and best practices, including encryption, secure authentication, and regular security audits to protect your sensitive data.',
  },
];

export function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact-form');
    if (contactElement) {
      contactElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <CircuitBackground focusedIndex={focusedIndex} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-glow">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 mb-12">
              Find answers to common questions about our services and process.
            </p>
            
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
            />
          </div>

          <FAQAccordion
            faqs={filteredFaqs}
            focusedIndex={focusedIndex}
            setFocusedIndex={setFocusedIndex}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-4">Still have questions?</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-colors neon-box"
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}