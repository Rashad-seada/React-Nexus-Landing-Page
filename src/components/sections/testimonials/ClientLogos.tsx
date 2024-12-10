import { motion } from 'framer-motion';

const clientLogos = [
  'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tesla_Motors_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
];

export function ClientLogos() {
  return (
    <div className="mb-16">
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10" />
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
          className="flex gap-12 items-center"
        >
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Client Logo"
              className="h-12 object-contain opacity-50 hover:opacity-100 transition-opacity filter invert"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}