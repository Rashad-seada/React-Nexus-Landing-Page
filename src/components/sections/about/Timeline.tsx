import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2010',
    title: 'Founded',
    description: 'Started with a vision to transform digital landscapes',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    year: '2015',
    title: 'Global Expansion',
    description: 'Opened offices in 5 countries',
    gradient: 'from-blue-600 to-purple-600',
  },
  {
    year: '2018',
    title: 'Innovation Award',
    description: 'Recognized for breakthrough AI solutions',
    gradient: 'from-pink-600 to-orange-600',
  },
  {
    year: '2023',
    title: 'Industry Leader',
    description: 'Ranked among top software companies globally',
    gradient: 'from-indigo-600 to-purple-600',
  },
];

interface TimelineProps {
  inView: boolean;
}

export function Timeline({ inView }: TimelineProps) {
  return (
    <div className="relative">
      {/* Connecting ribbon */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600/50 via-pink-600/50 to-blue-600/50"
        initial={{ height: 0 }}
        animate={inView ? { height: '100%' } : {}}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      <div className="relative">
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.year}
            className={`flex items-center gap-8 mb-16 ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="flex-1">
              <motion.div
                className="glass-card p-6 rounded-2xl relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
              >
                {/* Gradient ribbon */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${milestone.gradient} opacity-10`}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                <div className="relative">
                  <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-400">{milestone.description}</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center relative z-10"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-white font-bold">{milestone.year}</span>
            </motion.div>

            <div className="flex-1" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}